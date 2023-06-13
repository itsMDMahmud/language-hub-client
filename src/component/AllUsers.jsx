import UserCard from "./UserCard";
import useMenu from "../hooks/useMenu";
import { useQuery } from "@tanstack/react-query";
import React from "react";
// import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTitle from "../hooks/useTitle";

const AllUsers = () => {
  useTitle('Manage users');
  const [ refetch] = useAdmin();
  const [alluser] = useMenu();
  // const [axiosSecure] = useAxiosSecure();
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("https://language-hub-server.vercel.app/users");
    return res.data;
  });

  const handleMakeInstructor = (user) => {
    fetch(`https://language-hub-server.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          // refetch();
          // window.location.reload(false);
          Swal.fire({
            icon: "success",
            title: `${user.displayName} is an instructor now!`,
            showConfirmButton: false,
            timer: 1500,
          }) && location.reload();
        }
      });
  };
  const handleMakeAdmin = (user) => {
    fetch(`https://language-hub-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          // refetch();
          // window.location.reload(false);
          Swal.fire({
            icon: "success",
            title: `${user.displayName} is an Admin now!`,
            showConfirmButton: false,
            timer: 1500,
          })&& location.reload();
        }
      });
  };

  const handleDelete = (user) => {};
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>User Name</th>
              <th className="">Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.displayName}</td>
                <td className="">{user?.email}</td>
                <td className="">{user?.role}</td>
                <td className=""> 
                <button disabled={user.role === 'admin' || user.role === 'instructor' } onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-teal-500 text-white"><FaUserShield/> </button>
                </td>
                
                <td className=""> <button disabled={user.role === 'admin' || user.role === 'instructor' } onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-[#ff7979] text-white"><FaUserShield/> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto gap-4">
    //   {alluser.map((oneuser) => (
    //     <UserCard
    //         key={oneuser._id}
    //         oneuser={oneuser}
    //     ></UserCard>
    //   ))}
    //   hmm
    // </div>
  );
};

export default AllUsers;
