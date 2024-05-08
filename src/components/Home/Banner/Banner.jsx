import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex items-center px-16 bg-blue-50 rounded-lg'>
            <div className='py-10'>
                <h2 className='text-7xl font-bold'>One Step<br /> Closer To Your<br /> <span  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Dream Job</span></h2>
                <p className='my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link to="/jobs" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</Link>
            </div>
            <img width="600px" src="https://i.ibb.co/kKxpKyk/pexels-elsimage-3394346-removebg-preview.png" alt="" />
        </div>
    );
};

export default Banner;