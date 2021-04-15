import React, { Component, useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import icon from "./icon.js";
import Countdown from 'react-countdown';
import GetPrices from '../web3.js'


 
 var  totalSupply = 0;

class Header extends Component {
  constructor() {
    super();
    this.state = { totalSupply: 0, priceBNB: 0, priceBUSD: 0, marketCap: 0, burned: 0 };
  }


  componentDidMount() {
    let web3 = new GetPrices('0xf32cba62514be085839c8ec426b4b13f24936764', '0xB73a495CE3576Dac67f6bfe61731c188dF8c74f6');
    web3.getContracts().then(result => {
      web3.getTotalSupply().then(result => { this.setState({ totalSupply: result }); });
      web3.getPrices().then(result => { 
        this.setState({ priceBNB: result[0], priceBUSD: result[1] }); }).then(r => {
          web3.getMarketCap().then(result => { this.setState({ marketCap: result }); }).then(mc => {
            web3.getBurned().then(b => {this.setState({ burned: b });})
          });
        });
    });
    
  }
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
                Information
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#social">
                Social Networks
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
              <a target="_blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xf32cba62514be085839c8ec426b4b13f24936764" className="button btn project-btn">
                <i className="fa fa-book"></i>Buy Now
              </a>
              <a target="_blank" href="https://poocoin.app/tokens/0xf32cba62514be085839c8ec426b4b13f24936764" className="button btn project-btn">
                <i className="fa fa-bar-chart-o"></i>Chart
              </a>
            </ul>
            <hr />
            <div className="stats">
              <span className="title">BULB Max Supply: </span>
              <span className="desc">200,000</span>
              <br />
              <span className="title">BULB Burned: </span>
              <span className="desc">{this.state.burned.toFixed(2)}</span>
              <br />
              <span className="title">BULB in circulation: </span>
              <span className="desc">{this.state.totalSupply.toFixed(2)}</span>
              <br />
              <span className="title">BULB Price BUSD: </span>
              <span className="desc">${this.state.priceBUSD.toFixed(4)}</span>
              <br />
              <span className="title">BULB Price BNB: </span>
              <span className="desc">${this.state.priceBNB.toFixed(4)}</span>
              <br />
              <span className="title">BULB Market Cap: </span>
              <span className="desc">${this.state.marketCap.toFixed(4)}</span>
            </div>
            {/* <span className="titleCountdown">Time to Launch</span> */}
            <br />
            <br />
            {/* <Countdown className="countdown" date={1618336800000} /> */}
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
