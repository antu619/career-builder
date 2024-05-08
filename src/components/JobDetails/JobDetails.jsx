import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlinePhoneInTalk, MdWorkOutline } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJob } from '../../utility/localstorage';


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information  } = job;

    const handleAppliedJob = () => {
        saveAppliedJob(id);
        toast.success("Successfully Applied!");
    }

    return (
        <div className='mb-20'>
            {/* Job Details Banner */}
            <div className='flex items-center justify-center static h-80'>
                <img className='absolute left-0 top-[169px]' src="/src/assets/images/bg1.png" alt="" />
                <h2 className='text-3xl font-bold'>{job.job_title}</h2>
                <img className='absolute top-0 right-0' src="/src/assets/images/bg2.png" alt="" />
            </div>
            {/* Job Details */}
            <div className='flex items-start gap-5 mt-20 w-full'>
                <div className=''>
                    <p className='text-gray-500 leading-8 tracking-wide text-lg'><span className='text-black font-bold'>Job Description:</span> {job_description}</p>
                    <p className='text-gray-500 leading-8 tracking-wide my-5 text-lg'><span className='text-black font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                    <p className='text-gray-500 leading-[45px] tracking-wide text-lg'><span className='text-black font-bold'>Education Requirements:<br/> </span> {educational_requirements}</p>
                    <p className='text-gray-500 leading-[45px] tracking-wide mt-5 text-lg'><span className='text-black font-bold'>Experience:<br/> </span> {experiences}</p>
                </div>
                {/* JOb Details Card */}
                <div className='min-w-[327px]'>
                    <div className='grid gap-3 bg-cyan-500 bg-opacity-10 p-5 rounded-lg'>
                        <h2 className='text-xl font-bold' >Job Details</h2>
                        <div className='divider m-0'></div>
                        <h3 className='flex items-center gap-1'><AiOutlineDollar />Salary: {salary}</h3>
                        <h3 className='flex items-center gap-1'><MdWorkOutline />Job Title: {job_title}</h3>
                        <h2 className='text-xl font-bold' >Contact Information</h2>
                        <div className='divider m-0'></div>
                        <h3 className='flex items-center gap-1'><MdOutlinePhoneInTalk />Phone: {contact_information.phone}</h3>
                        <h3 className='flex items-center gap-1'><MdOutlineEmail />Email: {contact_information.email}</h3>
                        <div className='flex'>
                        <IoLocationOutline className='text-2xl' /><p className=''>Address: {contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleAppliedJob} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-10 w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;