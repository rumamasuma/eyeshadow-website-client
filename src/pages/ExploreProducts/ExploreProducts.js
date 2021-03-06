import React , { useState, useEffect } from 'react';
import Header from '../Home/Header/Header';
import Product from '../Home/Product/Product';
import Footer from '../Home/Footer/Footer';
const ExploreProducts = () => {
    const [products, setProducts] = useState([]);

useEffect(() =>{
    fetch('https://radiant-brushlands-78511.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
        setProducts(data);
    })
},[])
    return (
        <div>
            <Header></Header>
            <h2 className='review header p-2 m-3 fst-italic'>Explore Our All New Collections</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
       {
           products.map(product =><Product key={product._id}
           product={product}
           
           ></Product> )
       }

   </div>
   <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;