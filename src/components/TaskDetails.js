import React from "react";
import { useParams } from "react-router-dom";
import { useGetTaskByIdQuery } from "../features/task/addTaskApi";

const TaskDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTaskByIdQuery(id);
  console.log(data?.data);
  const {
    _id,
    position,
    companyName,
    location,
    employmentType,
    overview,
    requirements,
  } = data?.data || {};

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className="card  bg-[#eceae8] md:m-10 rounded-lg md:w-10/12 md:mx-auto shadow-xl">
      <h5 className="text-xl  font-semibold p-5">Descriptioon </h5>
      <div className="card-body">
        <h2 className="card-title text-xl capitalize"> position: {position}</h2>
        <strong>{companyName}</strong>

        <p className="text-lg">{overview}</p>
        <div>
          <h4 className="font-semibold text-xl">Requirement</h4>
          {requirements.map((data, i)=>(
             <ul key={i}>
                <li>{data}</li>
             </ul>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
