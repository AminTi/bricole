import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardAdvertesing from "./layout/CardAdvertesing";
import SerachBar from "./layout/SearchBar";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 1500,
    backgroundColor: "rgb(240, 245, 251)",
    paddingTop: "50px",
  },

  styleContainer: {
    height: 300,
    background: "white",
    margin: "1%",
    borderRadius: "10px",
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
        <SerachBar allUsersAds={ads} allUsers={userCollection} />
        <CardAdvertesing allUsersAds={ads} />
      </Container>
    </Container>
  );
}

export default Dashboard;
