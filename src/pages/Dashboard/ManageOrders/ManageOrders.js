import React,{useState, useEffect} from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/orders')
    .then(res =>res.json())
    .then(data => {
        setAllOrders(data);
    })
},[])

    return (
        <div>
            <h2>Manage All Orders</h2>
            <div  className="row  row-cols-1 row-cols-md-2  p-2">
                {
                    allOrders.map(order => <div class="card m-2" key={order._id} >
                    <div class="card-body">
                      <h5 class="card-title">{order.brandName}</h5>
                      <h6 class="card-text">{order.name}</h6>
                      <h6 class="card-text">{order.email}</h6>
                      <button >Delete</button>
                      <button >Confirm</button>
                    </div>
                  </div>)
                }



            </div>
        </div>
    );
};

export default ManageOrders;