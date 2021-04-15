import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contract from "./Components/Contract";
import Tokenomics from "./Components/Tokenomics";
import Buy from "./Components/Buy";
import Roadmap from "./Components/Roadmap";
import Social from "./Components/Social";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <Contract />
        <Social />
        <Tokenomics />
        <Roadmap />
        <Buy />
        <Footer />
      </div>
    );
  }
}

export default App;
