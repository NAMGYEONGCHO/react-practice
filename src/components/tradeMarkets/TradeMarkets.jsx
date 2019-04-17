import React, { Component } from 'react';
import './TradeMarkets.css';

class TradeMarkets extends Component {
    constructor() {
        super();

        const coins = [{
            name: 'BTC',
            value: '1000'
        }, {
            name: 'ETH',
            value: '120'
        }, {
            name: 'XRP',
            value: '1'
        }];

        this.state = {
            info: {},
            currentSlide: 1,
            slides: coins.length,
            coins
        }

        setInterval(() => {
            const { currentSlide, slides } = this.state;
            this.setState({
                currentSlide: currentSlide !== slides ? currentSlide + 1 : 1
            })
        }, 4000);
    }

    render() {
        const { currentSlide, coins } = this.state;

        const containerStyles = {
            width: coins.length / 1.20 * 100 + '%'
        };

        return (
            <div className="market-trade-container">
                Trade Markets
                <div className="slider" style={containerStyles}>
                    {coins.map((coin, index) => (
                        <div style={{ width: 100 / coins.length / 1.20 + '%', marginLeft: index === 0 ? -(currentSlide - 1) * (100 / coins.length / 1.20) + '%' : '' }}>
                            <div className="image-container">
                                <img src="..img/img.jpg" />
                            </div>
                            <div className="coin-slide-data">
                                <h3 className="coin">{coin.name}</h3>
                                <p className="coin-price">
                                    {coin.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TradeMarkets