import React, {useState, useEffect} from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);

useEffect(() =>{
    fetch('https://radiant-brushlands-78511.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
        setProducts(data);
    })
},[])
// delete product
const handleDelete= id =>{
    const url = `https://radiant-brushlands-78511.herokuapp.com/products/${id}`;
    fetch(url,{
        method : 'DELETE'
    })
    .then(res =>res.json())
    .then(data =>{
        // console.log(data);
        if(data.deletedCount){
            alert('Are you sure, You want to delete?');
            const remaining = products.filter(pd => pd._id !== id);
            setProducts(remaining);
        }
      
    })
}

    return (
        <div className='review m-2'>
            <h2 >Manage All Products</h2>
            <div >
            <div className="row row-cols-1 row-cols-md-1 g-4 p-5">
            {
           products.map(product =>  <div className="card mb-3" >
           <div className="row g-0">
             <div className="col-md-6">
               <img src={product.img}className="img-fluid rounded-start" alt="..."/>
             </div>
             <div className="col-md-6">
               <div className="card-body">
               <h5 className="card-title">{product.brandName}</h5>
                 <h5 className="card-title"> Only at {product.price}</h5>
                 <p className="card-text">{product.description}</p>
                 <button  onClick={() =>handleDelete(product._id)} className=' btn btn-info rounded text-bold m-2'>Delete Product</button>
               </div>
               </div>
             </div>
           </div>)
       }

   </div>
            </div>
        </div>
    );
};

export default ManageProducts;