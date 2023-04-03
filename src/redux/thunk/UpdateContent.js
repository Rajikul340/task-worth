
import AlertMessage from "../../components/alert/AlertMessage";
import { updateData } from "../action/actionCreators";

export const updateDataAsync = (data) => async (dispatch) => {
        
    const {successMessage} =AlertMessage();
    try {
      const response = await fetch(` http://localhost:5000/update_task/${data._id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
           'Content-Type': 'application/json'
           }
      });
      const updateddata = await response.json();
      console.log(updateddata);
      dispatch(updateData(data._id, updateddata));
      successMessage(
        "content updated"
    );
   
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };