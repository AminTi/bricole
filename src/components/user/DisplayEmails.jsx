import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import ReplayModal from "../layout/ReplayModal";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 1000,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    minWidth: "100%",
  },
  TextField: {
    padding: "10px 10px",
  },
  btn: {
    width: "10%",
    margin: " 0 auto",
  },
});

function DisplayEmails(props) {
  const classes = useStyles();
  const [handleOpen, SethandleOpen] = useState(false);
  const { readEmails, getemails, sendEmail } = useContext(UserContext);
  let url = props.location.pathname;
  const id = props.match.params.slug;

  const currentuerEmails =
    readEmails &&
    readEmails.filter((elm) => {
      return elm.emailId == id && id;
    });

  useEffect(() => {
    getemails();
  }, []);

  const clickHandler = (e) => {
    SethandleOpen(true);
  };

  const retrunCrntEpost = () => {
    if (currentuerEmails.length > 0) {
      return currentuerEmails[0].email;
    }
  };
  const emailsContent = () => {
    if (currentuerEmails.length != 0) {
      return (
        <Container className={classes.inputWrapper}>
          <TextField
            className={classes.TextField}
            value={currentuerEmails && currentuerEmails[0].email}
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="text"
            placeholder="Email"
            name="email"
          />

          <TextField
            className={classes.TextField}
            value={currentuerEmails && currentuerEmails[0].titel}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            type="text"
            placeholder="Title"
            name="Title"
          />
          <TextField
            value={currentuerEmails && currentuerEmails[0].text}
            className={classes.TextField}
            id="outlined-basic"
            label="Text  "
            name="text"
            multiline
            rows={8}
            variant="outlined"
          />
        </Container>
      );
    }
  };
  return (
    <Container className={classes.wrapper}>
      {emailsContent()}
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={clickHandler}
      >
        Replay
      </Button>

      <ReplayModal
        openModal={handleOpen}
        closeModal={SethandleOpen}
        customerEmail={retrunCrntEpost()}
      />
    </Container>
  );
}

export default DisplayEmails;
