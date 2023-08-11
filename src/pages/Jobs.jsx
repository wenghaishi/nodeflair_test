import Navbar from "../components/Navbar";
import JobDetailsCard from "../components/JobDetailsCard";
import JobCard from "../components/JobCard";
import { useState } from "react";
import jobData from "../../jobData"


const Jobs = () => {
  const [currentJob, setCurrentJob] = useState()
  return (
    <div className="overflow-x-hidden flex bg-[#f3f2ef]">
      <div className="flex flex-row my-16 w-screen mx-10 max-w-7xl justify-center">
        <div className="flex flex-col mr-4">
          {jobData.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
        <JobDetailsCard />
      </div>
    </div>
  );
};
export default Jobs;
