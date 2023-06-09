import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteProduct from "../redux/thunk/DeleteContent";

const ListItems = ({ data, index }) => {
  // console.log('data', data);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    _id,
    position,
    companyName,
    location,
    employmentType,
    overview,
    requirements,
  } = data || {};

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{position}</td>
      <td>{companyName}</td>
      <td>{location}</td>
      <td className="flex gap-2">
        <button
          onClick={() => navigate(`/dashboard/update_page/${data._id}`)}
          className="btn btn-sm btn-primary btn-outline"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteProduct(data._id))}
          className=" btn btn-sm btn-primary btn-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListItems;
