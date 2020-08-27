import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpacexData } from "../store/actions/launches";
import Grid from "@material-ui/core/Grid";
import LaunchCard from "./launchCard";
import Loader from "../components/Loader/Loader";

const Launches = () => {
  const dispatch = useDispatch();
  const launchesState = useSelector((state) => state.launchState);

  useEffect(() => {
    dispatch(getSpacexData());
  }, []);
  return (
    <Grid container spacing={3}>
      {launchesState.isLoading ? (
        <Loader />
      ) : launchesState.launchData ? (
        launchesState.launchData.map((data) => {
          return (
            <Grid
              item
              xs={9}
              sm={6}
              md={3}
              lg={3}
              xl={3}
              key={data.flight_number}
            >
              <LaunchCard
                imageUrl={data.links.mission_patch_small}
                title={data.mission_name}
                number={data.flight_number}
                missionId={data.mission_id}
                launchYear={data.launch_year}
                successfulLaunch={data.launch_success}
                successfulLanding={data.launch_landing}
              />
            </Grid>
          );
        })
      ) : (
        ""
      )}
    </Grid>
  );
};

export default Launches;
