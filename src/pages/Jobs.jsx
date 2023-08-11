import Navbar from "../components/Navbar";
import JobDetailsCard from "../components/JobDetailsCard";
import JobCard from "../components/JobCard";
import { useState } from "react";
import jobData from "../../jobData"


const Jobs = () => {
  const [currentJob, setCurrentJob] = useState(jobData[0])

  const changeCurrentJob = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
  }
  return (
    <div className="overflow-x-hidden flex items-center justify-center bg-[#f3f2ef] w-full">
      <div className="flex flex-row my-20 w-full mx-10 max-w-7xl justify-center">
        <div className="flex flex-col mr-4 w-full lg:w-auto">
          {jobData.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              changeCurrentJob={changeCurrentJob}
            />
          ))}
        </div>
        <JobDetailsCard job={currentJob} className="hidden"/>
      </div>
    </div>
  );
};
export default Jobs;
