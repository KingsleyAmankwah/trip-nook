import Container from '../Container';

function Navbar() {
  return (
    <div className='fixed w-full bg-white shadow-sm z-10'>
      <div className="py-4 border-b-[1px]">
        <Container></Container>
      </div>
    </div>
  )
}

export default Navbar;