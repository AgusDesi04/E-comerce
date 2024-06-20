import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarBootsrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container className=' absolute top-0 left-0 bg-[#242424]'>
        <Navbar.Brand href="#home"><img src="../public/carstorelogo.jpg" alt="" className='size-20 hover:size-24 duration-150'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white m-4 text-9xl'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white m-4 text-9xl'>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='bg-[#DAA520] m-4 '>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBootsrap;