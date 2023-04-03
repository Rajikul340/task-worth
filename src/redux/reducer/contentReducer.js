import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT_FAILURE,
  GET_CONTENT_REQUEST,
  GET_CONTENT_SUCCESS,
  GET_UPDATE_CONTENT,

} from "../action/actionTypes";

const initialContentState = {
  loading: false,
  contentData: [],
  error: "",
  updateData: [],
 
};

 const contentReducer = (state = initialContentState, action) => {
  console.log(action.payload);

  switch (action.type) {
  
    case GET_UPDATE_CONTENT:
      return {
        ...state,
        updateData: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
    case GET_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTENT_SUCCESS:
      return {
        loading: false,
        contentData: action.payload,
        error: "",
      };
    case GET_CONTENT_FAILURE:
      return {
        loading: false,
        contentData: [],
        error: action.payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        contentData: state.contentData.filter((p) => p._id !== action.payload),
      };
    default:
      return state;
  }
};

 export default contentReducer;