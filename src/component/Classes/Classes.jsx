import React, { useContext, useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/classes")
          .then((res) => res.json())
          .then((data) => setAllClasses(data));
      }, []);

      const filterClasses = allClasses.filter( (filterClass) => filterClass.status === "approved" )
      // console.log(filterClasses);


      //------------------------------------------------------------------------------
      //---------------------------enrolled classes-----------------------------------


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
     
    // const singleEnrollClass = enrolled.map(singleEnrollClass=> singleEnrol);
    // console.log(enrolled);

    return (
        <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto gap-4">
      
      {filterClasses.map(oneClass => <ClassCard
        key={oneClass._id}
        oneClass={oneClass}
        enrolled={enrolled}
      ></ClassCard> )}
    </div>
    );
};

export default Classes;