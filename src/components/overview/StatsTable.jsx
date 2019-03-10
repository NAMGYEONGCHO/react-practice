
import React from 'react';

export default (props) => (
    <table className="coin-stats">
        <thead>
            <tr>
                <th>Mkt. Cap.</th>
                <th>Vol. 24H</th>
                <th>Open 24H</th>
                <th>Low/High 24H</th>
                <th>Last trade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$ {props.coin.marketCap}</td>
                <td>$ {props.coin.vol24H}</td>
                <td>$ {props.coin.open24H}</td>
                <td>$ {props.coin.loghigh}</td>
                <td>$ {props.coin.lasttrade}</td>
            </tr>
        </tbody>
    </table>
)