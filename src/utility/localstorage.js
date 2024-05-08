const getStoredAppliedJob = () => {
    const storedAppliedJob = localStorage.getItem('applied-jobs');
    if(storedAppliedJob){
        return JSON.parse(storedAppliedJob);
    }
    return [];
}

const saveAppliedJob = id => {
    const storedAppliedJobs = getStoredAppliedJob();
     const exists = storedAppliedJobs.find(jobId => jobId === id);
     if(!exists){
        storedAppliedJobs.push(id);
        localStorage.setItem('applied-jobs', JSON.stringify(storedAppliedJobs))
     }
}

export{getStoredAppliedJob, saveAppliedJob}