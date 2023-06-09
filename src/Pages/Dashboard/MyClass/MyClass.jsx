import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyClassCard from './MyClassCard';

const MyClass = () => {
    const [myClasses, setMyclasses] = useState([]);
    const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/classes?email=${user.email}`) // Replace API_URL with the actual API endpoint
    //   .then(res => res.json())
    //   .then(data => setMyclasses(data))
    //   }, []);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const url = `http://localhost:5000/classes?email=${user?.email}`;
          const response = await fetch(url);
          const data = await response.json();
          setMyclasses(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

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