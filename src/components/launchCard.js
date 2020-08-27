import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./launchCard.css";

const launchCard = (props) => {
  const {
    imageUrl,
    number,
    missionId,
    title,
    launchYear,
    successfulLaunch,
    successfulLanding,
  } = props;

  return (
    <Card className="card">
      <CardMedia className="media" image={imageUrl} />
      <CardContent>
        <div className="title">
          {title}#{number}
        </div>
        {title.length < 30 ? <br /> : null}
        <div className="parent">
          <div className="child">
            <p className="text"> Mission Ids:</p>{" "}
            <p className="value">{missionId}</p>
          </div>
          <div className="child">
            <p className="text">Launch Year:</p>{" "}
            <p className="value">{launchYear}</p>
          </div>
          <div className="child">
            <p className="text"> Successful Launch:</p>
            <p className="value">{successfulLaunch ? "True" : "False"}</p>
          </div>
          <div className="child">
            <p className="text">Successful Landing:</p>
            <p className="value">{successfulLanding}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default launchCard;
