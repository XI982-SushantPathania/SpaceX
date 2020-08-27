import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./filter.css";
import {
  getSuccesfulLaunchData,
  getSuccesfulLandingData,
  getSuccesfulAllData,
} from "../store/actions/filter";

function Filters() {
  const dispatch = useDispatch();
  const [buttonValue, setButtonValue] = useState("");
  const [successfulLaunch, setSuccessfulLaunch] = useState("");
  const [successfulLanding, setSuccessfulLanding] = useState("");

  const arr1 = [2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020];
  const arr2 = [2007, 2009, 2011, 2013, 2015, 2017, 2019];

  useEffect(() => {
    if (buttonValue == "" && successfulLanding == "")
      dispatch(getSuccesfulLaunchData(successfulLaunch));
  }, [successfulLaunch]);

  useEffect(() => {
    if (buttonValue == "")
      dispatch(getSuccesfulLandingData(successfulLaunch, successfulLanding));
  }, [successfulLaunch && successfulLanding]);

  useEffect(() => {
    if (
      successfulLanding !== "" &&
      successfulLaunch !== "" &&
      buttonValue !== ""
    )
      dispatch(
        getSuccesfulAllData(successfulLaunch, successfulLanding, buttonValue)
      );
  }, [successfulLaunch, successfulLanding, buttonValue]);

  return (
    <div className="navbarContainer">
      <h3 className="filter">Filters</h3>
      <h5 className="headings"> Launch Year </h5>
      <div className="parent1">
        <div className="child1">
          {arr1.map((arr) => {
            return (
              <button
                className={arr === buttonValue ? "darkbtn" : "btn"}
                onClick={() => {
                  setButtonValue(arr);
                }}
              >
                {arr}
              </button>
            );
          })}
        </div>

        <div className="child1">
          {arr2.map((arr) => {
            return (
              <button
                className={arr === buttonValue ? "darkbtn" : "btn"}
                onClick={() => setButtonValue(arr)}
              >
                {arr}
              </button>
            );
          })}
        </div>
      </div>

      <h5 className="headings"> Successful Launch </h5>
      <div className="parent1">
        <div className="child1">
          <button
            onClick={() => setSuccessfulLaunch("true")}
            className={successfulLaunch === "true" ? "darkbtn" : "btn"}
          >
            True
          </button>
        </div>
        <div className="child1">
          <button
            onClick={() => setSuccessfulLaunch("false")}
            className={successfulLaunch === "false" ? "darkbtn" : "btn"}
          >
            False
          </button>
        </div>
      </div>
      <h5 className="headings"> Successful Landing </h5>
      <div className="parent1">
        <div className="child1">
          <button
            className={successfulLanding === "true" ? "darkbtn" : "btn"}
            onClick={() => setSuccessfulLanding("true")}
          >
            True
          </button>
        </div>
        <div className="child1">
          <button
            className={successfulLanding === "false" ? "darkbtn" : "btn"}
            onClick={() => setSuccessfulLanding("false")}
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
