import React from 'react';
import arrivals from '../../../images/newArrivals2.jpg';
import './NewArrival.css';
import new1 from '../../../images/new1.jpg';
import new2 from '../../../images/new2.webp';
import new3 from '../../../images/Best-Eyeshadow-Brands-Anastasia-beverly-hills.jpg';
import new4 from '../../../images/092019_ecom_beauty_amazon_palettes_lede.jpg';


const NewArrival = () => {
    return (
        <div className='container m-5'>
           <img src={arrivals} alt=""  className="arrival "/>
           <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={new1} className="card-img-top p-4" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={new2} className="card-img-top p-4" alt="..."/>
    
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={new3} className="card-img-top p-4" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={new4}className="card-img-top p-4" alt="..."/>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewArrival;