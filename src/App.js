import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Students from "./pages/Students";
import Learn from "./pages/Learn";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Students} />
          <Route path="/learn" component={Learn} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
