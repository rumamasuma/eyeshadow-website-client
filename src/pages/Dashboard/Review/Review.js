import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Review.css';


const Review = () => {

    const {user}= useAuth();
    const { register, handleSubmit ,reset} = useForm();
   


    const onSubmit = data => {
        console.log(data);
        fetch('https://radiant-brushlands-78511.herokuapp.com/reviews', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            reset();
        })
    };


    return (
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='border p-5 m-3 col-md-6 text-center review'>
          <h2>Please Review Our Products</h2>
        <p>You can write about products bad side also.We will try to improve our products quality.Thank you for purchasing !</p>
          <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} defaultValue={user.displayName} />
      <textarea {...register("review")} placeholder="Review" />
      <input type="number" {...register("rating", { min: 0, max: 5 })}  placeholder='Rating' />
      <input   type="submit" />
    </form>
          </div>
        </div>
    );
};

export default Review;