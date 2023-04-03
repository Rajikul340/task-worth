
import { addContent } from "../action/actionCreators";
import AlertMessage from "../../components/alert/AlertMessage";



const addContentData = (contents) =>{
       const {successMessage} = AlertMessage()

    return async (dispatch, getState)=>{
    const res= await fetch(" https://task-worth-server.vercel.app/add_task", {
        method:"POST",
        body: JSON.stringify(contents),
        headers: {
             authorization:`Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json"
        }
    })
   const data = await res.json()
       successMessage(
        "content add to the server"
    );
   if(data.acknowledged){
      
        dispatch(
            addContent({
              _id: data.insertedId,
              ...contents,
            })
          );
   }

    }
}
export default addContentData;