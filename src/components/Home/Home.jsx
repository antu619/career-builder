import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;