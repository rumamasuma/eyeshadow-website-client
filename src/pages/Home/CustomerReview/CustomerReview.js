import React,{useState, useEffect} from 'react';
import './CustomerReview.css';
import Rating from 'react-rating';

const CustomerReview = () => {
    
     const [reviews, setReviews] = useState([]);

    useEffect(()=>{
 fetch('https://radiant-brushlands-78511.herokuapp.com/reviews')
 .then(res =>res.json())
 .then(data =>setReviews(data))
    },[])

    return (
          <div>
            <h2 className='header fst-italic'> Customer Review</h2>
            <h4 className=' fst-italic'>What say customer about our product</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5 ">
      {
          reviews.map(review =>   <div className="col " key = {review._id}>
          <div className="card h-100 borderClr">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h4 className="card-title">{review.name}</h4>
              <h5 className="card-title">{review.email}</h5>
              <h6 className="card-text fst-italic">{review.review}</h6>
              <Rating
           initialRating={review.rating}
           emptySymbol="far fa-star icon-color"
           fullSymbol="fas fa-star icon-color "
         readonly></Rating>
            </div>
          </div>
        </div> )
      }
</div>
</div>
    );
};

export default CustomerReview;