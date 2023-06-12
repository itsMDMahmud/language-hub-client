import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible,  } from 'react-icons/ai';
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";


const Login = () => {
  useTitle('Login');
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signIn} = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, {replace: true});
    })
    // Perform login logic here
  };
  
  //navigate('/login', {state: {from: location}});

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img
              src="https://i.ibb.co/P99h3YQ/Tablet-login-pana-1.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      className="input input-bordered w-full"                      
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.email && (
                      <span>Enter your email</span>
                    )}
                  </label>
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input-group">
                    <div className="w-full flex items-center ">
                    <input 
                      className="input input-bordered w-full"
                      type={passwordVisible ? 'text' : 'password'}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: {
                          value: passwordRegex,
                          message: 'Password should be at least 6 characters long, contain one special character, and one uppercase letter'
                        }
                      })}
                    />
                    <button className="absolute showhide" onClick={togglePasswordVisibility}>
                    {passwordVisible ? <AiFillEyeInvisible/> : <AiFillEye/>}
                    </button>
                    </div>
                    
                  </label>
                </div>
                <h2 className="text-red-500">{errors.password && (
                      <>Password should be at least 6 characters long, contain one special character, and one uppercase letter</>
                    )}</h2>

                <div className="form-control mt-6">
                  <input
                    className="btn  bg-[#039477] hover:bg-[#3bb89f] text-white"
                    type="submit"
                    value="Login"
                  />
                </div>
                <SocialLogin/>
              </form>
              <p className="text-red-500 font-semibold"></p>
              <p>
                New to Language hub? please
                <Link className="text-orange-600 font-semibold" to="/signup">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
