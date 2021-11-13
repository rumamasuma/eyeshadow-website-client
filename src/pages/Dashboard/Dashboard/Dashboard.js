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
         <div className=' container'>
             <div className="row">
 <div className=''></div>
 <div className='col-md-12'>
 <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <h2 className="text-white">Dashboard</h2>
      <Link to="/home"><Button  variant="outline-info">Home</Button></Link> 
      <Button onClick={logOut}  variant="outline-info">LogOut</Button>
    </div>
  </nav>
 </div>
           </div>
             <div className='row '>
              <div className= 'col-md-3 bg-dark text-white dashboard '>

 <Link to={`${url}`}><Button  variant="dark">Dashboard</Button></Link>
{
  user?.email && 
  <div>
     <Link to={`${url}/orders`}><Button  variant="dark">My Orders</Button></Link>
 <Link to={`${url}/payOrder`}><Button  variant="dark">Online Payment</Button></Link>
 <Link to={`${url}/review`}><Button  variant="dark">Review</Button></Link>
  </div>
}
 {/* admin panel */}

{ admin && 
    <div>
         <Link to={`${url}/makeAdmin`}><Button  variant="dark">Make Admin</Button></Link>
          <Link to={`${url}/manageOrders`}><Button  variant="dark">Manage All Orders</Button></Link>
          <Link to={`${url}/manageProducts`}><Button  variant="dark">Manage Products</Button></Link>
          <Link to={`${url}/addProducts`}><Button  variant="dark">Add Products</Button></Link>
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
