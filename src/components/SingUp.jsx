import React, { useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    padding: "5px 5px",
  },
  TextField: {
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
    padding: "5px 5px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px",
  },
  box: {
    margin: "10px 10px",
  },
}));

function SingUp() {
  const classes = useStyles();
  const { register, handleSubmit, errors, watch } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (a, e) => {
    const email = a.email;
    const password = a.password;

    console.log(email);
    console.log(password);

    e.target.reset();
  };
  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={classes.box}>
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

            <Box className={classes.box}>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Password"
                name="password"
                inputRef={register({ required: true, minLength: 8 })}
              />
              {errors.password && (
                <div className={classes.error}>
                  {" "}
                  Password is required (8 Caracters)
                </div>
              )}
            </Box>
            <Box className={classes.box}>
              <TextField
                className={classes.TextField}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Password"
                name="password_repeat"
                inputRef={register({
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <div className={classes.error}>
                  {errors.password_repeat.message}
                </div>
              )}
            </Box>
            <Box className={classes.btnBox}>
              <Button type="submit" variant="contained" color="primary">
                SingUp
              </Button>
            </Box>
          </form>
        </Grid>
      </Container>
    </div>
  );
}

export default SingUp;
