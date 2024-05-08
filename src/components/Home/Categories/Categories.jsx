import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h2 className='text-5xl mb-5'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex justify-between mt-10'>
                {
                    categories.map(category => <Category key={category.id} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;