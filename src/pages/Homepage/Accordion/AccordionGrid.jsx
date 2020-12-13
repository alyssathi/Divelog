import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function AccordionGrid(props) {
  const {
    diveNumber,
    diveSite,
    date,
    depth,
    time,
    air,
    temperature,
    weights,
    visibility,
    activities,
    kindOfDive,
    notes,
  } = props;

  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <Typography>Dive Number: {diveNumber}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Dive Site: {diveSite}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Date: {date}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Depth: {depth}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Time: {time}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Air: {air}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Temperature: {temperature}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Weights: {weights}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Visibility: {visibility}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Activities: {activities}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Kind of Dive: {kindOfDive}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Notes: {notes}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
