import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateDataAsync } from "../redux/thunk/UpdateContent";

const UpdatePage = ({ data }) => {
  console.log(data.title);

  const { register, handleSubmit, reset } = useForm();
  const [imagePreview, setImagePreview] = useState("");
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const { loading, contentData, updateData } = content;

  // console.log(updateData);

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const submit = (event) => {
    const contents = {
      title: event.title,
      description: event.description,
      _id: data._id,
    };
      
    dispatch(updateDataAsync(contents));

    reset();
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-2">Update Content</h1>
      <div className="flex justify-center items-center  md:mt-10 ">
        <form
          className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              className="border outline-0"
              id="title"
              placeholder={data.title}
              {...register("tags")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              name="image"
              className="border outline-0"
              id="image"
              onChange={handleInputChange}
              {...register("image")}
            />
            {imagePreview && (
              <img src={imagePreview} className="w-20 h-20" alt="Preview" />
            )}
          </div>

          <div className="flex flex-col w-full ">
            <label className="mb-2" htmlFor="description">
              description
            </label>
            <textarea
              type="text"
              className=" textarea textarea-bordered h-24 "
              placeholder="content description"
              name="description"
              id="description"
              defaultValue={data.description}
              {...register("description")}
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <button
              className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
              type="submit"
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
