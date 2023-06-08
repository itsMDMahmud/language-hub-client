import React, { useContext } from "react";
import useMenu from "../../hooks/useMenu";
import SingInstructor from "./SingInstructor";
import { AuthContext } from "../../Provider/AuthProvider";

const Instructors = () => {
  // const [alluser] = useMenu();
  const {allAdmin, allInstructor, allStudent} = useContext(AuthContext);

  // const allAdmin = alluser.filter(
  //   (admin) => admin.role === "admin"
  // );
  // const allInstructor = alluser.filter(
  //   (instructor) => instructor.role === "instructor"
  // );
  // const allStudent = alluser.filter(
  //   (student) => student.role === "user"
  // );
  // console.log(allInstructor);

  return (
    <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto gap-4">
      
      {allInstructor.map((instructor) => (
        <SingInstructor
          key={instructor._id}
          instructor={instructor}
        ></SingInstructor>
      ))}
    </div>
  );

//   return [student, admin, loading, Instructors]
};


export default Instructors;
