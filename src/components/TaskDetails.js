import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetContent } from "../redux/thunk/getContent";

const TaskDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.content);
  // console.log(contentData);

  useEffect(() => {
    dispatch(GetContent());
  }, [dispatch]);

  const newData =
    Array.isArray(contentData) &&
    contentData.length > 0 &&
    contentData.filter((singleData) => singleData._id === id);

  // console.log(newData);

  return (
    <div className="card  bg-[#eceae8] md:m-10 rounded-lg md:w-10/12 md:mx-auto shadow-xl">
      <h5 className="text-xl  font-semibold p-5">Descriptioon </h5>
       { Array.isArray(newData) && newData?.map((data) => (
        <div>
          <div className="card-body">
            <h2 className="card-title text-xl capitalize">
              {" "}
              position: {data?.position}
            </h2>
            <strong>{data?.companyName}</strong>

            <p className="text-lg">{data?.overview}</p>
            <div>
              <h4 className="font-semibold text-xl">Requirement</h4>
              {data?.requirements?.map((data, i) => (
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
      ))}
    </div>
  );
};

export default TaskDetails;
