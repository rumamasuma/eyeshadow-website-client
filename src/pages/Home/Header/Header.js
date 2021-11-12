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
      <Nav.Link   as={Link} to="/home" >Home</Nav.Link>
      <Nav.Link as={Link} to="/about" >About us</Nav.Link>
      <Nav.Link as={Link} to="/orders" >My Orders</Nav.Link>
   
   
      {/* {
        user?.email &&
           <Nav.Link as={Link} to="/booking" > My Orders</Nav.Link>        
      } */}
        <Nav.Link as={Link} to="/addNewProducts" >Add New Products</Nav.Link>
      
   {
     user?.email ?
     <div className= 'd-flex'>
          <Nav.Link as={Link}   to="/dashboard" >Dashboard</Nav.Link>
      
       <Button onClick={logOut}  variant="outline-info">LogOut</Button>
       </div>
     :
     <Nav.Link as={Link} to="/login">Login</Nav.Link> 
   }
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;