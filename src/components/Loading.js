import React from "react";
import aashuuLoader from "../aashuu/aashuuicon.png";
import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="preloader">
      <img src={aashuuLoader} alt="AshutoshKumar" />
    </div>
  );
};

export default Loading;
