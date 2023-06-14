import React  from "react";
import Carousell from "./Carousell";
import Instructors from "../../component/Instructors/Instructors";
import Hero from "./Hero";
import SixInstructors from "../../component/Instructors/SixInstructors";
import useTitle from "../../hooks/useTitle";
import PopularClasses from "./PopularClasses";

const Homepage = () => {
  useTitle('home');
  

  return (
    <div>

      <div className="mb-5 mt-">
        <Hero/>
      </div>
      
      <div className="my-5">
        <Carousell />
      </div>
      <div className="my-5">
        <SixInstructors/>
      </div>
      <div className="my-5">
        <PopularClasses/>
      </div>
    </div>
  );
};

export default Homepage;
