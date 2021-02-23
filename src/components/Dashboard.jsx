import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardAdvertesing from "./layout/CardAdvertesing";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 1500,
  },
  styleContainer: {
    height: 300,
    background: "#f7f0f0",
    margin: "1%",
  },
}));
function Dashboard() {
  const classes = useStyles();
  const {
    ads,
    getAllUsers,
    getDataAds,
    userCollection,
    profilData,
  } = useContext(UserContext);

  useEffect(() => {
    getAllUsers();
    getDataAds();
  }, []);

  return (
    <Container className={classes.container}>
      <Container className={classes.styleContainer}> </Container>
      <Container>
        <CardAdvertesing allUsersAds={ads} />
      </Container>
    </Container>
  );
}

export default Dashboard;
