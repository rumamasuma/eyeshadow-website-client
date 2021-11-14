import React from 'react';
import arrivals from '../../../images/newArrivals.jpg';
import './NewArrival.css';
import new1 from '../../../images/new1.jpg';
import new2 from '../../../images/new2.webp';
import new3 from '../../../images/new3.jpg';
import new4 from '../../../images/new6.jpg';


const NewArrival = () => {
    return (
        <div className='container m-5'>
           <img src={arrivals} alt=""  className="arrival"/>
           <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={new1} className="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={new2} className="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={new3} className="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={new4}className="card-img-top" alt="..."/>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewArrival;