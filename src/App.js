import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import About from "./components/About";
import OpenSource from "./components/OpenSource";
import Projects from "./components/Projects";
import Footer from "./Footer";
import Layout from "./layouts/layout";
import Home from "./components/Home";

function App() {
  return (
    <Layout />
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/" component={About} />
    //     <Route exact path="/open-source" component={OpenSource} />
    //     <Route exact path="/projects" component={Projects} />
    //   </Switch>
    //   <Footer />
    // </Router>
  );
}

export default App;
