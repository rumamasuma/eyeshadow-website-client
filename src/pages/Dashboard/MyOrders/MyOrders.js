import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);
const[filterOrder, setFilterOrder] = useState([]);

useEffect(() =>{
  fetch('http://localhost:5000/orders')
  .then(res => res.json())
  .then(data => {
     setOrders(data);
  setFilterOrder(orders.filter(booked => booked.email === user.email));         
  })
},[orders,user.email]);


// delte order
const handleDelete = id =>{
  const url = `http://localhost:5000/orders/${id}`;
  fetch(url,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.deletedCount){
      alert('Order Deleted Successfully');
        const remaining = filterOrder.filter(booking => booking._id !== id);
        setFilterOrder(remaining);
    }
  })
}
 

    return (
        <div id='myOrders'>
            <h2>Your Orders {orders.length}</h2>
            <div>
            <div className=' col-md-6'>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>  
      <th>Customer Name</th>
      <th>Email</th>
      <th> Ordered Products </th>
      <th> Confirm  Order/ Delete </th>
    </tr>
  </thead>
  <tbody>
  {  filterOrder.map (data =>  <tr key={data._id}>
   
      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>{data.brandName}</td>
      <td><button onClick={()=>handleDelete(data._id)}>Delete</button></td>
    </tr>
   ) }
  
  </tbody>  
</Table>
            </div>
            </div>
        </div>
    );
};

export default MyOrders;