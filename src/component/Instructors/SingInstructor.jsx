import React from "react";

const SingInstructor = ({instructor}) => {
    const {_id, displayName, photoURL, email, role } = instructor;
  return (
    <div className="card card-compact m-2 bg-base-100 shadow-xl">
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
    </div>
  );
};

export default SingInstructor;
