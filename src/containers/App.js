import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Form from "../components/form/Form";
import About from "../components/about/About";
import AddedFiles from "../components/form/AddedFiles";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/form" component={Form}/>
          <Route path="/added_files" component={AddedFiles}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
