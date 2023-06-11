// import React, { useEffect, useState } from "react";
// import StudentCourseCard from "./student/StudentCourseCard";
import ApprovalPage from "../../component/ApprovalPage";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import AddClass from "./MyClass/AddClass";
import StudentCourse from "./student/studentCourse";

const Commonpage = () => {
  const [isAdmin, isAdminLoading, refetch] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  return (
    <div>
      {isAdmin  ?
          <>
          <ApprovalPage/>
          </> 
          :
          <>
          {isInstructor  ?
          <>
          <AddClass/>
          </> 
          :
          <>
          <StudentCourse/>
          </>
          }
          </>
          } 


      {/* <div>
      {(!isInstructor || !isAdmin)  && 
          <>
          <StudentCourse/>
          </>
          }
      </div> */}
    
    </div>
  );
};

export default Commonpage;
