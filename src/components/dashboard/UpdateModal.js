import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { GetContent } from "../../redux/thunk/getContent";

const UpdateModal = () => {
  const { handleSubmit, register, reset, control } = useForm();

  const { id } = useParams();
  const dispatch = useDispatch();
  const { contentData } = useSelector((state) => state.content);
  console.log(contentData);

  useEffect(() => {
    dispatch(GetContent());
  }, [dispatch]);

  const newData = contentData?.filter((singleData) => singleData._id === id);
  console.log(newData);
  // const {
  //   _id,
  //   position,
  //   companyName,
  //   location,
  //   employmentType,
  //   experience,
  //   overview,
  //   workLevel,
  //   requirements,
  //   responsibilities,
  //   skills,
  //   salaryRange,
  // } = newData || {};

  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({ control, name: "responsibilities" });
  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control, name: "skills" });
  const {
    fields: reqFields,
    append: reqAppend,
    remove: reqRemove,
  } = useFieldArray({ control, name: "requirements" });

  const onSubmit = (DATA) => {
    console.log(DATA);
  };

  return (
    <div className="flex justify-center items-center overflow-auto p-10">
      <form
        className="bg-[#eceae8]  shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-2xl text-primary mb-5">Update position</h1>
        {newData?.map((data, i) => (
          <>
            <div key={i} className="flex flex-col w-full max-w-xs">
              <label className="mb-2 text-lg" htmlFor="position">
                Position
              </label>
              <input
                type="text"
                defaultValue={data?.position}
                className="input input-bordered w-full max-w-xs"
                id="position"
                {...register("position")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2 text-lg" htmlFor="companyName">
                Company Name
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                defaultValue={data?.companyName}
                id="companyName"
                {...register("companyName")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2 text-lg" htmlFor="experience">
                Experience
              </label>
              <input
                type="text"
                defaultValue={data?.experience}
                className="input input-bordered w-full max-w-xs"
                id="experience"
                {...register("experience")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2 text-lg" htmlFor="workLevel">
                Work Level
              </label>
              <input
                type="text"
                defaultValue={data?.workLevel}
                className="input input-bordered w-full max-w-xs"
                id="workLevel"
                {...register("workLevel")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2 text-lg" htmlFor="employmentType">
                Employment Type
              </label>
              <input
                type="text"
                defaultValue={data?.FiTrashemploymentType}
                className="input input-bordered w-full max-w-xs"
                id="employmentType"
                {...register("employmentType")}
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2 text-lg" htmlFor="salaryRange">
                Salary Range
              </label>
              <input
                type="text"
                defaultValue={data?.FiTrashemploymentTypesalaryRange}
                className="input input-bordered w-full max-w-xs"
                id="salaryRange"
                {...register("salaryRange")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                defaultValue={data?.location}
                className="input input-bordered w-full max-w-xs"
                id="location"
                {...register("location")}
              />
            </div>
            <hr className="w-full mt-2 bg-black" />
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg" htmlFor="overview">
                Overview
              </label>
              <textarea
                defaultValue={data?.overview}
                className="textarea textarea-bordered "
                rows={8}
                {...register("overview")}
                id="overview"
              />
            </div>
            <div className="">
              <label className="mb-2 text-lg">Skills</label>
              <div className="">
                <div className="md:grid md:grid-cols-4 ">
                  {data?.skills?.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className=" mb-5 flex items-center gap-3"
                      >
                        <input
                          className="!w-full input input-bordered max-w-xs"
                          type="text"
                          defaultValue={skill}
                          {...register(`skills[${index}]`)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="md:grid md:grid-cols-4 ">
                  {skillFields?.map((item, index) => {
                    return (
                      <div
                        key={item.key}
                        className=" mb-5 flex items-center gap-3"
                      >
                        <input
                          className="!w-full input input-bordered max-w-xs"
                          type="text"
                          {...register(`skills[${index}]`)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => skillAppend("")}
                    className="btn btn-primary  btn-sm "
                  >
                    Update Skill
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg">Responsibilities</label>

              <div>
                <div className=" md:grid grid-cols-2 ">
                  {resFields.map((item, index) => {
                    return (
                      <div
                        key={item.key}
                        className=" mb-5 flex items-center gap-3"
                      >
                        <input
                          className="!w-full  input input-bordered  max-w-xs"
                          type="text"
                          {...register(`responsibilities[${index}]`)}
                        />
                        <button
                          type="button"
                          onClick={() => resRemove(index)}
                          className="grid place-items-center rounded-full "
                        >
                          <FiTrash
                            className=" group-hover:text-white transition-all"
                            size="20"
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div>
                  {data?.responsibilities?.map((res, index) => {
                    return (
                      <div
                        key={index}
                        className=" mb-5 flex items-center gap-3"
                      >
                        <input
                          className="!w-full  input input-bordered  max-w-xs"
                          type="text"
                          defaultValue={res}
                          {...register(`responsibilities[${index}]`)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => resAppend("")}
                    className="btn btn-primary  btn-sm"
                  >
                    Update Responsibility
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 text-lg">Requirements</label>
              <div>
                <div className=" md:grid md:grid-cols-2">
                  {reqFields.map((item, index) => {
                    return (
                      <div
                        key={item.key}
                        className=" mb-5 flex items-center gap-3"
                      >
                        <input
                          className="!w-full  input input-bordered  max-w-xs"
                          type="text"
                          {...register(`requirements[${index}]`)}
                        />
                        <button
                          type="button"
                          onClick={() => reqRemove(index)}
                          className="grid place-items-center rounded-full flex-shrink-0"
                        >
                          <FiTrash
                            className="t group-hover:text-white transition-all"
                            size="20"
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="border my-2  md:grid md:grid-cols-2">
                <div>
                  {data?.requirements?.map((item, index) => {
                    return (
                      <div
                        key={item.key}
                        className=" mb-5 flex items-center gap-3"
                      >
                        <input
                          className="!w-full  input input-bordered  max-w-xs"
                          type="text"
                          defaultValue={item}
                          {...register(`requirements[${index}]`)}
                        />
                        <button
                          type="button"
                          onClick={() => reqRemove(index)}
                          className="grid place-items-center rounded-full flex-shrink-0"
                        >
                          <FiTrash
                            className="t group-hover:text-white transition-all"
                            size="20"
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => reqAppend("")}
                  className="btn btn-primary btn-sm"
                >
                  Update Requirement
                </button>
              </div>
            </div>

            <div className="flex justify-end items-center w-full mt-3">
              <button className="btn btn-primary text-lg" type="submit">
                Submit
              </button>
            </div>
          </>
        ))}
      </form>
    </div>
  );
};

export default UpdateModal;
