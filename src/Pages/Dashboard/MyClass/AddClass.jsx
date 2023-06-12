import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const AddClass = () => {
  useTitle('Add Course');
    const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const image = form.photoURL.files[0]; //files
    const displayName = user.displayName;
    const email = user.email;
    const seats = form.seats.value;
    const price = form.price.value;

    // const addClass = (className, image, displayName, email, seats, price);

    const formData = new FormData();
    formData.append("image", image);

    const status = 'pending';

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_token
    }`;
    // console.log(url);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imgURL = imageData.data.display_url;
          const addClass = {className, photoURL:imgURL , displayName, email, seats, price: parseFloat(price), status};
          console.log(addClass);
          axiosSecure.post('https://language-hub-server.vercel.app/classes', addClass)
          .then(data => {
              console.log('after posting new menu item', data.data);
              if (data.data.insertedId) {
                //   reset();
                  Swal.fire({
                      icon: 'success',
                      title: `${className} added successfully`,
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })
        
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-[#e2e2e281]">
      <h2 className="text-5xl py-10 font-semibold text-center">Create A Course</h2>

      {/*----------------add service form-------------------*/}

      <div className="px-20 ">
        <form onSubmit={handleAddClass}>
          {/* form name and quantity row */}

          <div className="md:flex mb-8 ">
            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">
                  Class Name<span className="text-red-600">*</span>
                </span>
              </label>
              <label className="input-group">
                <input
                  name="className"
                  type="text"
                  placeholder="Class name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">
                  Image<span className="text-red-600">*</span>
                </span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  accept="image/*"
                  name="photoURL"
                  className="file-input w-full max-w-xs"
                  required
                />
              </label>
            </div>
          </div>

          {/* form service and address row */}

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 lg:mr-4">
              <label className="label">
                <span className="label-text">
                  Instructor Name<span className="text-red-600">*</span>
                </span>
              </label>
              <label className="input-group">
                <input
                  name="displayName"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  defaultValue={user.displayName}
                  readOnly
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">
                  Instructor Email<span className="text-red-600">*</span>
                </span>
              </label>
              <label className="input-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full"
                  defaultValue={user.email}
                  readOnly
                />
              </label>
            </div>
          </div>

          {/* available seat and price row */}

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 lg:mr-4">
              <label className="label">
                <span className="label-text">
                  Available seats<span className="text-red-600">*</span>
                </span>
              </label>
              <label className="input-group">
                <input
                  name="seats"
                  type="text"
                  placeholder="Seat"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">
                  price<span className="text-red-600">*</span>
                </span>
              </label>
              <label className="input-group">
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered w-full"
                  pattern="^[0-9]+$"
                  title="Please enter only numeric values"
                  required
                />
              </label>
            </div>
          </div>

          <input
            className="btn btn-block my-10 text-white bg-[#081b29] hover:bg-[#081b29c5]"
            type="submit"
            value="add Course"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
