import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItems from "../Component/ListItems";
import { getUpdatedata } from "../redux/action/actionCreators";
import { GetContent } from "../redux/thunk/getContent";

const ContentList = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const { loading, contentData } = content;

  useEffect(() => {
    dispatch(GetContent());
  }, [dispatch]);

  if (loading) return <p>Loading..</p>;

  const handleGetId=(id)=>{
    const newData = contentData.filter(p=>p._id === id);
     dispatch(getUpdatedata(newData))
}    

  return (
    <div>
  <h1 className="text-2xl font-bold text-center mt-2 py-4">Content List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contentData?.map((singleData, index) => (
              <ListItems 
              data={singleData}
               index={index} 
               handleGetId={handleGetId}
               key={singleData._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentList;
