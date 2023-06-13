import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const EnrolledClasses = () => {
  useTitle('Enrolled');
    const { user } = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState([]);
    // console.log(enrolled);
    const navigate = useNavigate();
  //   console.log(histories);
  
    const url = `https://language-hub-server.vercel.app/payments/${user?.email}`;
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
    // console.log(enrolled);
  
    return (
        <div className="">
          <div className='text-5xl lg:my-10 text-center'>Enrolled {enrolled.length === 1? 'course': 'courses'}</div>
      
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Course name</th>
              <th>Trx_Id & date</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className='text-lg'>
            {enrolled.map((eClass, index) => <tr key={eClass._id}>
                    <th>{index+1}</th>
                    <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={eClass?.photoURL} />
              </div>
            </div>
            <div>
              <div className="font-bold">{eClass?.className}</div>
              
            </div>
          </div>
        </td>
        <td>{eClass?.transectionId}<br/>
          <span className="badge badge-ghost badge-sm">{eClass?.date}</span>
        </td>
        <td>{eClass?.email}</td>
        <th>
          <p className="">$ {eClass?.price}</p>
        </th>
                  </tr>)}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default EnrolledClasses;