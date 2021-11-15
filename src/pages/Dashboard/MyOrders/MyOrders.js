import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);
const[filterOrder, setFilterOrder] = useState([]);

useEffect(() =>{
  fetch('https://radiant-brushlands-78511.herokuapp.com/orders')
  .then(res => res.json())
  .then(data => {
     setOrders(data);
  setFilterOrder(orders.filter(booked => booked.email === user.email));         
  })
},[orders,user.email]);


// delete order
const handleDelete = id =>{
  const url = `https://radiant-brushlands-78511.herokuapp.com/orders/${id}`;
  fetch(url,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.deletedCount){
      alert('Are you sure , to delete the order?');
        const remaining = filterOrder.filter(booking => booking._id !== id);
        setFilterOrder(remaining);
    }
  })
}
 

    return (
        <div className='m-5  p-5 '>
            <h2 className='header'>You Order {filterOrder.length} Product</h2>
            <div className='d-flex align-items-center justify-content-center'>
            <div className=' '>
            <table class=" table responsive">
  <thead>
    <tr>  
      <th>#</th>
      <th >Customer Name</th>
      <th >Email</th>
      <th >  Products </th>
      <th >Order  Confirm  / Cancel </th>
      <th > Status</th>
    </tr>
  </thead>
  <tbody>
  {  filterOrder.map ((data, index )=>  <tr key={data._id}>
       
      <td>{index}</td>
      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>{data.brandName}</td>
      <td><button onClick={()=>handleDelete(data._id)} className='btn-clr text-white'>Cancel</button></td>
      <td>{data.status}</td>
    </tr>
   ) }  
  </tbody>  
</table>
   </div>
   </div>
  </div>
    );
};

export default MyOrders;