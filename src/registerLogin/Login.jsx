import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform login logic here
  };

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
                      <span>Please enter a valid email address</span>
                    )}
                  </label>
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input-group">
                    <input 
                      className="input input-bordered w-full"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    {errors.password && (
                      <span>Password must be at least 6 characters</span>
                    )}
                  </label>
                </div>

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
                New to Mohite Tex? please
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
