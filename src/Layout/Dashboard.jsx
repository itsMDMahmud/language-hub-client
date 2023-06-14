import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import useInstructor from "../hooks/useInstructor";
import useTitle from "../hooks/useTitle";
import Swap from "../Shared/Swap";

const Dashboard = () => {
  useTitle('Dashboard');

  //---logout--------------------------------------
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // const [cart, refetch] = useCart();
  const [isAdmin, isAdminLoading, refetch] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  // const [isInstructor, isInstructorLoading] = useAdmin();
  // console.log(isAdmin);
  refetch();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col "> 
      {/* items-center justify-center */}
        <Outlet/>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#081b29]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 h-full  text-base-content">
          {/* Sidebar content here */}
          <div className=" flex justify-between items-center flex-row-reverse"> <Swap/>
          {user?.email ? (
          <>
            <img
              className="w-8 rounded-full"
              src={user?.photoURL}
              alt="img"
              title={user.displayName}
            />
            <Link onClick={handleLogOut}>
              <button className="btn btn-sm border-none bg-[#ee5253] hover:bg-[#3bb89f] text-white">
                logout
              </button>
            </Link>
          </>
        ) : (
          <Link to="login">
            <button className="btn bg-[#039477] hover:bg-[#3bb89f] text-white">
              Login
            </button>
          </Link>
        )}
           </div>
           <div className="divider"></div>
          <li> <Link className="dashnav" to='/'>Home</Link> </li>
          <li> <Link className="dashnav" to='/instructors'>Instructors</Link> </li>
          <li> <Link className="dashnav" to="/classes" > Courses </Link> </li>
          <li> <Link className="dashnav" to="/dashboard/commonpage" >Dashboard</Link></li>
          <div className="divider"></div>
          

          {isAdmin  ?
          <>
          <li> <Link className=" dashnav" to='/dashboard/allusers'>Manage Users</Link> </li>
          <li> <Link className=" dashnav" to='/dashboard/approvalPage'>Approval Page</Link> </li>
          </>
          :
          <>
          {isInstructor  ?
          <>
          <li> <Link className=" dashnav " to='/dashboard/addclass'>Add Course</Link> </li>
          <li> <Link className=" dashnav " to='/dashboard/myclass'>My Courses</Link> </li>
          </> :
          <>
          <li><Link className="dashnav" to='/dashboard/enrolled'>Enrolled Courses</Link></li>
          <li><Link className="dashnav" to='/dashboard/history'>History</Link></li>
          </>
          }
          </>
          }       
          
          <div className="divider"></div>
          
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
