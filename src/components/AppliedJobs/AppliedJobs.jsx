import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredAppliedJob } from '../../utility/localstorage';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJObs] = useState([]);

    const [filteredJobs, setFiteredJobs] = useState([]);

    console.log(filteredJobs);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setFiteredJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setFiteredJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setFiteredJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredAppliedJob();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJObs(jobsApplied);
            setFiteredJobs(jobsApplied);
        }
    }, []);

    return (
        <div>
            {/* Applied Jobs Banner */}
            <div className='flex items-center justify-center static h-80'>
                <img className='absolute left-0 top-[169px]' src="/src/assets/images/bg1.png" alt="" />
                <h2 className='text-3xl font-bold'>Applied Jobs</h2>
                <img className='absolute top-0 right-0' src="/src/assets/images/bg2.png" alt="" />
            </div>
            {/* Applied Jobs */}
            <div className='flex justify-end mt-20 mb-10'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Filter By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
            <div className='grid gap-5 mb-20'>
                {
                    filteredJobs[0] ?
                    filteredJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                    :
                    <div>
                        <h2 className='font-bold text-xl text-center' >You Have not applied any jobs yet.</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default AppliedJobs;