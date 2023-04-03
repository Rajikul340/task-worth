import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetSingleContent } from "../../redux/thunk/getSingleContent";

const TaskCard = ({ data }) => {
  // console.log(data?.data?.workLevel);
  const { _id, position, companyName, location, overview, employmentType } =
    data || {};

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="card  bg-[#eceae8] rounded-lg shadow-xl md:my-0 my-4">
      <div className="card-body">
        <h2 className="card-title capitalize">{position}</h2>

        <div className="flex justify-between">
          <h4>{location}</h4>
          <h4>{companyName}</h4>
        </div>

        <h5 className="text-xl">overview</h5>
        <p>{overview ? overview.slice(0, 200) : ""}</p>
        <div className="card-actions justify-end">
          <Link to={`/job-details/${data._id}`}>
            <button
              onClick={() => dispatch(GetSingleContent(data._id))}
              className="btn btn-primary "
            >
              details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
