import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassCard = ({oneClass, enrolled}) => {
  const {user} = useContext(AuthContext);
  // console.log(enrolled);

  const [isAdmin, isAdminLoading,] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

    const {_id, className, photoURL, displayName, seats, price } = oneClass;
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = oneClass => {
      // console.log(oneClass);

      if (user && user.email) {
        const cartItem = { CourseId:_id, className, photoURL, displayName, seats, price, UserEmail: user.email }
        // console.log(user.email);
        // console.log(cartItem);
        fetch("https://language-hub-server.vercel.app/carts", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              //refetch(); //refetch for update the number of cart
              Swal.fire({
                icon: "success",
                title: "Course added on cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      } else {
        Swal.fire({
          title: "Please Login to buy course",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "login Now!",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}});
          }
        });
      }
    }
    // console.log(enrolled);

    const oneEnrdcls = enrolled.filter((enldcls) => enldcls.className == oneClass.className )
    // const oneEnrdlnt = 
    // console.log(oneEnrdcls.length);
    const lengtho = oneEnrdcls.length == oneClass.seats;
    // console.log(enldcls.length);
    

    return (
      
      <div className={lengtho? "card card-compact m-2 bg-red-500  shadow-xl" : 'card card-compact m-2 bg-base-100  shadow-xl'}>
      {/* <div className="card card-compact m-2 bg-base-100  shadow-xl"> */}
        <figure>
          <img
            src={photoURL}
            alt="Instructor"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{className}</h2>
          <p className="text-2xl font-semibold ">{displayName}</p>
          <div className="card-actions justify-between mt-2">
              <div>
              <p className="text-lg font-semibold mb-1">{seats - oneEnrdcls.length} Seats available</p>
              <p className="uppercase text-lg font-semibold">$ {price}</p>
              </div>
              {(isAdmin || isInstructor || lengtho) ? <button onClick={() => handleAddToCart(oneClass)} className="btn bg-[#039477] hover:bg-[#3bb89f] text-white" disabled>Enroll Now</button>
              : 
              <button onClick={() => handleAddToCart(oneClass)} className="btn bg-[#039477] hover:bg-[#3bb89f] text-white" >Enroll Now</button>}
            {/* <button onClick={() => handleAddToCart(oneClass)} className="btn bg-[#039477] hover:bg-[#3bb89f] text-white" >Enroll Now</button> */}
          </div>
        </div>
      </div>
    );
};

export default ClassCard;