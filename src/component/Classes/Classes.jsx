import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/classes")
          .then((res) => res.json())
          .then((data) => setAllClasses(data));
      }, []);

      const filterClasses = allClasses.filter( (filterClass) => filterClass.status === "approved" )
      // console.log(filterClasses);

    return (
        <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto gap-4">
      
      {filterClasses.map(oneClass => <ClassCard
        key={oneClass._id}
        oneClass={oneClass}
      ></ClassCard> )}
    </div>
    );
};

export default Classes;