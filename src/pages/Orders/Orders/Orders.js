import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../Home/Header/Header';
import { useForm } from "react-hook-form";
import './Orders.css';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Footer/Footer';

const Orders = () => {
     const {productId}= useParams();
     const {user} = useAuth();
     const [orderProduct, setOrderProduct]= useState({});


    useEffect(() =>{
    fetch(`https://radiant-brushlands-78511.herokuapp.com/products/${productId}`)
    .then(res => res.json())
    .then(data => setOrderProduct(data));
    },[productId])

     const { register, handleSubmit ,reset } = useForm();
   // form submit
     const onSubmit = data =>{
    //  console.log(data);
     data.status ="pending";
    fetch('https://radiant-brushlands-78511.herokuapp.com/orders', {
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
              <div classname='container'>
              <div className="row g-4 m-3">
     <div className="col-md-6 product p-4">
     <div className="card">
      <img src={orderProduct.img} className="card-img-top p-3" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{orderProduct.brandName}</h4>
        <h2 className="card-title">Only at {orderProduct.price}</h2>
        <p className="card-text">{orderProduct.description}</p>
        <h4>Product Id : M- {productId}</h4>
      </div>
      </div>
      </div>

  {/* customer form */}
  <div className="col-md-5 order p-5 review border  m-3">
  <h3 className='header'> Customer Orders Form </h3>

  <form onSubmit={handleSubmit(onSubmit)}> 
    <input {...register("name") }
      defaultValue={user.displayName}         
      placeholder='User Name'  />

     <input {...register("email") } 
      defaultValue={user.email}  name="email"  
       placeholder='User Email' />

     <input {...register("contact") } 
      placeholder='Contact Number' />
     <input {...register("address") } 
      placeholder='Address' />

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

   <input type="submit" />
  </form>
  </div> 
  </div>
  </div>
  <Footer></Footer>
 </div>
    );
};

export default Orders;