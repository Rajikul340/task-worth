import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { logOut } from "../../features/auth/authSlice";

const Navbar = () => {
  const { email } = useSelector((state) => state.auth);
 const dispatch = useDispatch()


  const handleLogOut = ()=>{
    signOut(auth).then(()=>{
     dispatch(logOut())
    })
 }
  return (
    <nav className="navbar bg-base-100 border flex justify-between ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Task Worth
        </Link>
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1">
          {email ? (
            <>
         
              <li>
                <Link
                  className=" px-2 py-1 rounded-full  hover:px-4 transition-all text-lg "
                  to="/dashboard"
                >
                  dashboard
                </Link>
              </li>
              <li>
                <button
                   onClick={handleLogOut}
                 className="border mx-1 border-black text-lg px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all ">
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="border mx-2 text-lg border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="border text-lg border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                  to="/signup"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
