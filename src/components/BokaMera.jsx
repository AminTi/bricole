import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button, Box } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ResrvationModal from "./layout/ResrvationModal";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 10%",
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    gap: "5px",
    padding: "20px 20px",
  },
  Subwrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  btnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px 10px",
  },
  Select: {
    width: 300,
    padding: "10px 10",
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
const time2 = [
  "08.00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18-00",
];
const time3 = [
  "07.00 - 10:00",
  "10:00 - 13:00",
  "13:00 - 16:00",
  "16:00 - 17:00",
];

function BokaMera(props) {
  const classes = useStyles();
  const [disabledBtn, setDisaBledBtn] = useState(false);

  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [hour, SetHour] = useState("");
  const [handleOpen, SethandleOpen] = useState(false);

  let id = props.match.params.slug;
  let price = props.match.params.price;

  const { register, handleSubmit, errors } = useForm();
  let now = new Date();
  let nowString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const clickHandler = (e) => {
    SetHour(e.target.textContent);
    SethandleOpen(true);
  };

  const reservationTemplate = (e) => {
    if (number == 1) {
      return (
        <Box className={classes.btnWrapper}>
          {time.map((item, index) => {
            return (
              <Button
                variant="contained"
                className={classes.btn}
                key={index}
                onClick={clickHandler}
                disabled={disabledBtn}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      );
    } else if (number == 2) {
      return (
        <Box className={classes.btnWrapper}>
          {time2.map((item, index) => {
            return (
              <Button
                variant="contained"
                className={classes.btn}
                key={index}
                onClick={clickHandler}
                disabled={disabledBtn}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      );
    } else if (number == 3) {
      return (
        <Box className={classes.btnWrapper}>
          {time3.map((item, index) => {
            return (
              <Button
                variant="contained"
                className={classes.btn}
                key={index}
                onClick={clickHandler}
                disabled={disabledBtn}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      );
    } else {
      return (
        <Box className={classes.btnWrapper}>
          {time.map((item, index) => {
            return (
              <Button
                variant="contained"
                className={classes.btn}
                key={index}
                disabled={true}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      );
    }
  };

  return (
    <Container className={classes.wrapper}>
      <Container className={classes.Subwrapper}>
        <Box>
          <TextField
            onChange={(e) => setDate(e.target.value)}
            id="date"
            label="Choose a Day"
            type="date"
            value={date}
            defaultValue={nowString}
            className={classes.Select}
            defaultValue="2021-04-22"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box>
          <InputLabel id="demo-simple-select-label">Number of hours</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={number}
            onClick={handleChange}
            className={classes.textField}
          >
            <MenuItem value={null}>--</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </Box>
        {reservationTemplate()}
      </Container>
      <ResrvationModal
        toggleModal={handleOpen}
        setToggleModal={SethandleOpen}
        time={hour}
        numberOfHour={number}
        ReservationDate={date}
        Userid={id}
        price={price}
      />
    </Container>
  );
}

export default BokaMera;
