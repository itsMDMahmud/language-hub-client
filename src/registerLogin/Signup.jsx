import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [password, setPassword] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data?.email, data?.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(
        data.displayName,
        data?.email,
        data.photoURL,
        data.phoneNumber
      )
        // console.log(updateUserProfile)
        .then(() => {
          const saveUser = {
            displayName: data?.displayName,
            email: data?.email,
            phoneNumber: data?.phoneNumber,
            photoURL: data?.photoURL,
          };
          console.log(saveUser);
          fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId)
               {
                reset();
                Swal.fire({
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          // console.log("profile updates");
        });
    });
    // Perform registration logic here
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-[#e2e2e281]">
      <h2 className="text-5xl py-10 font-semibold text-center">Sign Up</h2>

      {/*----------------register form-------------------*/}

      <div className="px-20 ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* form name and quantity row */}

          <div className="md:flex mb-8 ">
            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Name"
                  {...register("displayName", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </label>
            </div>

            <div className="form-control lg:mr-4 md:w-1/2">
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
          </div>

          {/* form service and address row */}

          <div className="md:flex mb-8">
            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Password"
                  type="password"
                  {...register("password", { required: true, minLength: 6 })}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span>Password must be at least 6 characters</span>
                )}
              </label>
            </div>

            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Confirm password"
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password,
                  })}
                />
                {errors.confirmPassword && <span>Passwords must match</span>}
              </label>
            </div>
          </div>
          {/* form service and address row */}

          <div className="md:flex mb-8">
            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Photo URL"
                  {...register("photoURL")}
                />
              </label>
            </div>

            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <label className="input-group">
                <select
                  className="input input-bordered w-full"
                  placeholder="gender"
                  {...register("gender")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
          </div>

          {/* form details row */}
          <div className="md:flex mb-8">
            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Phone number"
                  pattern="^[0-9]+$"
                  title="Please enter only numeric values"
                  {...register("phoneNumber")}
                />
              </label>
            </div>

            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Address"
                  {...register("address")}
                />
              </label>
            </div>
          </div>

          <div className="text-center">
            <input
              className="btn  w-[200px] mt-5 text-white bg-[#039477] hover:bg-[#3bb89f]"
              type="submit"
              value="Signup"
            />
          </div>
          <SocialLogin />
        </form>
        <p className="text-center pb-5">
          Already have account? please
          <Link className="text-orange-600 font-semibold" to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

//displayName
//phoneNumber
//photoURL
