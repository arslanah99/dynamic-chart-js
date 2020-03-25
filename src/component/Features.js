import React from "react";
import "./Box.css";
import Powerslap from "./video/powerslap.mp4";

const Features = () => {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
        <source src={Powerslap} type="video/mp4" />
      </video>
      <h1>Features</h1>
      <div className="grid">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
      </div>
    </div>
  );
};

export default Features;
