import React from "react";
import { useGetTaskQuery } from "../features/task/addTaskApi";
import TaskCard from "../components/Card/TaskCard";

const Home = () => {
  const { data, isLoading } = useGetTaskQuery();
  console.log(data);

  if(isLoading) return <p>Loading...</p>

  return (
    <div className="md:grid md:grid-cols-3 gap-5 md:mx-6 mx-3 my-4">
      {data?.map((singleData) => (
        <TaskCard data={singleData} key={singleData._id} />
      ))}
    </div>
  );
};

export default Home;
