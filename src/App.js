import "./App.css";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Login from "./components/Login";
import UserPage from "./components/user/UserPage";
import SingUp from "./components/SingUp";
import Dashboard from "./components/Dashboard";
import Profil from "./components/user/Profil";
import ProfilDisabled from "./components/user/ProfilDisabled";
import DetailsPage from "./components/DetailsPage";
import Inbox from "./components/user/Inbox";
import DisplayEmails from "./components/user/DisplayEmails";
import BokaMera from "./components/BokaMera";
import Orderpage from "./components/OrderPage";
import Bookings from "./components/user/Bookings";
import BookingDetails from "./components/BookingDetails";

const useStyles = makeStyles({
  test: {
    minHeight: 1000,
    // backgroundColor: "rgb(240, 245, 251)",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.test}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />

          <Route path="/Login" component={Login} />
          <Route path="/UserPage" component={UserPage} />
          <Route path="/profil" component={Profil} />
          <Route path="/SingUp" component={SingUp} />
          <Route path="/ProfilDisabled" component={ProfilDisabled} />
          <Route path="/detailspage/:userid/:adsid" component={DetailsPage} />
          <Route path="/inbox" component={Inbox} />
          <Route path="/displayemails/:slug" component={DisplayEmails} />
          <Route path="/bokamera/:slug/:price" component={BokaMera} />
          <Route path="/orderpage/:slug" component={Orderpage} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/bookingdetails/:slug" component={BookingDetails} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
