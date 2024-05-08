import React from 'react';

const Category = ({category}) => {

    const {logo, category_name, availability} = category;
    
    return (
        <div className='bg-purple-50 w-56 h-48 p-5 rounded-lg'>
            <div className='flex items-center justify-center w-20 h-20 bg-purple-100 p-5 rounded-lg'>
            <img className='' src={logo} alt="" />
            </div>
            <h3 className='text-xl font-bold my-2'>{category_name}</h3>
            <p className='text-gray-500'>{availability}</p>
        </div>
    );
};

export default Category;