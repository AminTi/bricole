import React, { useState, useContext } from "react";
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
    alignItems: "center",
    padding: "10px 10px",
  },
  containerModal: {
    background: "white",
    padding: "10px 10x",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 5px",
  },
  TextField: {
    padding: "10px 5px",
  },
  close: {
    color: "black",
    float: "right",
    padding: "10px 10px",
    fontSize: "50px",
    fontWeight: "bold",
    zIndex: "1000",
  },
}));

function EmailModal({ userId }) {
  const classes = useStyles();
  const [handleOpen, SethandleOpen] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const { emails } = useContext(UserContext);
  const onSubmit = (data, e) => {
    let values = { ...data, id: userId };
    if (values) {
      emails(values);
      SethandleOpen(false);
    }
  };

  return (
    <>
      <EmailIcon
        className={classes.mailICon}
        onClick={(e) => SethandleOpen(true)}
      />
      <Modal open={handleOpen} className={classes.containerFab}>
        <Container className={classes.containerModal}>
          <CloseIcon
            className={classes.close}
            onClick={(e) => SethandleOpen(false)}
          />

          <form
            className={classes.root}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Titel"
              name="titel"
              variant="outlined"
              inputRef={register({ required: true, minLength: 2 })}
            />

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

            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Text  "
              name="text"
              multiline
              rows={8}
              variant="outlined"
              inputRef={register({ required: true, minLength: 2 })}
            />

            <Box className={classes.containerFab}>
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Box>
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default EmailModal;
