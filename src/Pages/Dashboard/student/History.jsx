import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const History = () => {
  useTitle('History');
    const { user } = useContext(AuthContext);
  const [histories, setHistories] = useState([]);
  const navigate = useNavigate();
  // console.log(user);

  const url = `https://language-hub-server.vercel.app/payments/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // jsonData.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (!data.error) {
          data.sort((a, b) => new Date(b.date) - new Date(a.date));
          setHistories(data)
        }
        else{
          //logout and then navigate
          navigate('/');
        } 
      });
  }, [url, navigate]);
// console.log(histories);

    return (
        <div className=''>
            <div className='text-5xl mt-5 text-center'>Payment {histories.length === 1? 'history': 'histories'}</div>
            <div className="overflow-x-auto mt-10">
  <table className="table ">
    <thead className='text-2xl'>
      <tr>
        <th>#</th>
        <th>Name & Email</th>
        <th>Trx_ID & date</th>
        {/* <th></th> */}
        <th>Price</th>
      </tr>
    </thead>    
    <tbody className='text-2xl '>
    {
        histories.map((history, index )=> <tr className='' key={history._id}>
            <th>{index+1}.</th>
            <td>
              <div className="flex items-center space-x-3">
                
                <div>
                  
                  <div className="font-bold">{user.displayName}</div>
                  <div className="font-semibold">{history.email}</div>
                </div>
              </div>
            </td>
            <td>
              <div className='flex'> {history?.transectionId}</div>
              <div className='flex'> {history?.date}</div>
            </td>
            {/* <td>{history.quantity}</td> */}
            <td><div className='font-bold'>$ {history.price}</div>
            <div>Qty {history.quantity}</div>
            </td>
          </tr>)
    }
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default History;