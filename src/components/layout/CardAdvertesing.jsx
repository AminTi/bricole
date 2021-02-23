import React, { useState, useContext, useEffect, useRef } from "react";
import EmailModal from "./EmailModal";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
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
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "10px 10px",
    // justifyContent: "center",
  },
  root: {
    width: "345px",
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
    objectFit: "contain",
  },
  DetailsIcon: {
    color: "blue",
    zIndex: 1000,
  },
  price: {
    color: "green",
  },
  Typography: {
    display: "flex",
    flexDirection: "column",
  },
}));

function CardAdvertesing({
  currentUserAds,
  allUsersAds,
  currentProfil,
  homePageUser,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [userData, setUserData] = useState("");

  const {
    user,
    getCollection,
    userCollection,
    profilData,
    deleteData,
    getDataAds,
  } = useContext(UserContext);

  const DeleteHandler = async (e) => {
    const id = e.currentTarget.getAttribute("data-del");
    if (id) {
      await deleteData(id, "advertising");
      await getDataAds();
    }
  };

  const idHandler = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    id && getCollection(id);
  };

  console.log(profilData && profilData);

  const DisplayCard = () => {
    if (currentUserAds) {
      return (
        <Container className={classes.wrapper} maxWidth="m">
          {currentUserAds.map((item, index) => {
            return (
              <Card className={classes.root} key={index}>
                <CardHeader
                  title={item.profession}
                  subheader={currentProfil && currentProfil[0].Company}
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
                    className={classes.Typography}
                  >
                    <span
                      className={classes.price}
                    >{`${item.Price} Kr/tim`}</span>
                    {item.titel}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="More Details">
                    <Link
                      to={{
                        pathname: "/detailspage",
                        state: {
                          item,
                        },
                      }}
                    >
                      <DetailsIcon className={classes.DetailsIcon} />
                    </Link>
                  </IconButton>

                  <IconButton className={classes.expand}>
                    <DeleteIcon
                      data-del={item.adsId}
                      onClick={DeleteHandler}
                      className={classes.delete}
                    />
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
                  title={item.profession}
                  subheader={profilData && profilData.newdata.Company}
                />

                <CardMedia
                  className={classes.media}
                  image={item.avatar}
                  title={item.id}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.Typography}
                  >
                    <span
                      className={classes.price}
                    >{`${item.Price} Kr/tim`}</span>
                    {item.titel}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="More Details">
                    <Link
                      to={{
                        pathname: "/detailspage",
                        state: {
                          item,
                        },
                      }}
                      data-id={item.id}
                      onClick={idHandler}
                    >
                      <DetailsIcon className={classes.DetailsIcon} />
                    </Link>
                  </IconButton>

                  <IconButton aria-label="More Details">
                    <div>
                      <EmailModal
                        className={classes.DetailsIcon}
                        userId={item.id}
                      />
                    </div>
                  </IconButton>

                  <Button color="primary">
                    <Link to={`/bokamera/${item.id}/${item.Price}`}>
                      Reservation
                    </Link>
                  </Button>
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
