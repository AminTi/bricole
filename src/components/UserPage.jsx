import React, { useState } from "react";
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
    color: "blue",
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

  return (
    <Container className={classes.container} maxWidth="m">
      <Container maxWidth="xs" className={classes.containerFab}>
        <Fab
          type="button"
          onClick={(e) => SethandleOpen(true)}
          className={classes.fab}
        >
          <AddCircleIcon></AddCircleIcon>
        </Fab>
      </Container>

      <Modal open={handleOpen} className={classes.containerFab}>
        <Container className={classes.containerModal}>
          <CloseIcon
            className={classes.close}
            onClick={(e) => SethandleOpen(false)}
          />
          {console.log(handleOpen)}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Outlined"
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
              <Button variant="contained" color="primary">
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
