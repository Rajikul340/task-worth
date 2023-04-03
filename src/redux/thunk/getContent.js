import { GET_CONTENT_FAILURE, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS } from "../action/actionTypes";



export const GetContent = () => {

  return async (dispatch) => {
    try {
  
      dispatch({ type: GET_CONTENT_REQUEST});
      const response = await fetch(`https://task-worth-server.vercel.app/get_task`);
      const data = await response.json();
      dispatch({ type: GET_CONTENT_SUCCESS, payload: data });
    } catch (error) {
     
      dispatch({ type: GET_CONTENT_FAILURE, error });
    }
  };
};
