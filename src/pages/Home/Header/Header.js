import React from 'react';
import { Container, Navbar, Nav ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo1.jpg';
import './Header.css';

const Header = () => {
  const {user,logOut} = useAuth();
    return (
        <>
            <Navbar  bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
    <Container>     
    <Navbar.Brand href="#home">
      <img src={logo} className='logo' alt="" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link   as={Link} to="/home" className='header m-2 rounded fst-italic fw-bold fs-5'>Home</Nav.Link>
      <Nav.Link as={Link} to="/explore" className='header m-2 rounded fst-italic fw-bold fs-5' >Explore Products</Nav.Link>
       
   {
     user?.email ?
     <div className= 'd-flex'>
          <Nav.Link as={Link}   to="/dashboard" className='header m-2 rounded fst-italic fw-bold fs-5'>Dashboard</Nav.Link>
      
       <Button onClick={logOut}  className='header-btn m-2 rounded fst-italic fw-bold fs-5 '>LogOut</Button>
       </div>
     :
     <Nav.Link as={Link} to="/login" className='header m-2 rounded fst-italic fw-bold fs-5'>Login</Nav.Link> 
   }
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;