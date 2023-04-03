import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SideBar = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButton1Click = () => setActiveButton("button1");
  const handleButton2Click = () => setActiveButton("button2");


  return (
    <div className="">
       <div>
       <ul>
        <li>
          <button
            onClick={handleButton1Click}
            className={activeButton === "button1" ? "bg-[#F7F7F7]  " : ""}
          >
            <Link
              className="capitalize hover:text-[#8B8B8B]  md:text-lg pointer md:pl-3 md:pr-20  px-2"
              to="/dashboard/add-content"
            >
               Add to task 
            </Link>
          </button>
        </li>

        <li>
          <button
            onClick={handleButton2Click}
            className={activeButton === "button2" ? "bg-[#F7F7F7]  " : ""}
          >
            <Link
              className="capitalize md:text-lg hover:text-[#8B8B8B]  pointer md:pl-3 md:pr-20  px-2"
              to="/dashboard/update_page"
            >
             Update Task 
            </Link>
          </button>
        </li>
      </ul>
       </div>
      <div className=" md:pt-[600px] pt-[400px]">
        <Link
          className="capitalize bg-[#F7F7F7] flex  items-center text-lg hover:text-[#8B8B8B] pointer md:pl-3 md:pr-20  px-2"
          to="/"
        >
          <AiOutlineArrowLeft/> Home
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
