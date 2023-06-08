import React from 'react';

const AddClass = () => {


    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const occupation = form.occupation.value;
        const mobile = form.mobile.value;
        const details = form.details.value;
       
    
        const newService = { name, address, occupation, mobile, details };
        console.log(newService);
    
        // send data to the server
        fetch("http://localhost:5000/service", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Service added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
          })
      }



    return (
        <div className="max-w-screen-xl mx-auto bg-[#e2e2e281]">
      <h2 className="text-5xl py-10 font-semibold text-center">Add any service</h2>

      {/*----------------add service form-------------------*/}

      <div className="px-20 ">
        <form onSubmit={handleAddService}>
          {/* form name and quantity row */}

          <div className="md:flex mb-8 ">
            <div className="form-control lg:mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Your name<span className="text-red-600">*</span></span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Write your name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Address<span className="text-red-600">*</span></span>
              </label>
              <label className="input-group">
                <input
                  name="address"
                  type="text"
                  placeholder="address"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form service and address row */}

          <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 lg:mr-4">
              <label className="label">
                <span className="label-text">Occupation<span className="text-red-600">*</span></span>
              </label>
              <label className="input-group">
                <input
                  name="occupation"
                  type="text"
                  placeholder="Your occupation"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Mobile number<span className="text-red-600">*</span></span>
              </label>
              <label className="input-group">
                <input
                  name="mobile"
                  type="text"
                  placeholder="Mobile number"
                  className="input input-bordered w-full"
                  pattern="^[0-9]+$"
                  title="Please enter only numeric values"
                  required
                />
              </label>
            </div>
            
          </div>

          {/* form details row */}

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <textarea
                  name="details"
                  type="text"
                  placeholder="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input className="btn btn-block my-10 text-white bg-[#039477] hover:bg-[#3bb89f]" type="submit" value="add service" />
        </form>
      </div>
        </div>
    );
};

export default AddClass;