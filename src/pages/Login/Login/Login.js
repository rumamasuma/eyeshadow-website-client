import React, { useState } from 'react';
import { NavLink, useLocation , useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg';



const Login = () => {

    const [loginData, setLoginData] = useState({});
     const {user, loginUser,signInWithGoogle, isLoading , authError} = useAuth();
       
    const location = useLocation();
    const history = useHistory();

     const handleOnChange = e =>{
     const field = e.target.name;
     const value= e.target.value;
    //  console.log(field,value);
    const newLoginData = {...loginData};
    newLoginData[field]=value;
    setLoginData(newLoginData);
    }

// login form handle
const handleLoginSubmit = e =>{    
    loginUser(loginData.email, loginData.password , location, history);
    e.preventDefault();
}
// google sign in
const handleGoogleSignIn =() =>{
    signInWithGoogle(location, history)
}
    return (
      
             <div>
            <div className="container">        
          <h2 className='header p-4 '> Hello !! Welcome Back</h2>
          <div className="row ">             
              <div className="col-md-5 p-4">
<form onSubmit={handleLoginSubmit}>
<div className="mb-3">
  <label className="form-label">Your Email </label>
  <input type="email" className="form-control" 
  name="email" onChange={handleOnChange}
   />  
</div>
<div className="mb-3">
  <label  className="form-label">Password</label>
  <input type="password" className="form-control" 
  name="password" onChange={handleOnChange} 
  />
</div>
<button type="submit" className="btn btn-primary w-100">Login</button>
<NavLink to="/registration" style={{textDecoration : 'none', color: 'purple'}}>
    <h5>New User ? Please Register.</h5>
</NavLink>
</form>

{ /* spinner use */ }
{
isLoading && <div className="spinner-border text-info" role="status">
<span className="visually-hidden">Loading...</span>
</div>
}
  {/* success msg */}
{user?.email && <div className="alert alert-success d-flex align-items-center" role="alert">

<div>
 Welcome ! Successfully Login.
</div>
</div>
}
  {/* error */}
  {
      authError && <div className="alert alert-danger" role="alert">  {authError} </div>
     }
       <p>........ Or ..........</p>
        <button onClick={handleGoogleSignIn}  type="submit" className="btn btn-primary w-100">Google Login</button>
   </div>
      
          <div className="col-md-5">
           <img src={login} alt="" />
          </div>
          </div>
      </div>
     </div>
    );
};

export default Login;