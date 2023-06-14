import React, { useContext } from "react";
import useMenu from "../../hooks/useMenu";
import SingInstructor from "./SingInstructor";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";


const SixInstructors = () => {
    const { allInstructor} = useContext(AuthContext);
    // console.log(allInstructor);
    return (
        <div>
          <h2 className="lg:text-5xl text-2xl text-center font-semibold my-5 lg:my-10">Popular Instructors</h2>
          <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto gap-4">          
      
      {allInstructor.slice(0, 6).map((instructor) => 
      <motion.div
      // className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }} key={instructor?._id} className="box card card-compact m-2 bg-base-100 shadow-xl">
      <figure>
        <img
          src={instructor?.photoURL}
          alt="Instructor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-semibold">{instructor?.displayName}</h2>
        <p className="text-xl">{instructor?.email}</p>
        <div className="card-actions justify-end">
            <p className="uppercase">{instructor?.role}</p>
          {/* <button className="btn bg-[#039477] hover:bg-[#3bb89f] text-white">Profile</button> */}
        </div>
      </div>
    </motion.div>
      )}
    </div>
        </div>
    );
};

export default SixInstructors;