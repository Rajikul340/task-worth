import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { GetContent } from '../redux/thunk/getContent';
import ListItems from '../components/ListItems';

const UpdatePage = () => {

  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch()
  const {contentData} = useSelector((state) => state.content);


  useEffect(() => {
    dispatch(GetContent());
  }, [dispatch]);

const submit = (data) => {
  console.log(data);

  reset();
};

    return (
        <div>
        <h1 className="text-2xl font-bold text-center mt-2 py-4">Content List</h1>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Position </th>
                    <th>company </th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {contentData?.map((singleData, index) => (
                    <ListItems
                    data={singleData}
                     index={index} 
                     key={singleData._id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    );
};

export default UpdatePage;