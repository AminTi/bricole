import "./App.css";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import UserPage from "./components/UserPage";

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
        <Route path="/CreateUser" exact component={CreateUser} />
        <Route path="/Login" exact component={Login} />
        <Route path="/UserPage" exact component={UserPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
