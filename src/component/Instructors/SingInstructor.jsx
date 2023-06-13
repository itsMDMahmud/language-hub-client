import React from "react";
import { motion } from "framer-motion";

const SingInstructor = ({instructor}) => {
    const {_id, displayName, photoURL, email, role } = instructor;
  return (
    <motion.div
      // className="box"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }} className="box container item card card-compact m-2 bg-base-100 shadow-xl">
      <figure>
        <img
          src={photoURL}
          alt="Instructor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-semibold">{displayName}</h2>
        <p className="text-xl">{email}</p>
        <div className="card-actions justify-end">
            <p className="uppercase">{role}</p>
          {/* <button className="btn bg-[#039477] hover:bg-[#3bb89f] text-white">Profile</button> */}
        </div>
      </div>
      </motion.div>
  );
};

export default SingInstructor;
