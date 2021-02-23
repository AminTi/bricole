import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Box } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px",
    height: 600,
  },
  subWrapper: {
    display: "flex",
    justifyContent: "center",
    border: " 1px solid grey",

    flexDirection: "column",
    height: "100%",
  },
  box: {
    padding: "10px 10px",
  },
});

function BookingDetails(props) {
  const classes = useStyles();
  const { Getbookings, bookings } = useContext(UserContext);
  const id = props.match.params.slug;
  const currentReservations =
    bookings &&
    bookings.filter((elm) => {
      return elm.emailId == id && id;
    });

  useEffect(() => {
    Getbookings();
  }, []);

  const display = () => {
    if (bookings.length > 0) {
      return (
        <Container className={classes.subWrapper}>
          <Box className={classes.box}>
            Name:{" "}
            {bookings && `${bookings[0].firstname} ${bookings[0].lastname}`}
          </Box>
          <Box className={classes.box}>
            {" "}
            booked date: {bookings && bookings[0].bookingTime}{" "}
          </Box>
          <Box className={classes.box}>
            {" "}
            Email: {bookings && bookings[0].email}{" "}
          </Box>
          <Box className={classes.box}>
            {" "}
            Mobile: {bookings && bookings[0].mobile}{" "}
          </Box>
          <Box className={classes.box}>
            {" "}
            Adress: {bookings && bookings[0].adress}{" "}
          </Box>
          <Box className={classes.box}>
            {" "}
            City: {bookings && bookings[0].city}{" "}
          </Box>
          <Box className={classes.box}>
            {" "}
            Total: {`${bookings && bookings[0].total} :-`}
          </Box>
        </Container>
      );
    }
  };

  return <Container className={classes.wrapper}>{display()}</Container>;
}

export default BookingDetails;
