import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-page'>
             <img className='mx-auto mt-[-50px] h-[700px]' src="https://i.ibb.co/GFZqXvZ/404-error-lost-in-space-pana.png" alt="" />
             <div  className='text-center mt-[-60px]'>
             <Link to="/"><button className="btn bg-[#039477] hover:bg-[#3bb89f] text-white">Go to home</button></Link>
             </div> 
        </div>
    );
};

export default ErrorPage;