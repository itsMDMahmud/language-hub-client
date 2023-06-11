import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ApprovalPage = () => {
    const [approvalclasses, setApprovalclasses] = useState([]);
    // console.log(approvalclasses);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const url = 'http://localhost:5000/classes';
          const response = await fetch(url);
          const data = await response.json();
          setApprovalclasses(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const filterClasses = approvalclasses.filter( (filterClass) => filterClass.status === "pending" )
      console.log(filterClasses);

      //-----------------------------------------------------------------------------------

      const handleUpdateStatus = (status, _id) => {
        const updateStatus = { status: status }
        console.log(updateStatus);

        fetch(`http://localhost:5000/classes/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setReload(prevReload => !prevReload);
            })
    }

      
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
    {filterClasses.map((MyClass, index) =>
    
     <tr>        
        <th>{index+1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={MyClass?.photoURL} />
              </div>
            </div>
            <div>
              <div className="font-bold">{MyClass?.className}</div>
              <div className="text-sm">$ {MyClass?.price}</div>
            </div>
          </div>
        </td>
        <td>{MyClass?.displayName}<br/>
          <span className="badge badge-ghost badge-sm">{MyClass?.email}</span>
        </td>
        <td>{MyClass?.status}</td>
        <th className='flex align-middle justify-center flex-col gap-2'>
          <button onClick={() => handleUpdateStatus('approved', MyClass._id)} disabled={MyClass?.status === 'approved'} className="btn btn-success btn-sm">Approve</button>
          <button onClick={() => handleUpdateStatus('deny', MyClass._id)} disabled={MyClass?.status === 'deny'} className="btn btn-error btn-sm">Delete</button>
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