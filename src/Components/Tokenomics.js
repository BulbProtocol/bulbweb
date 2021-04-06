import React, { Component } from "react";

class Tokenomics extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="tokenomics">
        <div className="row title">
        </div>
        <div className="row description">
          <img src="/images/hodltext.png" alt="Hodl" />
          <img src="/images/tokenomics.png" alt="tokenomics" />
        </div>
      </section>
    );
  }
}

export default Tokenomics;
