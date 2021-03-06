import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Fab,
  TextField,
  Button,
  Box,
  setRef,
} from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
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
import DetailsIcon from "@material-ui/icons/Details";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 1200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 10px",
  },
  root: {
    width: "90%",
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
    backgroundColor: red[500],
  },
  price: {
    color: "green",
  },
  title: {
    color: "black",
  },
}));

function DetailsPage(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { profilData, getDataAds, getCollection, ads } = useContext(
    UserContext
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currentAdsid = props.match.params.adsid;
  const userid = props.match.params.userid;

  const userAds =
    ads &&
    ads.filter((elm) => {
      return elm.adsId == currentAdsid && currentAdsid;
    });

  const getuser = async () => {
    if (userid) {
      await getCollection(userid);
    }
  };

  useEffect(() => {
    getuser();
    getDataAds();
  }, []);

  const displayContent = () => {
    if (userAds && profilData) {
      return (
        <Card className={classes.root}>
          <CardHeader
            title={userAds && userAds[0].profession}
            // subheader={profilData && profilData.newdata.Company}
          />
          <CardMedia
            className={classes.media}
            image={userAds && userAds[0].avatar}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Box className={classes.price}>{`${
                userAds && userAds[0].Price
              } :-`}</Box>
              <Box className={classes.title}>
                <h3> {userAds && userAds[0].titel} </h3>
              </Box>
              <Box>{userAds && userAds[0].description}</Box>
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
            ></IconButton>
          </CardActions>
        </Card>
      );
    }
  };

  return (
    <Container className={classes.container}>{displayContent()}</Container>
  );
}

export default DetailsPage;
