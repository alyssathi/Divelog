import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function AccordionGrid() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography>Dive Number</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
