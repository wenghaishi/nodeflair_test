import JobDetailsCard from "../components/JobDetailsCard";
import JobCard from "../components/JobCard";
import { useState } from "react";
import jobData from "../../jobData";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const Jobs = () => {
  const [currentJob, setCurrentJob] = useState(jobData[0]);
  const [loading, setLoading] = useState(false);
  const [currentPageJobs, setCurrentPageJobs] = useState(jobData.slice(0,12))
  const [pages, setPages] = useState(Math.ceil(jobData.length / 12))

  const changeCurrentJob = (job) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentJob(job);
      setLoading(false);
    }, 500);
  };
  return (
    <div className=" flex items-center justify-center bg-[#f3f2ef] w-full">
      <div className="flex flex-row my-20 w-full mx-36 max-w-7xl justify-center">
        <div className="flex flex-col mr-4 w-full lg:w-auto">
          {currentPageJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              changeCurrentJob={() => changeCurrentJob(job)}
            />
          ))}
          <Pagination pages={pages}/>
        </div>
        {loading ? (
            <Loading />
        ) : (
          <JobDetailsCard job={currentJob} />
        )}
      </div>
    </div>
  );
};
export default Jobs;
