import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import contentReducer from "./contentReducer";







export const rootReducer = combineReducers({
    auth: authReducer,
    content: contentReducer,
  
})