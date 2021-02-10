import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
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

function UserPage() {
  const classes = useStyles();
  const [handleOpen, SethandleOpen] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const { user, getCollection } = useContext(UserContext);

  const clickHandler = () => {
    SethandleOpen(true);
  };

  const onSubmit = (data, e) => {
    console.log(data);
  };

  return (
    <Container className={classes.container} maxWidth="m">
      <Container maxWidth="xs" className={classes.containerFab}>
        <Fab type="button" onClick={clickHandler} className={classes.fab}>
          <AddCircleIcon></AddCircleIcon>
        </Fab>
      </Container>

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
              variant="outlined"
            />
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Price"
              variant="outlined"
            />
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              type="file"
              variant="outlined"
            />

            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Description  "
              multiline
              rows={8}
              variant="outlined"
            />

            <Box className={classes.containerFab}>
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Box>
          </form>
        </Container>
      </Modal>
    </Container>
  );
}

export default UserPage;
