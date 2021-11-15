
import React,{useState, useEffect} from 'react';
import {  Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

useEffect(()=>{
    fetch('https://radiant-brushlands-78511.herokuapp.com/orders')
    .then(res =>res.json())
    .then(data => {
        setAllOrders(data);
    })
},[])

    return (
        <div className='container mt-5 p-5'>
            <h2>Manage All Orders</h2>
        <div  className="row  p-2">
          <Table striped  hover responsive="sm" >
     <thead>
      <tr>
          <th>SL No.</th>   
          <th> Name</th>
          <th>Email</th>
          <th>Products</th>
          <th>Status</th>
        </tr>
   </thead>
   <tbody>
      {
          allOrders.map((order, index ) =>  <tr key={order._id}>
              <td>{index}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.brandName}</td>
              <td >{order.status}</td>
            </tr> )
      }

   </tbody>
             </Table>
            </div>
        </div>
    );
};

export default ManageOrders;
