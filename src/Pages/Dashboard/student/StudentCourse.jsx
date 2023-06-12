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
    fetch("https://language-hub-server.vercel.app/carts")
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
        {/* <h2 className="text-3xl ">Total Item: {cart.length}</h2> */}
        {/* <h2 className="text-3xl ">Total Amount: ${total}</h2> */}
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
      
    </div>
  );
};

export default StudentCourse;
