import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Drawer as MUIDrawer, List } from "@material-ui/core";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router";

import InboxIcon from "@material-ui/icons/MoveToInbox";
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
}));

function Navbar() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const { user, handelLogOut } = useContext(UserContext);
  const history = useHistory();

  const logOut = () => {
    handelLogOut();
    console.log(user);
  };

  const test = () => {
    console.log(user);
  };

  const singInSingOut = () => {
    if (user) {
      return (
        <Button onClick={logOut}>
          <Link to="/Dashboard"> LogOut </Link>
        </Button>
      );
    } else {
      return (
        <Button>
          <Link to="/login" onClick={test}>
            {" "}
            SingIn
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
              <Typography variant="h6" className={classes.title}>
                Bricole
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>

          {/* Drawer */}
          <MUIDrawer open={toggle} anchor={"top"}>
            <ArrowBackTwoToneIcon onClick={(e) => setToggle(false)} />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>

                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            {singInSingOut()}
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
