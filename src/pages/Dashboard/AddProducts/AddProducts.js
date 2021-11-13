import React from 'react';
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const { register, handleSubmit ,reset } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method :'POST',
            headers :{
              'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
          })
          .then(res =>res.json())
          .then(data => {
           if(data.insertedId){
               alert('Product Added Successfully.')
               reset();
           }      
    })
 }
    return (
        <div className='review'>
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img") } placeholder='img url' />   
      <input {...register("brandName") } placeholder='Brand Name' />
      <input  {...register("price")} placeholder='Product Price' />
      <input {...register("description")} placeholder='Product Description' />
      <input type="submit" />
     </form>
        </div>
    );
};

export default AddProducts;
// .then(res => {
        //    if(res.data.insertedId){
        //        alert('Service Added Successfully.')
        //        reset();
        //    }