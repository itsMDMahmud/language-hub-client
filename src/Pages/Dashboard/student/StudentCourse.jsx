import React, { useContext, useEffect, useState } from "react";
import StudentCourseCard from "./StudentCourseCard";
import { AuthContext } from "../../../Provider/AuthProvider";

const StudentCourse = () => {
    const {user} = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carts')
      .then((res) => res.json())
      .then((data) => setEnrolledCourses(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-semibold text-center mt-5">
        welcome to Student Dashboard
      </h2>
      <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto gap-4">
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
