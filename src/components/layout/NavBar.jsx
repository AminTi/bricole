import React, { useState, useContext } from "react";

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

  const ClickHandler = () => {
    history.push("/login");
  };

  const singInSingOut = () => {
    if (user) {
      return <Button onClick={handelLogOut}>logout</Button>;
    } else {
      return <Button onClick={ClickHandler}>SingIn</Button>;
    }
  };
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
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        {singInSingOut()}
      </MUIDrawer>
    </div>
  );
}

export default Navbar;
