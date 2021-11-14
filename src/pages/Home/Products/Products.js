import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {
const [products, setProducts] = useState([]);

useEffect(() =>{
    fetch('https://radiant-brushlands-78511.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
        setProducts(data);
    })
},[])
    return (
        <div className="m-5">
          <h2>Diva EyeShadow Palette Collection</h2>
   <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
       {
           products.slice(0,6).map(product =><Product key={product._id}
           product={product}
           
           ></Product> )
       }

   </div>
        </div>
    );
};

export default Products;