import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab, TextField, Button, Box } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import { ReportRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "10px 10px",
    justifyContent: "center",
  },
  root: {
    maxWidth: 345,
    margin: "1% 1%",
    backgroundColor: " #f7f0f0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red,
  },
  delete: {
    color: " red",
  },
}));

function CardAdvertesing({ currentUserAds, allUsersAds }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { user, getCollection, profilData } = useContext(UserContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(profilData);
  const DisplayCard = () => {
    if (currentUserAds) {
      return (
        <Container className={classes.wrapper} maxWidth="m">
          {currentUserAds.map((item, index) => {
            return (
              <Card className={classes.root} key={index}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {/* {.slice(0, 1)} */}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.titel}
                  subheader={`Price ${item.Price}`}
                />
                <CardMedia
                  className={classes.media}
                  image={item.avatar}
                  title=""
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button color="primary">More Details</Button>

                  <IconButton className={classes.expand}>
                    <DeleteIcon className={classes.delete} />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </Container>
      );
    } else if (allUsersAds) {
      return (
        <Container className={classes.wrapper} maxWidth="m">
          {allUsersAds.map((item, index) => {
            return (
              <Card className={classes.root} key={index}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {/* .slice(0,1); */}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.titel}
                  subheader={`Price ${item.Price}`}
                />
                <CardMedia
                  className={classes.media}
                  image={item.avatar}
                  title=""
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button variant="contained" color="primary">
                    More Details
                  </Button>
                  <Button color="primary">Reservation</Button>
                </CardActions>
              </Card>
            );
          })}
        </Container>
      );
    }
  };
  return <> {DisplayCard()} </>;
}

export default CardAdvertesing;
