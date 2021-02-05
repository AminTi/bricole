import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
}));
function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      Amin Titi
    </Container>
  );
}

export default Dashboard;
