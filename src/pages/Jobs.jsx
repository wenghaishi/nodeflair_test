import JobDetailsCard from "../components/JobDetailsCard";
import JobCard from "../components/JobCard";
import { useState } from "react";
import jobData from "../../jobData";
import Loading from "../components/Loading";

const Jobs = () => {
  const [currentJob, setCurrentJob] = useState(jobData[0]);
  const [loading, setLoading] = useState(false);

  const changeCurrentJob = (job) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentJob(job);
      setLoading(false);
    }, 500);
  };
  return (
    <div className=" flex items-center justify-center bg-[#f3f2ef] w-full">
      <div className="flex flex-row my-20 w-full mx-10 max-w-7xl justify-center">
        <div className="flex flex-col mr-4 w-full lg:w-auto">
          {jobData.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              changeCurrentJob={() => changeCurrentJob(job)}
            />
          ))}
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
