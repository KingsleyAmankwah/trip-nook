import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  const email = session?.user?.email;
  if (!email) return null;

  const currentUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!currentUser) return null;

  return {
    ...currentUser,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
    emailVerified: currentUser.emailVerified?.toISOString() || null,
  };
}
