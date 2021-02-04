import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ViewColumnTwoTone } from "@material-ui/icons";

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
    padding: "10px 10px",
  },
  error: {
    color: "red",
  },
}));

function Login() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  return (
    <Container className={classes.container} maxWidth="sm">
      <h1> Bricole </h1>

      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <form>
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
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
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
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Password"
              name="password"
              inputRef={register({ required: true, minLength: 8 })}
            />
            {errors.password && (
              <div className={classes.error}>
                Password is required (8 Caracters)
              </div>
            )}
          </Box>
        </form>
      </Grid>
    </Container>
  );
}

export default Login;
