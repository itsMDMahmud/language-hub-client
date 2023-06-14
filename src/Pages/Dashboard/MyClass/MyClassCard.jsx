import React from 'react';

const MyClassCard = ({MyClass}) => {
    const {_id, className, photoURL, displayName, seats, price, status } = MyClass;
    return (
      <div className="card card-compact m-2 bg-base-100 shadow-xl">
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
              <div className=''>              
              <p className="uppercase text-lg font-semibold">$ {price}</p>
          </div>
          {status === 'approved'? <div className="btn btn-outline btn-success">{status}</div> :
          <>{status === 'pending'?
          <div className="btn btn-outline">{status}</div>:
          <div className="btn btn-outline btn-error">{status}</div>}</>}
              
            <button className="btn bg-[#081b29] hover:bg-[#081b29b4] text-white">Update</button>
          </div>
        </div>
      </div>
    );
};

export default MyClassCard;