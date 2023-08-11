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
    techstack
  } = props.job;

  return (
    <div className="bg-white rounded-lg w-full hidden lg:flex">{description}</div>
  )
}
export default JobDetailsCard