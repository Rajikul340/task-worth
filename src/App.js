import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/action/actionCreators";




function App() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <div className="">
      <Toaster/>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
