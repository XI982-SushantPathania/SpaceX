import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Loader.css";

const loader = (props) => {
  return (
    <div className="loaderBody">
      <LinearProgress style={{ backgroundColor: "#EF3F43" }} />
      <div className="logoBg">
        <p>SPACEX</p>
      </div>
    </div>
  );
};

export default loader;
