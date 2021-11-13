import React from 'react';
import {Navbar, Container , Nav } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import PayOrder from '../PayOrder/PayOrder';
import { Link } from 'react-router-dom';


const DashboardHome = () => {
    return (
        <div>
             <div>

              
<Nav.Link as={Link} to="/payOrder" >Pay Order</Nav.Link>
<Nav.Link as={Link} to="/review" >Review</Nav.Link>
</div>
        </div>
    );
};

export default DashboardHome;