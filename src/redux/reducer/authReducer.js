import { RESET_USER, SET_USER } from "../action/actionTypes";


const initialState = {
  isLoggedIn: false,
  user: {},
  userId: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      state = {
        isLoggedIn: true,
        user: payload.user,
        userId: payload.userId,
      };
      return state;
    case RESET_USER:
      state = initialState;
      return state;
    default:
      return state;
  }
};

