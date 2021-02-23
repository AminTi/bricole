import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";

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
function ReplayModal({ openModal, closeModal }) {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const { emails } = useContext(UserContext);

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  /* End input state handling ^^^^ */

  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setInputs({
        email: "",
        message: "",
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/xoqpzonp",
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <>
      <Modal open={openModal} className={classes.containerFab}>
        <Container className={classes.containerModal}>
          <CloseIcon
            className={classes.close}
            onClick={(e) => closeModal(false)}
          />
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={handleOnChange}
              value={inputs.email}
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              onChange={handleOnChange}
              value={inputs.message}
            ></textarea>
            <button type="submit" disabled={serverState.submitting}>
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default ReplayModal;
