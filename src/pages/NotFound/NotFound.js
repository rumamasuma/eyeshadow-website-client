import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    // handle go back button
const handleBackButton =()=>{
    history.push("/home");
}
    return (
        <div className='p-4 m-5'>
            
            <div className='not-found '>
           
            </div>
            <button className='btn btn-info' onClick= {handleBackButton}>GO BACK TO HOME</button>
        </div>
    );
};

export default NotFound;