import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetContent } from "../redux/thunk/getContent";
import TaskCard from "../components/Card/TaskCard";


const Home = () => {

  const dispatch = useDispatch()
  const {contentData} = useSelector((state) => state.content);


  useEffect(() => {
    dispatch(GetContent());
  }, [dispatch]);

  return (

    <div className="md:grid md:grid-cols-3 gap-5 md:mx-6 mx-3 my-4">
      {contentData?.map((singleData) => (
        <TaskCard data={singleData} key={singleData._id} />
      ))}
       
    </div>
  );
};

export default Home;
