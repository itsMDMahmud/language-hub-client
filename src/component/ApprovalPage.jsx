import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useCart from '../hooks/useCart';
import useAuth from '../hooks/useAuth';
import useMenu from '../hooks/useMenu';


const ApprovalPage = () => {
    const [approvalclasses, setApprovalclasses] = useState([]);
    // console.log(approvalclasses);
    // const [cart, refetch] = useCart();
    const [refetch] = useMenu();

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const url = 'https://language-hub-server.vercel.app/classes';
          const response = await fetch(url);
          const data = await response.json();
          setApprovalclasses(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      // const filterClasses = approvalclasses.filter( (filterClass) => filterClass.status === "pending" )
      // console.log(filterClasses);

      //-----------------------------------------------------------------------------------

      const handleUpdateStatus = (status, _id) => {
        const updateStatus = { status: status }
        console.log(updateStatus);

        fetch(`https://language-hub-server.vercel.app/classes/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >0) {
                  
                  Swal.fire({
                    // position: 'top-end',
                    icon: 'success',
                    title: `Course ${status}`,
                    showConfirmButton: false,
                    timer: 1500
                  }) && location.reload();
                }
                // setReload(prevReload => !prevReload);
            })
    }

    //------------------modal---------------------modal----------------modal-----------------
   

      
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th className=''>Course</th>
        <th> Instructor Name & Email</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {approvalclasses.map((myClass, index) => <tr key={myClass._id}>        
        <th className='text-lg'>{index+1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-28 h-28">
                <img src={ myClass?.photoURL} />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">{ myClass?.className}</div>
              <div className="text-lg">$ { myClass?.price}</div>
            </div>
          </div>
        </td>
        <td className='text-lg'>{ myClass?.displayName}<br/>
          <span className="badge text-lg badge-ghost badge-sm">{ myClass?.email}</span>
        </td>
        <td className='text-base uppercase'>{ myClass?.status}</td>
        <th className='flex align-middle justify-center flex-col gap-2'>

          {/* approve button  */}
          <button onClick={() => handleUpdateStatus('approved', myClass._id)} disabled={ myClass?.status === 'approved' || myClass?.status === 'denied'} className="btn btn-success btn-sm">Approve</button>

          {/* modal body  */}
          

           {/* update button  */}
          <button className="btn bg-[#081b29] text-white btn-sm" disabled={myClass?.feedback}> Feedback</button>

           {/* delete button  */}
          <button onClick={() => handleUpdateStatus('denied', myClass._id)} disabled={ myClass?.status === 'denied' || myClass?.status === 'approved'} className="btn btn-error btn-sm">Deny</button>
        </th>
      </tr>
    
     
         )}    
    </tbody>  
  </table>
</div>

        </div>
    );
};

export default ApprovalPage;