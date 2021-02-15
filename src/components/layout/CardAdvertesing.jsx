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
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red,
  },
}));

function CardAdvertesing({ currentUserAds }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { user, getCollection, profilData } = useContext(UserContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {}, []);
  // console.log(profilData);

  // console.log(currentUserAds);

  return (
    <Container className={classes.wrapper} maxWidth="m">
      {currentUserAds.map((item, index) => {
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
            <CardMedia className={classes.media} image={item.avatar} title="" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
}

export default CardAdvertesing;
