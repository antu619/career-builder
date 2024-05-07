import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl border">
            <div className='p-5 w-52 h-20'>
            <img src={logo} alt="logo" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className='mb-2 font-bold text-lg text-gray-400'>{company_name}</p>
                <div>
                    <button className='px-5 py-2 font-extrabold rounded border border-blue-500 text-blue-500 mr-2'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold rounded border border-blue-500 text-blue-500'>{job_type}</button>
                </div>
                <div className='flex gap-8 my-2 text-gray-500'>
                    <h3 className='flex items-center gap-1 text-xl'><IoLocationOutline /> {location}</h3>
                    <h3 className='flex items-center gap-1 text-xl'><AiOutlineDollar />Salary: {salary}</h3>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;