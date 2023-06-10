import React  from "react";
import Carousell from "./Carousell";
import Instructors from "../../component/Instructors/Instructors";
import Hero from "./Hero";

const Homepage = () => {
  

  return (
    <div>

      <div className="my-5">
        <Hero/>
      </div>
      
      <div className="my-5">
        <Carousell />
      </div>
      <div className="my-5">
        <Instructors/>
      </div>
    </div>
  );
};

export default Homepage;
