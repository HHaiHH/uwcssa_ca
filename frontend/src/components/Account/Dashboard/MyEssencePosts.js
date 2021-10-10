import { Card, CardContent, Typography } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: "960px",
  //   margin: "auto",
  //   marginBlock: "1rem",
  // },
}));

export default function MyEssencePosts() {
  const classes = useStyles();
  return (
    <div>
      <Card sx={{ minWidth: "350px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            我的精华贴
          </Typography>
          <Typography variant="h5" component="div">
            我的精华贴
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}