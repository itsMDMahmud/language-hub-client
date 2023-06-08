import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const handleAddClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const photoURL = form.photoURL.value;
        const displayName = user.displayName;
        const email = user.email;
        const seats = form.seats.value;
        const price = form.price.value;
       
    
        const addClass = { className, photoURL, displayName, email, seats, price};
        console.log(addClass);
    
        // send data to the server
        // fetch("http://localhost:5000/classes", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addClass)
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data);
        //     if (data.insertedId) {
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'Class added successfully',
        //             icon: 'success',
        //             confirmButtonText: 'Cool'
        //           })
        //     }
        //   })
      }



    return (
        <div className="max-w-screen-xl mx-auto bg-[#e2e2e281]">
      <h2 className="text-5xl py-10 font-semibold text-center">Add a class</h2>

      {/*----------------add service form-------------------*/}

      <div className="px-20 ">
        <form onSubmit={handleAddClass}>
          {/* form name and quantity row */}

          <div className="md:flex mb-8 ">
            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Class Name<span className="text-red-600">*</span></span>
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
                <span className="label-text">Image<span className="text-red-600">*</span></span>
              </label>
              <label className="input-group">
              <input type="file" name="photoURL" className="file-input w-full max-w-xs" required />
              </label>
            </div>
          </div>

          {/* form service and address row */}

          <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 lg:mr-4">
              <label className="label">
                <span className="label-text">Instructor Name<span className="text-red-600">*</span></span>
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
                <span className="label-text">Instructor Email<span className="text-red-600">*</span></span>
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
                <span className="label-text">Available seats<span className="text-red-600">*</span></span>
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
                <span className="label-text">price<span className="text-red-600">*</span></span>
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

          
          <input className="btn btn-block my-10 text-white bg-[#081b29] hover:bg-[#081b29c5]" type="submit" value="add service" />
        </form>
      </div>
        </div>
    );
};

export default AddClass;