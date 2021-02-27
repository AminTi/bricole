import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Button, Box, TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  bar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "60px",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid grey",
  },
  serachbar1: {
    width: "30%",
    padding: "10px 10px",
  },
}));

function SearchBar({ allUsersAds, allUsers }) {
  const classes = useStyles();

  const {
    getLocalStorage,
    setGetLocalStorage,
    getLclStorage,
    setGetLclStorage,
  } = useContext(UserContext);

  const ClickhandlerPro = async (e) => {
    setGetLclStorage("");
    localStorage.clear();
    await localStorage.setItem("pro", e.target.value);
    await setGetLocalStorage(localStorage.getItem("pro"));
  };
  const ClickhandlerCity = async (e) => {
    setGetLocalStorage("");
    localStorage.clear();
    await localStorage.setItem("city", e.target.value);
    await setGetLclStorage(localStorage.getItem("city"));
  };

  return (
    <Box className={classes.bar}>
      <InputLabel id="demo-simple-select-label">Profession</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={getLocalStorage}
        className={classes.serachbar1}
        onChange={ClickhandlerPro}
      >
        <MenuItem value={null}>------</MenuItem>
        {allUsersAds &&
          allUsersAds.map((item, index) => {
            return (
              <MenuItem value={item.profession} key={index}>
                {item.profession}
              </MenuItem>
            );
          })}
      </Select>
      <InputLabel id="demo">City</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={getLclStorage}
        className={classes.serachbar1}
        onChange={ClickhandlerCity}
      >
        <MenuItem value={null}>------</MenuItem>
        {allUsers &&
          allUsers.map((item, index) => {
            return (
              <MenuItem value={item.city} key={index}>
                {item.city}
              </MenuItem>
            );
          })}
      </Select>
      <TextField type="date" className={classes.serachbar1} />
    </Box>
  );
}

export default SearchBar;
