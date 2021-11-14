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

         <div >
          {/* dashboard navbar */}
     <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-bg">
      <div className="container-fluid">
     <h2 className="text-white">Dashboard</h2>
      <div className='d-flex'>
    <Link to="/home"><Button  className='nav-bg m-2'>Home</Button></Link> 
    <Button onClick={logOut}   className='nav-bg m-2'>LogOut</Button>
     </div>
  </div>
  </nav>

    
      <div className='container'>
        <div className='row'>
         <div className= 'col-md-3 bg-white text-white dashboard border fixed '>

     <Link to={`${url}`}><Button  className='nav-bg m-3'>Dashboard</Button></Link>
  {
     user?.email && 
    <div className=' m-3'>
     <Link to={`${url}/orders`} className='header m-3 p-3 fw-bold fs-5'>  My Orders   
       </Link><br/>
 <Link to={`${url}/payOrder`} className='header m-3 p-3 fw-bold fs-5'>Online Payment</Link><br/>
 <Link to={`${url}/review`}className='header  p-3 fw-bold fs-5'>Review</Link>
  </div>
}
 {/* admin panel */}

{ admin && 
    <div>
         <Link to={`${url}/makeAdmin`} className='header mb-3 p-3 fw-bold fs-5'>Make Admin
         </Link><br/>
          <Link to={`${url}/manageOrders`} className='header mb-3 p-3 fw-bold fs-5'>Manage All Orders</Link><br/>
          <Link to={`${url}/manageProducts`} className='header mb-3 p-3 fw-bold fs-5'>Manage Products</Link><br/>
          <Link to={`${url}/addProducts`} className='header mb-3 p-3 fw-bold fs-5'>Add Products</Link>
    </div>
}
              </div>
             <div className= 'col-md-9'>
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
         </div>
  
    );
};

export default Dashboard;
// (!admin) &&

