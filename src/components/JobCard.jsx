const JobCard = (props) => {
  return (
    <div className="bg-red-300 px-20 w-full">
      {props.job.name}
    </div>
  )
}
export default JobCard