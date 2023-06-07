import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
//   const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {
      
    } )
    .catch( error => console.log(error))
  }

    const navItems = <>     
    <li><Link className="text-xl font-semibold NavLink active:text-[#039477]" to='/' >Home</Link></li>
    <li><Link className="text-xl font-semibold NavLink active:text-[#039477]" to='/about' >Instructors</Link></li>
    <li><Link className="text-xl font-semibold NavLink active:text-[#039477]" to='/addservice' >Classes</Link></li> 
    <li><Link className="text-xl font-semibold NavLink active:text-[#039477]" to='/services' >Dashboard</Link></li>
    <div></div>
    
    </>

  return (
    <div className="navbar max-w-screen-xl mx-auto bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* {navItems} */}
          </ul>
        </div>
        <Link Link to="/" className="main-logo btn btn-ghost normal-case text-xl">
          <img className="" src='https://i.ibb.co/fCqMFwv/main-logo.png' alt="logooo" />
        </Link>
        <Link Link to="/" className="second-logo btn btn-ghost normal-case text-xl">
          <img className="max-h-[55px]" src='https://i.ibb.co/7r2rN2z/mini-logo.png' alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      < div className="navbar-end">
        
        <li><button className="btn bg-[#039477] hover:bg-[#3bb89f] text-white" onClick=''
        //{handleLogOut}
         >log out</button></li> 
        
        <li><Link className="btn bg-[#039477] hover:bg-[#3bb89f] text-white" to='/login' >login</Link></li>   
    
        
      </div>
    </div>
  );
};

export default Navbar;