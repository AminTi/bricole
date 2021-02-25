import React from "react";
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
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        className={classes.serachbar1}
      >
        <MenuItem value={null}>--</MenuItem>
        {allUsersAds &&
          allUsersAds.map((item, index) => {
            return (
              <MenuItem value={item.profession} key={index}>
                {item.profession}
              </MenuItem>
            );
          })}
      </Select>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        className={classes.serachbar1}
      >
        <MenuItem>--</MenuItem>
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
