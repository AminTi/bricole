import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardAdvertesing from "./layout/CardAdvertesing";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    minHeight: "100%",
  },
}));
function Dashboard() {
  const classes = useStyles();
  const { ads, getAllUsers, getDataAds, userCollection } = useContext(
    UserContext
  );

  useEffect(() => {
    getAllUsers();
    getDataAds();
  }, []);

  return (
    <Container className={classes.container}>
      <CardAdvertesing allUsersAds={ads} />
    </Container>
  );
}

export default Dashboard;
