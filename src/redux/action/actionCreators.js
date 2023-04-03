
import { ADD_CONTENT, DELETE_CONTENT, GET_UPDATE_CONTENT, RESET_USER, SET_USER, UPDATE_CONTENT } from "./actionTypes";
import app from "../../firebase/firebase.config";

const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

const resetUser = () => ({
  type: RESET_USER,
});

export const registerUser =
  ({ name, email, password }, setError) =>
  (dispatch) => {
   app.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setError("");
     
        app
        .auth().currentUser.updateProfile({
          displayName: name,
        });
          dispatch(
            setUser({
              userId: user.user.uid,
              user: { data: user.user.providerData[0] },
            })
          );
        
     
      })
      .catch((err) => {
        console.log(err);
        if (err.code === "auth/email-already-in-use") {
          setError("Email Already Exists!");
        }
      });
  };

export const loginUser =
  ({ email, password }, setError) =>
  (dispatch) => {
    app
    .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (user) => {
             console.log(user);
      })
      .catch(() => {
        setError("Invalid Email Or Password!");
      });
  };

export const getUser = () => (dispatch) => {
  app.auth().onAuthStateChanged(function (user) {
    if (user) {
      dispatch(
        setUser({
          userId: app.auth().currentUser.uid,
          user: { data: app.auth().currentUser.providerData[0] },
        })
      );
    } else {
      dispatch(resetUser());
    }
  });
};


export const logoutUser = () => (dispatch) => {
 app.auth().signOut().then(() => {
    dispatch(resetUser());
   
  });
};


 //content action

export const addContent = (content) => {
  return {
    type: ADD_CONTENT,
    payload: content,
  };
};

export const removeContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const updateData = (id, newData) => ({
  type: UPDATE_CONTENT,
  payload: {
     id,
      newData },
});




export const getUpdatedata =(data)=>{
         return {
          type: GET_UPDATE_CONTENT,
          payload: data
         }
}

