import React, { Component } from 'react'

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
                        <a href="#" className="watch-list">Watch list</a>
                        <a href="#">Portfolio</a>
                        <a href="#">News feed</a>
                    </div>
                </div>
                
                <div>
                    <div className="card-content white-text">
                    <span className="card-title">DISCOVER</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Trade Markets</a>
                        <a href="#">Copy people</a>
                        <a href="#">Invest in CopyPortfolio</a>
                    </div>
                </div>

                <div>
                    <div className="card-content white-text">
                    <span className="card-title">MORE</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">MXC club</a>
                        <a href="#">Invite friend</a>
                        <a href="#">Help</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar