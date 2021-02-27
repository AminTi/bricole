import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import { useForm } from "react-hook-form";

require("dotenv").config();
const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

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
function ReplayModal({ openModal, closeModal, customerEmail }) {
  const classes = useStyles();

  const { emails } = useContext(UserContext);

  const [handleOpen, SethandleOpen] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    const msg = {
      to: data.email, // Change to your recipient
      from: "titiamin@icloud.com",
      subject: data.titel,
      text: data.text,
      html: "<strong>Sent by Bricole No-replay </strong>",
    };
    await sendGridMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    // await SethandleOpen(closeModal);
  };

  return (
    <>
      <Modal open={openModal} className={classes.containerFab}>
        <Container className={classes.containerModal}>
          <CloseIcon
            className={classes.close}
            onClick={(e) => SethandleOpen(closeModal)}
          />

          <form
            className={classes.root}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              className={classes.TextField}
              value={customerEmail}
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

export default ReplayModal;
