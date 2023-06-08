import UserCard from "./UserCard";
import useMenu from "../hooks/useMenu";
import { useQuery } from "@tanstack/react-query";
import React from "react";
// import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserCart = () => {
    const [alluser] = useMenu();
    // const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.data;
    });

    // const handleMakeAdmin = user => {
  
    //   fetch(`http://localhost:5000/users/admin/${user._id}`, {
    //       method: 'PATCH'        
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //       console.log(data);
    //       if (data.modifiedCount) {
    //           refetch();
    //           Swal.fire({
    //               icon: 'success',
    //               title: `${user.name} is an Admin now!`,
    //               showConfirmButton: false,
    //               timer: 1500
    //             })
    //       }
    //   })
    // }
    
    const handleDelete = user => {
  
    }

    return (
       <div className="w-full">
      {/* <Helmet>
        <title>My Cart</title>
      </Helmet> */}
      <div className="uppercase font-bold flex justify-evenly">
        <h2 className="text-2xl">Total Item: {users.length}</h2>
        {/* <h2 className="text-2xl">Total price: {total}</h2> */}
        <Link to='/dashboard/payment'> <button className="btn btn-warning btn-sm">Pay</button></Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item name</th>
              <th className="text-end">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => <tr key={user._id}>
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
                <td className="text-end">$ {user?.email}</td>
                <th>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt/> </button>
                </th>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default UserCart;