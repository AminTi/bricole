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

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Dashboard} />

        <Route path="/Login" component={Login} />
        <Route path="/UserPage" component={UserPage} />
        <Route path="/profil" component={Profil} />
        <Route path="/SingUp" component={SingUp} />
        <Route path="/ProfilDisabled" component={ProfilDisabled} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
