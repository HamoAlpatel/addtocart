import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavApp() {
  let countCart = useSelector((state)=>state.cart)
  return (
    <Navbar expand="lg"  className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand'>Cart App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link fs-5'>Products</Link>
            <Link to="/cart" className='nav-link fs-5'>Cart-{countCart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavApp;