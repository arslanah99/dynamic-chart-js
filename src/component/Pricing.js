import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Boxes.css";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <h1>Pricing</h1>
      <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div data-aos="fade-up" className="boxes">
          3
        </div>
        <div data-aos="fade-right" className="boxes">
          4
        </div>
        <div data-aos="fade-left" className="boxes">
          5
        </div>
        <div data-aos="flip-left" className="boxes">
          6
        </div>
      </div>
    </div>
  );
};

export default Pricing;
