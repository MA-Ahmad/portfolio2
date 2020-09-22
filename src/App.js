import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import About from "./components/About";
import OpenSource from "./components/OpenSource";
import Blog from "./components/Blog";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/open-source" component={OpenSource} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
