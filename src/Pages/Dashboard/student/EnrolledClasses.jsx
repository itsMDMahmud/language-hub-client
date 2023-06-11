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
        <div className="">
          <div className='text-5xl lg:my-10 text-center'>History Page</div>
      
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Trx_Id</th>
              <th>date & time</th>
              <th>price & qty</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((enrolledClass, index) => <tr>
                    <th>{index+1}</th>
                    <th>
                      <div className="avatar">
                        <h2 className='text-xl'>{enrolledClass?.email}</h2>
                      </div>
                    </th>
                    <th> 
                        
                        <div className='text-xl'>{enrolledClass?.transectionId}</div> </th>
                    <td className='text-center'>
                        <div className='text-xl'>{enrolledClass?.date}</div>    
                        
                    </td>  
                    <td>
                        <div className='text-xl mb-3'>$ {enrolledClass?.price}</div>
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