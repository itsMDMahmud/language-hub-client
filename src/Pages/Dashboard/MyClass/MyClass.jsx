import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyClassCard from './MyClassCard';
import useTitle from '../../../hooks/useTitle';

const MyClass = () => {
  useTitle('My Courses');
    const [myClasses, setMyclasses] = useState([]);
    const { user } = useContext(AuthContext);
    

    // useEffect(() => {
    //     fetch(`https://language-hub-server.vercel.app/classes?email=${user.email}`) // Replace API_URL with the actual API endpoint
    //   .then(res => res.json())
    //   .then(data => setMyclasses(data))
    //   }, []);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const url = `https://language-hub-server.vercel.app/classes?email=${user?.email}`;
          const response = await fetch(url);
          const data = await response.json();
          setMyclasses(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      // const allAdmin = alluser.filter( (admin) => admin.role === "admin" );
      // const filterClasses = myClasses.filter( (filterClass) => filterClass.status === "approved" )

    return (
        <div className="max-w-screen-xl grid md:grid-cols-3 mx-auto gap-4">
      
      {myClasses.map(MyClass => <MyClassCard
        key={MyClass._id}
        MyClass={MyClass}
      ></MyClassCard> )}
    </div>
    );
};

export default MyClass;