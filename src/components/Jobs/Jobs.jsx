import React, { useEffect, useState } from 'react';
import Job from '../Home/FeaturedJobs/Job';
import { Helmet } from 'react-helmet-async';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    return (
        <div className='grid grid-cols-2 gap-10 mt-10 mb-20'>
            <Helmet>
                <title>Jobs - Career Builder</title>
            </Helmet>
            {
                jobs.map(job => <Job key={job.id} job={job} />)
            }
        </div>
    );
};

export default Jobs;