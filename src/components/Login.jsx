import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContextProvider";
import { Container, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  btnLink: {
    padding: "5px 5px",
  },
}));

function Login() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const {
    handelSingIn,
    setEmail,
    myPassword,
    setMyPassword,
    eml,
    Changes,
  } = useContext(UserContext);

  const onSubmit = (data, e) => {
    handelSingIn();
  };

  useEffect(() => {
    Changes();
  }, [onSubmit]);

  return (
    <Container className={classes.container} maxWidth="sm">
      <h1> Bricole </h1>

      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              value={eml}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.TextField}
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="text"
              placeholder="Email"
              name="email"
              inputRef={register({
                required: true,
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
              })}
            />
            {errors.email && (
              <div className={classes.error}> Invalid Email </div>
            )}
          </Box>
          <Box>
            <TextField
              value={myPassword}
              onChange={(e) => setMyPassword(e.target.value)}
              className={classes.TextField}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Password"
              name="password"
              inputRef={register({ required: true, minLength: 7 })}
            />
            {errors.password && (
              <div className={classes.error}>
                Password is required (8 Caracters)
              </div>
            )}
          </Box>
          <Box className={classes.btnBox}>
            <Button variant="contained" color="primary" type="submit">
              SingIn
            </Button>
            <Link to="SingUp" className={classes.btnLink}>
              Create your Bricole Account{" "}
            </Link>
          </Box>
        </form>
      </Grid>
    </Container>
  );
}

export default Login;
