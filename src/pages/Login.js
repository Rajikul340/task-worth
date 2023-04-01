import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin, loginUser } from "../features/auth/authSlice";



const Login = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading, email, error, isError} = useSelector((state)=>state.auth) ;
  

   useEffect(()=>{
     if(!isLoading && email){
       navigate("/")
     }
   },[isLoading, email])
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

   const handleGoogleLogin = ()=>{
     dispatch(googleLogin())
     
   }

useEffect(()=>{
          if(isError){
            toast.error(error)
          }
},[])

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
                  className="font-bold text-white py-3 rounded-full bg-primary w-full"
                >
                  Login
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
                onClick={handleGoogleLogin}
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
