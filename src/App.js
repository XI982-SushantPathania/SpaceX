import React from "react";
import "./App.css";
import Launches from "./components/launches";
import Filter from "./components/filters";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <h1 className="mainheading">SpaceX Launch Programs </h1>
      <Grid container spacing={2} style={{ padding: "24px" }}>
        <Grid item xs={8} sm={4} md={3} lg={2}>
          <Filter />
        </Grid>
        <Grid item xs={11} sm={8} md={9} lg={10}>
          <Launches />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
