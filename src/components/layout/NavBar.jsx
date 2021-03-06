import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Drawer as MUIDrawer, List } from "@material-ui/core";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router";

import MailIcon from "@material-ui/icons/Mail";
import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import BubbleChartTwoToneIcon from "@material-ui/icons/BubbleChartTwoTone";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { UserContext } from "../../context/UserContextProvider";

import ArrowBackTwoToneIcon from "@material-ui/icons/ArrowBackTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactsIcon from "@material-ui/icons/Contacts";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";

import InfoIcon from "@material-ui/icons/Info";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "blue",
  },
  title: {
    flexGrow: 1,
    color: "#ffa600",
    fontWeight: "bold",
    fontSize: "30px",
  },
  appbar: {
    with: "100%",
    background: "white",
  },
  wrapper: {
    height: "10%",
    with: "100%",
    paddingBottom: "10px",
  },
  meniIcon: {
    color: "black",
  },
  link: {
    textDecoration: " none",
    color: "blue",
    fontWeight: "bold",
  },

  bricole: {
    width: "220px",
    height: "50px",
    margin: "0 auto",
  },

  signIn: {
    textDecoration: " none",
    color: "white",
  },

  typograf: {
    with: "100%",
    minWith: "100%",
  },
  logIngLogOut: {
    backgroundColor: "blue",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const { user, handelLogOut, getCollection, profilData } = useContext(
    UserContext
  );
  const history = useHistory();

  const clickhandler = () => {
    if (user) {
      getCollection(user.uid);
      setToggle(false);
    }
  };

  const ItemList = [
    {
      text: (
        <Link to="/" className={classes.link} onClick={(e) => setToggle(false)}>
          Home
        </Link>
      ),
      icon: <HomeIcon />,
    },

    {
      text: (
        <Link
          to="profilDisabled"
          className={classes.link}
          onClick={clickhandler}
        >
          Profil
        </Link>
      ),
      icon: <AccountCircleIcon />,
    },
    {
      text: (
        <Link
          to="/UserPage"
          className={classes.link}
          onClick={(e) => setToggle(false)}
        >
          Dashboard
        </Link>
      ),
      icon: <DashboardIcon />,
    },

    {
      text: (
        <Link
          to="/inbox"
          className={classes.link}
          onClick={(e) => setToggle(false)}
        >
          {" "}
          Inbox{" "}
        </Link>
      ),
      icon: <MailIcon />,
    },
    {
      text: (
        <Link
          to="/bookings"
          className={classes.link}
          onClick={(e) => setToggle(false)}
        >
          Bookings
        </Link>
      ),
      icon: <AssignmentIndIcon />,
    },
    {
      text: (
        <Link onClick={(e) => setToggle(false)} className={classes.link}>
          Contcts
        </Link>
      ),
      icon: <ContactsIcon />,
    },
    {
      text: (
        <Link onClick={(e) => setToggle(false)} className={classes.link}>
          AboutUs
        </Link>
      ),
      icon: <InfoIcon />,
    },
    {
      text: (
        <Link onClick={(e) => setToggle(false)} className={classes.link}>
          {" "}
          Back{" "}
        </Link>
      ),
      icon: <ArrowBackTwoToneIcon />,
    },
    {
      text: (
        <Link onClick={handelLogOut} className={classes.link}>
          Logout
        </Link>
      ),
      icon: <BubbleChartTwoToneIcon />,
    },
  ];

  const logOut = () => {
    handelLogOut();
  };

  const singInSingOut = () => {
    if (user) {
      return (
        <Button onClick={logOut} variant="contained" color="primary">
          <Link to="/" className={classes.signIn}>
            Log out
          </Link>
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          className={classes.singinBtn}
        >
          <Link to="/login" className={classes.signIn}>
            Sign In
          </Link>
        </Button>
      );
    }
  };

  const NavBar = () => {
    if (user) {
      return (
        <div className={classes.wrapper}>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={(e) => setToggle(true)}
              >
                <MenuIcon className={classes.meniIcon} />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.typograf}
              ></Typography>
              <Avatar
                alt="Bricole"
                src="/image/TITLOGA-1.png"
                className={classes.bricole}
              />
            </Toolbar>
          </AppBar>

          {/* Drawer */}
          <MUIDrawer open={toggle} anchor={"top"}>
            <List>
              {ItemList.map((item, index) => {
                const { text, icon } = item;
                return (
                  <ListItem button key={text}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          </MUIDrawer>
        </div>
      );
    } else {
      return (
        <div className={classes.wrapper}>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.typograf}>
              <Avatar
                alt="Bricole"
                src="/image/TITLOGA-1.png"
                className={classes.bricole}
              />

              {singInSingOut()}
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  };

  return <div>{NavBar()}</div>;
}

export default Navbar;
