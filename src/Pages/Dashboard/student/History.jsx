import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const History = () => {
    const { user } = useContext(AuthContext);
  const [histories, setHistories] = useState([]);
  const navigate = useNavigate();
//   console.log(histories);

  const url = `http://localhost:5000/payments?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setHistories(data)
        }
        else{
          //logout and then navigate
          navigate('/');
        } 
      });
  }, [url, navigate]);


    return (
        <div>
            <div className='text-5xl mt-5 text-center'>History Page</div>
            <div className="overflow-x-auto mt-10">
  <table className="table text-center">
    <thead className='text-2xl'>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Trx_ID</th>
        <th>Course Qty</th>
        <th>Price</th>
      </tr>
    </thead>    
    <tbody className='text-2xl'>
    {
        histories.map((history, index )=> <tr key={history._id}>
            <th>{index+1}</th>
            <td>
              <div className="flex items-center space-x-3">
                
                <div>
                  <div className="font-bold">{history.email}</div>
                </div>
              </div>
            </td>
            <td>{history.transectionId}</td>
            <td>{history.quantity}</td>
            <th>$ {history.price}</th>
          </tr>)
    }
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default History;