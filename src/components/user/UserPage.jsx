import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import CardAdvertesing from "../layout/CardAdvertesing";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 1000,
    backgroundColor: "rgb(240, 245, 251)",
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
  hide: {
    display: "none",

    // remmber : type hiiden do not on materail ui work check why
  },
}));

function UserPage() {
  const classes = useStyles();
  const [handleOpen, SethandleOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const {
    user,
    getAd,
    getDataAds,
    ads,
    getCollection,
    getAllUsers,
    userCollection,
    profilData,
  } = useContext(UserContext);

  const clickHandler = () => {
    SethandleOpen(true);
  };

  const onSubmit = async (data, e) => {
    if (CurrentUserProfil[0].city) {
      await getAd({ ...data, city: CurrentUserProfil[0].city });
      data && SethandleOpen(false);
    }
  };

  useEffect(() => {
    getAllUsers();
    getDataAds();
  }, []);

  let currentUserid = user && user.uid;
  const currentUser =
    ads &&
    ads.filter((elm) => {
      return elm.id == currentUserid && currentUserid;
    });

  const CurrentUserProfil =
    userCollection &&
    userCollection.filter((elm) => {
      return elm.id == currentUserid && currentUserid;
    });

  return (
    <Container className={classes.container} maxWidth="m">
      <Container maxWidth="xs" className={classes.containerFab}>
        <Fab type="button" onClick={clickHandler} className={classes.fab}>
          <AddCircleIcon className={classes.cirkelIcon}></AddCircleIcon>
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
              name="titel"
              variant="outlined"
              inputRef={register({ required: true, minLength: 2 })}
            />

            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Price"
              name="price"
              type="number"
              variant="outlined"
              inputRef={register({ required: true, minLength: 2 })}
            />

            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Profession"
              variant="outlined"
              type="text"
              placeholder="Profession"
              name="Profession"
              inputRef={register({ required: true, minLength: 2 })}
            />
            {errors.Profession && (
              <div className={classes.error}> Profession is required </div>
            )}

            <TextField
              className={classes.TextField}
              id="outlined-basic"
              type="file"
              name="image"
              variant="outlined"
              inputRef={register({ required: true })}
            />

            {/* <TextField
              className={classes.hide}
              id="outlined-basic"
              label="City"
              name="city"
              value={currentUserid && currentUserid[0].city}
              multiline
              variant="outlined"
              inputRef={register({ required: true, minLength: 2 })}
            /> */}

            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Description  "
              name="description"
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
      <CardAdvertesing
        currentUserAds={currentUser}
        currentProfil={CurrentUserProfil}
      />
    </Container>
  );
}

export default UserPage;
