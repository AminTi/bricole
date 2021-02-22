import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 700,
  },

  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 300,
  },
  btn: {
    margin: 5,
  },
  btnWrapper: {
    padding: "10px 10px",
  },
}));

const time = [
  "08.00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "13:00 - 14-00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
];

function BokaMera() {
  const classes = useStyles();
  let now = new Date();
  let nowString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const [dateInput, setDateInput] = useState(nowString);

  let test = nowString.toString();
  let newDate = {
    time: test,
  };

  return (
    <Container className={classes.wrapper}>
      <Box>
        <TextField
          id="date"
          label="Choose a Day"
          type="date"
          defaultValue={nowString}
          className={classes.textField}
          defaultValue="2021-04-22"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box className={classes.btnWrapper}>
        {time.map((item, index) => {
          return (
            <Button variant="contained" className={classes.btn} key={index}>
              {item}
            </Button>
          );
        })}
      </Box>
    </Container>
  );
}

export default BokaMera;
