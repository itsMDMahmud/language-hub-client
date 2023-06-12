import React, { useContext, useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Classes = () => {
  useTitle('Courses');
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch("https://language-hub-server.vercel.app/classes")
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
     
       const url = `https://language-hub-server.vercel.app/payments?email=${user?.email}`;
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