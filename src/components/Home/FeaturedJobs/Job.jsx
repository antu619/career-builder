import React from 'react';

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl border">
            <figure><img src={logo} alt="logo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 py-2 font-extrabold rounded border border-[#7e90fe] text-[#7e90fe] mr-2'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold rounded border border-[#7e90fe] text-[#7e90fe]'>{job_type}</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Job;