import React, { useState } from "react";
import Swal from "sweetalert2";

const StudentCourseCard = ({ course, enrolledCourses, setEnrolledCourses }) => {
  const { _id, className, photoURL, displayName, seats, price } = course;

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
            method: 'DELETE'
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!",
               "Your booked course has been deleted.",
                "success");
               
                const remaining = enrolledCourses.filter(singleService => singleService._id !== _id);
                setEnrolledCourses(remaining);
            }
          })
      }
    });
  };
  
  return (
    <div className="card w-80 mx-auto mt-10 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={photoURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-white">{className}</h2>
        <p>Instructor: <span className="text-xl">{displayName}</span></p>
        <div className="card-actions justify-end">
            <p className="text-xl text-white font-bold">$ {price}</p>
          <button onClick={() => handleDelete(_id)} className="btn text-2xl border-none text-white bg-[#eb4d4b] font-extrabold">X</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseCard;
