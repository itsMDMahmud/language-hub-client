import React, { useState } from "react";
import Swal from "sweetalert2";
import Payment from "./Payment";
import { Link } from "react-router-dom";

const StudentCourseCard = ({ course, enrolledCourses, setEnrolledCourses }) => {
  const { _id, className, photoURL, displayName, seats, price } = course;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booked course has been deleted.",
                "success"
              );

              const remaining = enrolledCourses.filter(
                (singleService) => singleService._id !== _id
              );
              setEnrolledCourses(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card w-80 mx-auto mt-10 bg-base-100 shadow-xl image-full">
      {/* Card content -----------------------------------------*/}
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-white">{className}</h2>
        <p>
          Instructor: <span className="text-xl">{displayName}</span>
        </p>
        <p className="text-xl text-white font-bold">$ {price}</p>
        <div className="card-actions justify-between">
          <button
            onClick={() => handleDelete(_id)}
            className="btn text-2xl border-none text-white bg-[#eb4d4b] font-extrabold"
          >
            X
          </button>

          <div className="">
            <Link to='/dashboard/payment'> <button className="btn btn-error text-white">
              Pay Now</button></Link>  

            {/* <button onClick={() => setIsModalOpen(true)} className="btn btn-error text-white"
            >Pay Now</button> */}
          </div>
        </div>
      </div>
      {/* Card content -----------------------------------------*/}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            {/* Modal content */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            ></dialog>
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Please payment here!</h3>
              <div className="py-4">
                
                <Payment></Payment>
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={() => setIsModalOpen(false)} className="btn btn-error text-white">
                  Close
                </button>
              </div>
            </form>
            <dialog />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCourseCard;

// after dialog end 
// <button onClick={() => setIsModalOpen(false)} className="btn">Close</button>

// onClick={() => { 
//   handleClick2(); 
//   notify2();
//  }}