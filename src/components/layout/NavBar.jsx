import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Drawer as MUIDrawer, List } from "@material-ui/core";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router";

import MailIcon from "@material-ui/icons/Mail";

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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ffa600",
    fontWeight: "bold",
    fontSize: "30px",
  },
  appbar: {
    background: "white",
  },
  wrapper: {
    height: "10%",
    background: "red",
  },
  meniIcon: {
    color: "black",
  },
  link: {
    textDecoration: " none",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const { user, handelLogOut, getCollection, profilData } = useContext(
    UserContext
  );
  const history = useHistory();

  const ItemList = [
    {
      text: (
        <Link to="/" className={classes.link}>
          Home
        </Link>
      ),
      icon: <DashboardIcon />,
    },

    {
      text: (
        <Link
          to="profilDisabled"
          className={classes.link}
          onClick={getCollection}
        >
          Profil
        </Link>
      ),
      icon: <AccountCircleIcon />,
    },
    {
      text: (
        <Link to="/UserPage" className={classes.link}>
          Dashboard
        </Link>
      ),
      icon: <DashboardIcon />,
    },

    {
      text: "Inbox",
      icon: <MailIcon />,
    },
    {
      text: "Contacts",
      icon: <ContactsIcon />,
    },
    {
      text: "AboutUs",
      icon: <InfoIcon />,
    },
    {
      text: "Back",
      icon: <ArrowBackTwoToneIcon onClick={(e) => setToggle(false)} />,
    },
  ];

  const logOut = () => {
    handelLogOut();
  };

  const singInSingOut = () => {
    if (user) {
      return (
        <Button onClick={logOut}>
          <Link to="/"> Log out </Link>
        </Button>
      );
    } else {
      return (
        <Button>
          <Link to="/login"> Sign In</Link>
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
              <Typography variant="h6" className={classes.title}>
                Bricole
              </Typography>

              <Button color="inherit">Login</Button>
              {singInSingOut()}
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
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Bricole
              </Typography>
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

{
  /* <InboxIcon />
                    <AccountCircleIcon />
                    <MailIcon />
                    <ContactsIcon />
                    <InfoIcon /> */
}
