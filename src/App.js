import "./App.css";
import HomePage from "./components/homePage/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/register/Register";
import SignIn from "./components/signIn/SignIn";
import NotFound from "./components/notFound/NotFound";
import DashboardPage from "./components/dashboard/Dashboard";
import Home from "./components/Home/Home";
import React from "react";
import ChatRoom from "./components/chatPage/ChatPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:roomId/:email" component={ChatRoom} />

        <Route path="/register" exact component={Register} />
        <Route path="/sign-in" exact component={SignIn} />
        {/* <Route path='/logged/:id'exact component={ChatPage} /> */}
        {/* <Route path='/dashboard' exact component={DashboardPage} /> */}

        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
