import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const {_id,img, brandName, price, description} = props.product;
    return (
        <div className="col product p-3">
    <div className="card h-100 borderClr">
      <img src={img}  className="card-img-top p-3" alt="..."/>
      <div className="card-body">
        <h4 className="card-title header">{brandName}</h4>
        <h5 className="card-title"> Only at  <span className='fs-2 header'>{price}</span></h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
      <Link to ={`/products/${_id}`}>
<button  className='btn-clr  fw-bold m-2 text-white'>Grab Now</button>
</Link> 
      </div>
    </div>
  </div>
    );
};

export default Product;