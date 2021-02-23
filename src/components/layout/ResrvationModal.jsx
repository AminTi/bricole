import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  mailICon: {
    color: "blue",
    zIndex: 1000,
  },
  containerFab: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 10px",
  },
  containerModal: {
    background: "white",
    padding: "10px 10x",
    display: "flex",

    flexDirection: "column",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 5px",
  },
  TextField: {
    padding: "10px 5px",
    width: "100%",
  },
  close: {
    color: "black",
    marginLeft: "auto",
    padding: "10px 10px",
    fontSize: "20px",
    fontWeight: "bold",
    zIndex: "1000",
  },
}));

function ResrvationModal({
  toggleModal,
  setToggleModal,
  time,
  numberOfHour,
  ReservationDate,
  Userid,
  price,
}) {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { emails, bookingData } = useContext(UserContext);

  const onSubmit = (data, e) => {
    let Newprice = parseInt(price);
    const payload = {
      ...data,
      totalamount: Newprice * numberOfHour,
      id: Userid,
      booking: `${ReservationDate} ${time}`,
    };
    bookingData(payload);
    history.push("/orderpage");
  };

  return (
    <div>
      <Modal open={toggleModal} className={classes.containerFab}>
        <Container className={classes.containerModal}>
          <CloseIcon
            className={classes.close}
            onClick={(e) => setToggleModal(false)}
          />
          <form
            className={classes.root}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="Firstname"
                name="firstname"
                variant="outlined"
                inputRef={register({ required: true, minLength: 2 })}
              />
            </Box>
            <Box>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="lastname"
                name="lastname"
                variant="outlined"
                inputRef={register({ required: true, minLength: 2 })}
              />
            </Box>
            <Box>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="email"
                variant="outlined"
                type="text"
                placeholder="Email"
                name="email"
                inputRef={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              {errors.email && (
                <div className={classes.error}> Invalid Email </div>
              )}

              {errors.Profession && (
                <div className={classes.error}> Profession is required </div>
              )}
            </Box>
            <Box>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="Mobile"
                name="mobile"
                type="number"
                variant="outlined"
                inputRef={register({ required: true, minLength: 7 })}
              />
            </Box>
            <Box>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="adress"
                variant="outlined"
                type="text"
                placeholder="Adress"
                name="adress"
                inputRef={register({ required: true, minLength: 2 })}
              />
              {errors.adress && (
                <div className={classes.error}> The adress is required </div>
              )}
            </Box>
            <Box>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="City"
                variant="outlined"
                type="text"
                placeholder="City"
                name="city"
                inputRef={register({ required: true, minLength: 2 })}
              />
              {errors.city && (
                <div className={classes.error}> City is required </div>
              )}
            </Box>

            <Box className={classes.containerFab}>
              <Button variant="contained" color="primary" type="submit">
                Confirm
              </Button>
            </Box>
          </form>
        </Container>
      </Modal>
    </div>
  );
}

export default ResrvationModal;
