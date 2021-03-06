import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import { useForm } from "react-hook-form";

require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

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
  },
  close: {
    color: "black",
    marginLeft: "auto",
    padding: "10px 10px",
    fontSize: "30px",
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
    console.log(process.env);
    const msg = {
      to: "titiamin@icloud.com",
      from: "titiamin@icloud.com",
      subject: "Example Email",
      text: ` Dear user,Here is your email.`,
      html: `  <p>Dear user,</p> <p>Here is your email.</p>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
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
            action="https://formspree.io/f/xoqpzonp"
            method="POST"
            className={classes.root}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              className={classes.TextField}
              value={customerEmail ? customerEmail : ""}
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="text"
              placeholder="Email"
              name="_replyto"
              inputRef={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors._replyto && (
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
              name="message"
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
