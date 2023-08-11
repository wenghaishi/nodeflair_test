const JobCard = (props) => {
  const {
    name,
    description,
    type,
    requirements,
    responsibility,
    logoUrl,
    company,
    location,
    rating,
    timeAgo,
  } = props.job;

  return (
    <div className="bg-white small-card shadow-md rounded-lg mb-3 flex flex-col w-full hover:shadow-lg hover:-translate-y-1 transition ease-in-out delay-50">
      <div className="flex flex-row">
        <img src={logoUrl} alt="company logo" className="h-11 w-11" />
        <div className="flex flex-col px-4">
          <span className="flex flex-row mb-1 h-5">
            <h2 className="mr-2">{company}</h2>
            <div className="mr-1">{rating}</div>
            <span>&nbsp;★</span>
          </span>
          <h2 className="text-xl font-semibold">{description}</h2>
          <div className="flex flex-row">
            <span>{timeAgo}</span>
            <div>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
