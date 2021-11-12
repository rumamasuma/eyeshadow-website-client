import React from 'react';
import Review from '../../Dashboard/Review/Review';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewArrival from '../NewArrival/NewArrival';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
       <Header></Header>
       <Banner></Banner>
       <Products></Products>
       <NewArrival></NewArrival>
       {/* <Review></Review> */}
       <Footer></Footer>
        </div>
    );
};

export default Home;