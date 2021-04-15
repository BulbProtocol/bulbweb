import React, { Component } from "react";
import getTwitterFollowers from 'get-twitter-followers';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Social extends Component {
    constructor() {
        super();
        this.state = { amountTwitter: 10, amountTelegram: 15, amountReddit: 12};
      }
    componentDidMount() {
        /*getTwitterFollowers(tokens, 'BulbProtocol').then(followers => {
            this.setState({amountTwitter: followers });}
        );      */  
    }
  render() {

    return (
      <section id="social">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <ul>
                  <li>
                    <img src="/images/twitterL.png" alt="twitter" />
                    <br />
                    <br />
                    <span className="title">{this.state.amountTwitter}</span>
                    <br />
                    <span className="desc">twitter followers</span>
                    <br />
                    <br />
                  </li>
                  <li>
                    <img src="/images/telegramL.png" alt="telegram" />
                    <br />
                    <br />
                    <span className="title">{this.state.amountTelegram}</span>
                    <br />
                    <span className="desc">telegram followers</span>
                    <br />
                    <br />
                  </li>
                  <li>
                    <img src="/images/redditL.png" alt="reddit" />
                    <br />
                    <br />
                    <span className="title">{this.state.amountReddit}</span>
                    <br />
                    <span className="desc">reddit followers</span>
                  </li>
              </ul>
            </div>

            <div className="ten columns flex-container">
                <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="BulbProtocol"
                            options={{height: 640}}
                            />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Social;