import React from 'react';

const ClassCard = ({oneClass}) => {
    const {_id, className, photoURL, displayName, seats, price } = oneClass;
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
              <div>
              <p className="text-lg font-semibold mb-1">{seats} Seats available</p>
              <p className="uppercase text-lg font-semibold">$ {price}</p>
              </div>
            <button className="btn bg-[#039477] hover:bg-[#3bb89f] text-white">Enroll Now</button>
          </div>
        </div>
      </div>
    );
};

export default ClassCard;