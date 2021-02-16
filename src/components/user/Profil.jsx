import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, TextField, Button, Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  TextField: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 5px",
  },
  error: {
    color: "red",
    padding: "5px 5px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px 10px",
  },
}));

function Profil() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const {
    user,
    CreateCollection,
    profil,
    setprofil,
    setprofilData,
    getCollection,
    profilData,
  } = useContext(UserContext);

  const history = useHistory();

  const onSubmit = (data, e) => {
    CreateCollection(data);
    history.push("/UserPage");
    e.target.reset();
  };

  // useEffect(() => {
  //   if (user) {
  //     CreateCollection();
  //   }
  // }, [onSubmit]);

  return (
    <Container className={classes.container} maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              type="text"
              placeholder="Firstname"
              name="firstname"
              inputRef={register({ required: true, minLength: 2 })}
            />
            {errors.firstname && (
              <div className={classes.error}> Firstname is required </div>
            )}
          </Box>
          <Box>
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              type="text"
              placeholder="Lastname"
              name="lastname"
              inputRef={register({ required: true, minLength: 2 })}
            />
            {errors.lastname && (
              <div className={classes.error}> Lastname is required </div>
            )}
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
          </Box>
          <Box>
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
          </Box>

          <Box>
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Company"
              variant="outlined"
              type="text"
              placeholder="Company"
              name="Company"
              inputRef={register({ required: true, minLength: 2 })}
            />
            {errors.company && (
              <div className={classes.error}> Company name is required </div>
            )}
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
          <Box className={classes.btnBox}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Grid>
    </Container>
  );
}

export default Profil;
