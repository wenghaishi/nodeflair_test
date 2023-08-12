import JobDetailsCard from "../components/JobDetailsCard";
import JobCard from "../components/JobCard";
import { useState } from "react";
import jobData from "../../jobData";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const Jobs = () => {
  const [currentJob, setCurrentJob] = useState(jobData[0]);
  const [loading, setLoading] = useState(false);
  const [currentPageJobs, setCurrentPageJobs] = useState(jobData.slice(0, 12));
  const [pages, setPages] = useState(Math.ceil(jobData.length / 12));
  const [currentPage, setCurrentPage] = useState(1);

  // changing info of jobDetailsdCard
  const changeCurrentJob = (job) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentJob(job);
      setLoading(false);
    }, 500);
  };

  // Changing current page for pagination
  const nextPage = () => {
    if (currentPage + 1 <= pages) {
      const theNextPage = currentPage + 1;
      setCurrentPage(theNextPage);
      setCurrentPageJobs(
        jobData.slice((theNextPage - 1) * 12, theNextPage * 12)
      );
    }
  };

  const previousPage = () => {
    if (1 <= currentPage - 1) {
      const thePreviousPage = currentPage - 1;
      setCurrentPage(thePreviousPage);
      setCurrentPageJobs(
        jobData.slice((thePreviousPage - 1) * 12, thePreviousPage * 12)
      );
    }
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
          <Pagination
            pages={pages}
            currentPage={currentPage}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </div>
        {loading ? <Loading /> : <JobDetailsCard job={currentJob} />}
      </div>
    </div>
  );
};
export default Jobs;
