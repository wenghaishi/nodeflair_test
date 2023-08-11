const JobDetailsCard = (props) => {
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
    <div className="bg-white rounded-lg w-full hidden h-[97.7vh] lg:flex text-4xl text-center sticky top-2">
      <h1 className="text-center w-full mt-20">{description}</h1>
    </div>
  );
};
export default JobDetailsCard;
