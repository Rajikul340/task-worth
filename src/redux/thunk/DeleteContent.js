
import AlertMessage from "../../components/alert/AlertMessage";
import { removeContent } from "../action/actionCreators";



const deleteProduct = (id) => {
    const {successMessage} = AlertMessage()
    return async (dispatch, getState)=>{
        const res = await fetch(`  http://localhost:5000/contents/${id}`,{
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