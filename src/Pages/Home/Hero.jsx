import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div  data-aos="fade-down" data-aos-duration="1000">
     <div className="hero herosecion min-h-screen relative  mt-[75px]" >
  <div className="hero-overlay bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] "></div>
  <div className="hero-content text-center text-neutral-content">
  <h1 className="herotext mb-5 text-6xl font-bold absolute bottom-0 mx-auto text-white item">Welcome to Language Hub</h1>
    <div className="herotextdiv">
      
      
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </div>
  );
};

export default Hero;
