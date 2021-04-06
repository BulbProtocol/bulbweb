import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://twitter.com/BulbProtocol" alt="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
              <li><a href="" alt="Telegram"><img src="/images/telegram.png" alt="" target="_blank" /></a></li>
              <li><a href="https://medium.com/@BulbProtocol" alt="Medium" target="_blank"><img src="/images/medium.png" alt="" /></a></li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 BULB Protocol</li>
              
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
