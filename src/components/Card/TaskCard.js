import React from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ data }) => {

  console.log(data);
  const {
    workLevel,
    salaryRange,
    position,
    overview,
    _id,
    location,
    companyName,
    employmentType,
    experience,
  } = data.data;

const navigate = useNavigate();



  return (
    <div className="card  bg-[#eceae8] rounded-lg shadow-xl md:my-0 my-4">
      <div className="card-body">
        <h2 className="card-title capitalize">{position}</h2>
         
            <div className="flex justify-between">
            <h4>{location}</h4>
            <h4>{companyName}</h4>
            </div>
             
            <h5 className="text-xl">overview</h5>
        <p>{overview.slice(0, 200)}</p>
        <div className="card-actions justify-end">
          <button 
          className="btn btn-primary "
          onClick={()=>navigate(`/job-details/${data._id}`)}
          
          >details</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
