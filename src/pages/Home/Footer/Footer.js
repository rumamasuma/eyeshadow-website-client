import React from 'react';
import './Footer.css';
import logo from '../../../images/a1ca35caefda4532ec52a5a988abbe15.jpg';


const Footer = () => {
    return (
        <div className="row footer">
        <div className="col-md-4" >
          
          <img src={logo} alt="" className='logo m-2 rounded'  /> 
          <h3 className='text-white'>Diva EyeShadow Palette</h3>
        </div>
        <div className="col-md-4">
        <h3 className='text-white'>Contact Us</h3>
        <address className='icon'>
         Address: 22/5A,Boshundhora City Shopping Mall,Dhaka-3401. <br />
         Phone :+23456 <br />
         Email : divaeyeshadow@gmail.com
        </address>
        </div>
        <div className="col-md-4">
        <h3 className='text-white'>Social Links</h3>
      <div>
      <div className='m-2 icon' ><i class="fab fa-facebook">facebbok</i></div>
      <div className='m-2 icon'>  <i class="fab fa-twitter">twitter</i></div>
        <div className='m-2 icon'><i class="fab fa-whatsapp-square">whatsapp</i></div>
       <div className='m-2 icon'> <i class="fab fa-linkedin">linkedin</i></div>
      </div>
        </div>
 <div className="row">
   <div className="col-sm-12 text-white">copyright &copy;2021.Designed by rumamasuma</div>
 </div>
    </div>
    );
};

export default Footer;