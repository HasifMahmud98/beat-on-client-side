import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Explore from "./Pages/Explore/Explore";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Reviews from "./Pages/Reviews/Reviews";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route path="/signin">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
