import "./App.css";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import SingUp from "./components/SingUp";
import Dashboard from "./components/Dashboard";

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        {/* <Route path="/CreateUser" component={CreateUser} /> */}
        <Route path="/Login" component={Login} />
        <Route path="/UserPage" component={UserPage} />
        <Route path="/SingUp" component={SingUp} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
