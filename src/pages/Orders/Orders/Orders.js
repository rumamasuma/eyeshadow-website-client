import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../Home/Header/Header';
import { useForm } from "react-hook-form";
import './Orders.css';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
     const {productId}= useParams();
     const {user} = useAuth();
     const [orderProduct, setOrderProduct]= useState({});


    useEffect(() =>{
    fetch(`http://localhost:5000/products/${productId}`)
    .then(res => res.json())
    .then(data => setOrderProduct(data));
    },[])

     const { register, handleSubmit ,reset } = useForm();
   // form submit
     const onSubmit = data =>{
    //  console.log(data);
     data.status ="pending";
    fetch('http://localhost:5000/orders', {
      method :'POST',
      headers :{
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res =>res.json())
    .then(data => {
      // console.log(data);
      if(data.insertedId){
        alert(' Congratulations ! Your Order Added Succesfully.');
        reset();
    }
    })
     }

   return (
        <div>
            <Header></Header>
            <div className="row g-4">
     <div className="col-md-6 product p-4">
     <div className="card">
      <img src={orderProduct.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{orderProduct.brandName}</h4>
        <h2 className="card-title">Only at {orderProduct.price}</h2>
        <p className="card-text">{orderProduct.description}</p>
        <h4>Product Id : M- {productId}</h4>
      </div>
      </div>
      </div>

  {/* customer form */}
  <div className="col-md-6 order p-4 review">
  <h3 className='form-heading'> Customer Orders Form </h3>

  <form onSubmit={handleSubmit(onSubmit)}> 
    <input {...register("name") }
      defaultValue={user.displayName}         
      placeholder='User Name'  />

     <input {...register("email") } 
      defaultValue={user.email}  name="email"  
       placeholder='User Email' />

     <input {...register("contact") } 
      placeholder='Contact Number' />

      <input  {...register("brandName") } 
      defaultValue={orderProduct.brandName}   
      placeholder='Product Name' />

      <input  {...register("price")}
      defaultValue= {orderProduct.price} 
      placeholder='Product Price' />

    <input type='number'  {...register("quantity")} 
     placeholder='Product Quantity' />

    <input  {...register("productId")} 
    defaultValue={productId} 
    placeholder='Product ID' />

   <input type="submit" className='form-heading' />
  </form>
  </div> 
  </div>
 </div>
    );
};

export default Orders;