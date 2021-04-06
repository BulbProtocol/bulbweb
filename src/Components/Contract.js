import React, { Component } from "react";

class Contract extends Component {
  render() {

    return (
      <section id="contract">
        <div className="row">
          <div className="three columns header-col">
            <img src="/images/bulb2.jpg" alt="bulb " />
          </div>
          <div class="nine columns main-col">
            <span>BULB is a deflationary Auto-Stake protocol.</span>
            <span className="title">When you hold $BULB, you will always be rewarded. </span>
            <span className="desc">This means you earn more tokens just for keeping $ BULB in your wallet, when someone makes a transaction (buy or sell) 2% is distributed to all holders.</span>
            <span className="title">Long-term stable. </span>
            <span className="desc">The deflationary protocol is in the long run one of the greatest advantages, since with each operation, 2% is also burned, fewer tokens in circulation, greater value of the token.</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Contract;
