import JobcardTag from "./JobcardTag";

const JobCard = (props) => {
  const {
    description,
    type,
    requirements,
    responsibility,
    logoUrl,
    company,
    location,
    rating,
    timeAgo,
    category,
    techstack,
  } = props.job;

  return (
    <div
      className="bg-white small-card shadow-md rounded-lg mb-3 flex flex-col w-full hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-10"
      onClick={props.changeCurrentJob}
    >
      <div className="flex flex-row justify-between border-b pb-5 w-full">
        <div className="w-full flex flex-row">
          <img src={logoUrl} alt="company logo" className="h-11 w-11" />

          <div className="flex flex-col px-4">
            <span className="flex flex-row mb-1 h-5">
              <h2 className="mr-2">{company}</h2>
              <div className="mr-1">{rating}</div>
              <span>&nbsp;★</span>
            </span>
            <h2 className="text-xl font-semibold">{description}</h2>
            <div className="flex flex-row items-center">
              <span className="mr-2 text-green-500 font-semibold tracking-tighter ">
                {timeAgo}
              </span>
              <img src="pin.svg" alt="pin icon" className="h-3 w-3 mr-1" />
              <div>{location}</div>
            </div>
          </div>
        </div>

        <div className="bg-green-200 py-1 px-2 font-semibold text-green-600 h-8 rounded-md">
          {category}
        </div>
      </div>

      <div className="flex flex-row overflow-hidden">
        {techstack.map((item, index) => (
          <div key={index}>
            <JobcardTag item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default JobCard;
