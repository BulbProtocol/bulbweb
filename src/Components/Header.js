import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import icon from "./icon.js";
import Countdown from 'react-countdown';

class Header extends Component {
  render() {
    let config = {
      num: [4, 7],
      rps: 0.5,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 6],
      tha: [-90, 90],
      alpha: [0.6, 0.5],
      scale: [.1, 0.9],
      body: icon,
      position: "all",
      //color: ["random", "#ff0000"],
      cross: "dead",
      random: 20
    };
    return (
      <header id="home">
        <ParticlesBg type="custom" config={config} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#contract">
                Contract
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#tokenomics">
              Tokenomics
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#roadmap">
                Roadmap
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#buynow">
                Buy Now!
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Bulb Protocol</h1>
            <h3>passive earnings for smart investors</h3>
            <hr />
            <ul className="social">
              <a target="_blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" className="button btn project-btn">
                <i className="fa fa-book"></i>Buy Now
              </a>
              <a target="_blank" href="https://poocoin.app/tokens/" className="button btn project-btn">
                <i className="fa fa-bar-chart-o"></i>Chart
              </a>
            </ul>
            <hr />
            <span className="titleCountdown">Time to Launch</span>
            <br />
            <br />
            <Countdown className="countdown" date={Date.now() + 100000000} />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#contract">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
