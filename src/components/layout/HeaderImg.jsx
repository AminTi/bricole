import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgWrapper: {
    width: "100%",
    hight: "50%",
  },
  image: {
    width: "100px",
    hight: "100px",
  },
}));

function HeaderImg() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.imgWrapper}>
        <img src="/image/TITLOGA-1.png" className={classes.image} />
      </Box>
    </>
  );
}

export default HeaderImg;
