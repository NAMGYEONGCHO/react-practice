import React, { Component } from 'react'

//import watchListImage from '../../resource/img/watchlist.png';
import port from '../../resource/img/portfolio.png';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidemenu card blue-grey darken-1">
                <div>
                    <div className="card-content white-text">
                    <span className="card-title">TRADE</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#" className="watch-list">Watch list</a>
                        <a href="#" className="port-folio">Portfolio</a>
                        <a href="#" className="news-feed">News feed</a>
                    </div>
                </div>
                
                <div>
                    <div className="card-content white-text">
                    <span className="card-title">DISCOVER</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#" className="trade-markets">Trade Markets</a>
                        <a href="#" className="copy-peopled">Copy people</a>
                        <a href="#" className="invest">Invest in CopyPortfolio</a>
                    </div>
                </div>

                <div>
                    <div className="card-content white-text">
                    <span className="card-title">MORE</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#" className="club">MXC club</a>
                        <a href="#" className="invite">Invite friend</a>
                        <a href="#" className="help">Help</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar