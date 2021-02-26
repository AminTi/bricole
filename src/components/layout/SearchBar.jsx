import React, { useContext } from "react";

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

  return (
    <Box className={classes.bar}>
      <InputLabel id="demo-simple-select-label">Profession</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        className={classes.serachbar1}
      >
        <MenuItem value={null}>------</MenuItem>
        {allUsersAds &&
          allUsersAds.map((item, index) => {
            return (
              <MenuItem
                value={item.profession}
                key={index}
                onClick={(e) => localStorage.setItem("values", item.profession)}
              >
                {item.profession}
              </MenuItem>
            );
          })}
      </Select>
      <InputLabel id="demo">City</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        className={classes.serachbar1}
        value="City"
      >
        <MenuItem value={null}>------</MenuItem>
        {allUsers &&
          allUsers.map((item, index) => {
            return (
              <MenuItem
                value={item.city}
                key={index}
                onClick={(e) => localStorage.setItem("values", item.city)}
              >
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
