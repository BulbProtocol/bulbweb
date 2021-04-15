import React, { Component } from "react";
import Zmage from "react-zmage";

let id = 0;
class Roadmap extends Component {
  render() {

    return (
      <section id="roadmap">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>ROADMAP</h1>

            <div id="portfolio-wrapper" className="image bgrid-quarters s-bgrid-thirds cf">
              <img src="/images/roadmap2.png" alt="roadmap" width="80%" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Roadmap;
