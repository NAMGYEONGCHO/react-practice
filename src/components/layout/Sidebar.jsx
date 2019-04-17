import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import watchListImage from '../../resource/img/watchlist.png';

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
                        <Link to='/watch-list' className="watch-list">Watch list</Link>
                        <Link to='/port-folio' className="port-folio">Portfolio</Link>
                        <Link to='/news-feed' className="news-feed">News feed</Link>
                    </div>
                </div>
                
                <div>
                    <div className="card-content white-text">
                    <span className="card-title">DISCOVER</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <Link to='/trade-markets' className="trade-markets">Trade Markets</Link>
                        <Link to='/copy-peopled' className="copy-peopled">Copy people</Link>
                        <Link to='/invest' className="invest">Invest in CopyPortfolio</Link>
                    </div>
                </div>

                <div>
                    <div className="card-content white-text">
                    <span className="card-title">MORE</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <Link to='/club' className="club">MXC club</Link>
                        <Link to='/invite' className="invite">Invite friend</Link>
                        <Link to='/help' className="help">Help</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar