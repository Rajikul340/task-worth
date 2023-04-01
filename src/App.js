import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/routes";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, toggleLoading } from "./features/auth/authSlice";
import auth from "./firebase/firebase.config";

function App() {


  const dispatch= useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(setUser(user.email))
      } else{
        dispatch(toggleLoading())
      }
    });
  }, []);
  

  return (
    <div className="">
      <Toaster/>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
