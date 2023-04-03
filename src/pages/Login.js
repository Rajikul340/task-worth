import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SmallSpinner from "../components/Spinner/SmallSpinner";
import { loginUser, signInUser } from "../redux/action/actionCreators";




const Login = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("")


  // const  {isLoading, isError} = useSelector((state)=>state.auth) ;
  
  

  //  useEffect(()=>{
  //    if(!isLoading ){
  //     
  //     
  //    }
  //  },[isLoading, navigate])

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(loginUser(data, setError));
    navigate("/")
    toast.success("login successful")
  };


// useEffect(()=>{
//           if(isError){
//             toast.error(error)
//           }
// },[error, isError])

  return (
    <div className=" md:w-2/5 md:mx-auto md:mt-5">

        <div className="bg-[#eceae8] rounded-lg grid place-items-center p-10 ">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col  items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input  className="input input-bordered w-full max-w-xs" type="email" {...register("email")} id="email" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="font-bold text-white py-3 mx-auto rounded-full bg-primary w-full"
                >
                     login 
                </button>
              </div>
              
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
             
              </div>
            </div>
          </form>
          <button
                // onClick={handleGoogleLogin}
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-60"
                >
                  Login with Google
                </button>
        </div>
  
    </div>
  );
};

export default Login;
