import React from 'react'

export default (props) => (
    <div>
        <div className="card horizontal">
            <div className="coin-logo">
                <img src={props.coin.logo} alt={props.coin.name} />
            </div>
            <div className="coin-details">
                <h1 className="coin-name">
                    {props.coin.token}
                    <span className="coin-full-name">{props.coin.name}</span>
                </h1>
                <h4 className="coin-price">
                    $ {props.coin.price}
                    <span className="price-variation">
                        {props.coin.priceVariation} ({props.coin.priceVariationPercentage}%)
                    </span>
                </h4>
            </div>
            <button className="trade-button">Trade</button>
        </div>
    </div>
)