import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Navbar, Container , Nav } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import PayOrder from '../PayOrder/PayOrder';
import { Link } from 'react-router-dom';

const Dashboard = () => {
   
    return (
            <div>

              
             <Nav.Link as={Link} to="/payOrder" >Pay Order</Nav.Link>
             <Nav.Link as={Link} to="/review" >Review</Nav.Link>
            </div>
//     <Navbar bg="info" expand={false}>
//    <Container fluid>
//     <Navbar.Brand href="#">Dashboard</Navbar.Brand>
//     <Nav.Link as={HashLink} to="/orders" >My Orders </Nav.Link>
//     <Navbar.Toggle aria-controls="offcanvasNavbar" />
   
//     <Navbar.Offcanvas  className ="bg-info w-25"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//       placement="end"
//     >
       
//       <Offcanvas.Header closeButton>
//         <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
//       </Offcanvas.Header>
      
//       <Offcanvas.Body>
//         <Nav className="justify-content-end flex-grow-1 pe-3">
//         <Nav.Link as={HashLink} to="#orders" >My Orders </Nav.Link>
//           <Nav.Link href="#action2">Link</Nav.Link>
         
         
//         </Nav>
     
//       </Offcanvas.Body>
//     </Navbar.Offcanvas>
//   </Container>
// </Navbar>
  
    );
};

export default Dashboard;