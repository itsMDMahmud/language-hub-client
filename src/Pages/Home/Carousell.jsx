import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carousell = () => {
  return (
    <Carousel>
      <div>
        <img
          className="max-w-[1000px]"
          src="https://i.ibb.co/H7M4Jm0/arabic.png"
        />
      </div>
      <div>
        <img
          className="max-w-[1000px]"
          src="https://i.ibb.co/TmH87LY/english.png"
        />
      </div>
      <div>
        <img
          className="max-w-[1000px]"
          src="https://i.ibb.co/fkFHy3Z/african.png"
        />
      </div>
      <div>
        <img
          className="max-w-[1000px]"
          src="https://i.ibb.co/YQwgV19/turkey-1.png"
        />
      </div>
    </Carousel>
  );
};

export default Carousell;
