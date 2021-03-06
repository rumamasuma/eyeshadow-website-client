import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../images/banner4.jpg';
import banner1 from '../../../images/golden-smokey-make-up-for-women.jpg';
import banner2 from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className='banner'>
           <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;