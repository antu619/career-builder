import React, { useEffect, useState } from 'react';
import Job from './Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4)

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h2 className='text-5xl mb-5'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-10 mt-16'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='flex justify-center my-10'>
                {
                    dataLength === 4 ?
                    <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">View All Jobs</button>
                    :
                    <button onClick={() => setDataLength(4)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Hide Jobs</button>
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;