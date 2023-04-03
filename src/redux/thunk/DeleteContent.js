import AlertMessage from "../../Component/Hooks/alertMessage";
import { removeContent } from "../action/actionCreators";



const deleteProduct = (id) => {
    const {successMessage} = AlertMessage()
    return async (dispatch, getState)=>{
        const res = await fetch(` https://content-creator-server.vercel.app/contents/${id}`,{
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
        })
        const data = await res.json() ;
        successMessage(
            "content deleted"
        );
        if(data.acknowledged){
            dispatch(removeContent(id))
        }

    }
};

export default deleteProduct;