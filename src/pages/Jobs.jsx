import Navbar from "../components/Navbar";
import JobDetailsCard from "../components/JobDetailsCard";
import JobCard from "../components/JobCard";
import { useState } from "react";
import jobData from "../../jobData"


const Jobs = () => {
  const [currentJob, setCurrentJob] = useState()
  return (
    <div className="overflow-x-hidden flex">
      <Navbar />
      <div className="flex flex-row mt-16 w-screen mx-4">
        <div className="flex flex-col w-full">
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
