import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
            <div className='h-screen flex justify-center items-center'>
            <div className='text-center'>
            <h2 className='text-error text-9xl font-bold'>404</h2>
            <p className='mt-5 text-3xl'>Something Went Wrong!!!</p>
            <button className='btn btn-accent mt-10'><NavLink to="/">Back To Home</NavLink></button>
        </div>
        </div>
    );
};

export default ErrorPage;