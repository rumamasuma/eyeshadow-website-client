import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const handleOnBlur= e =>{
    setEmail(e.target.value);
}
// form submit
     const onSubmit = data => {
        console.log(data);
        const user ={email};
        fetch('https://radiant-brushlands-78511.herokuapp.com/users/admin', {
            method: "PUT" ,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount){
                setSuccessMsg(true);
            }
            reset();
        })
    }
    return (
       <div className='row d-flex align-items-center justify-content-center'>
            <div className='border p-5 m-4 col-md-6 text-center review'>
            <h2>Make  an Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("email")} type="email" placeholder='Email'
                onBlur={handleOnBlur}
               />
                <input   type="submit" />
           </form>
           {successMsg && <div className="alert alert-success d-flex align-items-center" role="alert">
                <div>Made Admin Successfully.</div>
               </div> }
        </div>
       </div>
    );
};

export default MakeAdmin;