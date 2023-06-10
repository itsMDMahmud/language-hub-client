import React, { useContext, useEffect, useState } from "react";
import StudentCourseCard from "./StudentCourseCard";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import Payment from "./Payment";

const StudentCourse = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setEnrolledCourses(data));
  }, []);

  // refetch();

  return (
    <div className="">
      <h2 className="text-5xl font-semibold text-center mt-5">
        welcome to Student Dashboard
      </h2>
      <div className="mt-10 flex mx-20 justify-around">
        <h2 className="text-3xl ">Total Item: {cart.length}</h2>
        <h2 className="text-3xl ">Total Amount: ${total}</h2>
      </div>
      <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto my-5 gap-4 ">
        {enrolledCourses.map((course) => (
          <StudentCourseCard
            key={course}
            course={course}
            enrolledCourses={enrolledCourses}
            setEnrolledCourses={setEnrolledCourses}
          ></StudentCourseCard>
        ))}
      </div>
      <div className="">
        {/* <Link to='/dashboard/payment'> <button className="btn btn-error text-white fixed bottom-0 right-0 m-10 z-50">Pay Now</button></Link> */}
        {/* Open the modal using ID.showModal() method */}

        {/* modal --------------------------------------------------------- */}
        <button className="btn btn-error text-white fixed bottom-0 right-0 m-10 z-50" onClick={() => window.my_modal_5.showModal()}>
          open modal
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Please Pay here!</h3>
            <div className="py-4">
              Press ESC key or click the button below to close
              <Payment/>
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error text-white">Close</button>
            </div>
          </form>
        </dialog>

        {/* modal -------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default StudentCourse;
