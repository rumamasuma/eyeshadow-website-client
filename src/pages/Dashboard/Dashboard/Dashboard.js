import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import {  Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProducts from '../AddProducts/AddProducts';
import './Dashboard.css';
import ManageOrders from '../ManageOrders/ManageOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PayOrder from '../PayOrder/PayOrder';
import Review from '../Review/Review';

const Dashboard = () => {
   const { user,logOut ,admin} = useAuth();

   let { path, url } = useRouteMatch();
    return (
         <div className=''>
             <div className="row">
 <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-bg">
    <div className="container-fluid">
     <h2 className="text-white">Dashboard</h2>
<div className='d-flex'>
<Link to="/home"><Button  className='nav-bg m-2'>Home</Button></Link> 
<Button onClick={logOut}   className='nav-bg m-2'>LogOut</Button>
</div>
    </div>
  </nav>

           </div>
             <div className='row '>
              <div className= 'col-md-3 bg-white text-white dashboard border '>

 <Link to={`${url}`}><Button  className='nav-bg m-3'>Dashboard</Button></Link>
{
  user?.email && (!admin) &&
  <div>
     <Link to={`${url}/orders`}><Button  variant="dark">My Orders</Button></Link>
 <Link to={`${url}/payOrder`}><Button  variant="dark">Online Payment</Button></Link>
 <Link to={`${url}/review`}><Button  variant="dark">Review</Button></Link>
  </div>
}
 {/* admin panel */}

{ admin && 
    <div>
         <Link to={`${url}/makeAdmin`}><Button className='nav-bg m-3' >Make Admin</Button></Link><br/>
          <Link to={`${url}/manageOrders`}><Button  className='nav-bg m-3'>Manage All Orders</Button></Link><br/>
          <Link to={`${url}/manageProducts`}><Button  className='nav-bg m-3'>Manage Products</Button></Link><br/>
          <Link to={`${url}/addProducts`}><Button  className='nav-bg m-3'>Add Products</Button></Link>
    </div>
}
              </div>
             <div className= 'col-md-8'>
                <Switch>
                <AdminRoute path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
                </AdminRoute>

                <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
                </AdminRoute>

                <AdminRoute path={`${path}/manageProducts`}>
               <ManageProducts></ManageProducts>
                </AdminRoute>

                <AdminRoute path={`${path}/addProducts`}>
                <AddProducts></AddProducts>
                </AdminRoute>
                <Route path={`${path}/orders`}>
               <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/payOrder`}>
               <PayOrder></PayOrder>
                </Route>
                <Route path={`${path}/review`}>
               <Review></Review>
                </Route>
                </Switch>
            </div>
          </div>
         </div>
  
    );
};

export default Dashboard;
{/* <h2 className="text-white">Dashboard</h2>
<Link to="/home"><Button  variant="outline-info">Home</Button></Link> 
<Button onClick={logOut}  variant="outline-info">LogOut</Button> */}
