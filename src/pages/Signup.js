import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../features/auth/authSlice";
import { toast } from "react-hot-toast";




const Signup = () => {
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = (data) => {
    console.log(data);
       dispatch(createUser({email:data.email, password: data.password}))
        navigate("/")
        toast.success("sign up success ")
  };


  return (
    <div className=" md:w-2/5 md:mx-auto md:mt-5">
      
      <div className="bg-[#eceae8] rounded-lg grid place-items-center p-10 ">
          <h1 className='mb-10 font-medium text-2xl'>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3'>
              <div className='flex flex-col items-start'>
                <label htmlFor='email' className='ml-5'>
                  Email
                </label>
                <input
                  type='email'
                  className="input input-bordered w-full max-w-xs"
                  name='email'
                  id='email'
                  {...register("email")}
                />
              </div>

              <div className='flex flex-col items-start'>
                <label htmlFor='password' className='ml-5'>
                  Password
                </label>
                <input
                  type='password'
                  className="input input-bordered w-full max-w-xs"
                  name='password'
                  id='password'
                  {...register("password")}
                />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor='confirm-password' className='ml-5'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirm-password'
                  className="input input-bordered w-full max-w-xs"
                  {...register("confirmPassword")}
                />
              </div>
              <div className='!mt-8 '>
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                  disabled={disabled}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className='text-primary hover:underline cursor-pointer'
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
     
    </div>
  );
};

export default Signup;
