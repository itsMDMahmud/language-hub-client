import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const EnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState([]);
    // console.log(enrolled);
    const navigate = useNavigate();
  //   console.log(histories);
  
    const url = `http://localhost:5000/payments?email=${user?.email}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setEnrolled(data)
          }
          else{
            //logout and then navigate
            navigate('/');
          } 
        });
    }, [url, navigate]);
  
    return (
        <div className="my-20">
      
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & category</th>
              <th>Price & rating</th>
              <th>seller</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((enrolledClass, index) => <tr>
                    
                    <td>
                      <div className="avatar">
                        <div className="rounded w-40 mask mask-squircle">
                          {enrolledClass?.img ? <img className='' src='' alt="img"/> : <img src="https://www.worldatlas.com/r/w960-q80/upload/31/d2/7f/shutterstock-578010718.jpg"/> }
                          
                        </div>
                      </div>
                    </td>
                    <th> 
                        <div className='text-3xl mb-3'>{enrolledClass?.date}</div> 
                        <div className='text-xl'>{enrolledClass?.transectionId}</div> </th>
                    <td className='text-center'>
                        <div className='text-2xl mb-3'>{enrolledClass?.email}</div>    
                        
                    </td>  
                    <td>
                        <div className='text-2xl mb-3'>$ {enrolledClass?.price}</div>
                        <div className='text-xl'>{enrolledClass?.quantity}</div>
                    </td>
                    <th className=''>
                        
                        
                         
                    </th>
                  </tr>)}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default EnrolledClasses;