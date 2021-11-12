import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.jpg';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Home/Header/Header';

const Registration = () => {
    
    const [loginData, setLoginData] = useState({})
    const {user, authError, registerUser , isLoading} = useAuth();
    const history = useHistory();

    const handleOnBlur = e =>{
     const field = e.target.name;
     const value= e.target.value;
    //  console.log(field,value);
    const newLoginData = {...loginData};
    newLoginData[field]=value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
    }


const handleLoginSubmit = e =>{
    if(loginData.password !== loginData.password2){
        alert('Your password did not match.Try again.');
        return;
    }
    registerUser(loginData.email, loginData.password ,loginData.name, history);
    e.preventDefault();
}
    return (
        <div>
                  <Header></Header>
        <div className='container'>
            <h3>Register For  Order Your Desire Product </h3>
                 <div className="row ">             
                <div className="col-md-5 p-4">
 {
     !isLoading && 
  <form onSubmit={handleLoginSubmit}>
  <div className="mb-3">
    <label className="form-label">Your Name</label>
    <input type="text" className="form-control" 
    name="name"onBlur={handleOnBlur}
     />  
  </div>
  <div className="mb-3">
    <label className="form-label">Your Email </label>
    <input type="email" className="form-control" 
    name="email"onBlur={handleOnBlur}
     />  
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" 
    name="password"onBlur={handleOnBlur} 
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Retype-Password</label>
    <input type="password" className="form-control" 
    name="password2"onBlur={handleOnBlur} 
    />
  </div>
  <button type="submit" className="btn btn-primary w-100">Register</button>
  <NavLink to="/login" style={{textDecoration : 'none', color: 'purple'}}>
      <h5>Already Registered ? Please Login.</h5>
  </NavLink>
  </form>
    }
  { /* spinner use */ }
  {
  isLoading && <div className="spinner-border text-info" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
  }
  {/* success msg */}
{user?.email && <div className="alert alert-success d-flex align-items-center" role="alert">
 
  <div>
    Successfully registration complete.
  </div>
 </div>
   }
   {/* error */}
       {
        authError && <div className="alert alert-danger" role="alert">  {authError} </div>
       }

         </div>
                <div className="col-md-5">
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Registration;