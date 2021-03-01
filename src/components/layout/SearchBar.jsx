import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Button, Box, TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  bar: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "60px",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "1px solid grey",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  serachbars: {
    width: "100%",

    padding: "10px 15px",
  },
  formControl: {
    width: "100%",
    margin: theme.spacing(1),
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
    <AppBar className={classes.bar}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          profession
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={getLocalStorage}
          className={classes.serachbars}
          onChange={ClickhandlerPro}
          label="Profession"
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
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={getLclStorage}
          className={classes.serachbars}
          onChange={ClickhandlerCity}
          label="City"
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
      </FormControl>
    </AppBar>
  );
}

export default SearchBar;
