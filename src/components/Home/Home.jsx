import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Career Builder</title>
            </Helmet>
            <Banner/>
            <Categories/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;