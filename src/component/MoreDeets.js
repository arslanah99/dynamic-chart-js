import React from "react";
import "./Box.css";
import Powerslap from "./video/powerslap.mp4";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MoreDeets = () => {
  toast.error("OH NOES! PAGE NOT FOUND?  .·´¯`(>▂<)´¯`·.");
  toast.success("OH NOES! PAGE NOT FOUND?  .·´¯`(>▂<)´¯`·.");
  toast.info("OH NOES! PAGE NOT FOUND?  .·´¯`(>▂<)´¯`·.");
  toast.warn("OH NOES! PAGE NOT FOUND?  .·´¯`(>▂<)´¯`·.");

  // function to create custom toast
  const successItem = () => {
    // custom toast is the title
    toast("Custom Toast", {
      // class name for css
      className: "black-background",
      // bodyClassName: "grow-font-size",
      // progressClassName: "fancy-progress-bar"
      // draggable to remove
      draggable: true,
      // position for toast
      position: toast.POSITION.TOP_CENTER
    });
  };

  axios
    .get("/fdsajifsda")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      if (err) {
        toast("axios api error", {
          // class name for css
          className: "black-background",
          // bodyClassName: "grow-font-size",
          // progressClassName: "fancy-progress-bar"
          // draggable to remove
          draggable: true,
          // position for toast
          position: toast.POSITION.TOP_CENTER
        });
      }
    });

  return (
    <div className="App">
      <>
        <ToastContainer
          draggable={false}
          transition={Bounce}
          autoClose={7000}
        />
      </>
      <button onClick={successItem}>SUCCESS</button>
      {/* <h1>MoreDeets</h1> */}
      {/* <div className="boxy">WOW BOXY BOX</div> */}
    </div>
  );
};

export default MoreDeets;
