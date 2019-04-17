import React, { Component } from 'react';
import './overview.css';
import coin from '../../coindata.json';

import Head from './Head'
import StatsTable from './StatsTable.jsx';
import Chart from './SampleChart.jsx';

class OverView extends Component {
    constructor() {
        super();
    
        this.state = {
            coin
        }
    
        setInterval(this.updateCoinData.bind(this), 1000);
    }

    updateCoinData() {

    }
  
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

      render() {
    
        const { coin } = this.state;
    
        console.log(coin)
    
        Object.keys(coin).forEach(attr => {
        const value = coin[attr];
    
        if (typeof value === 'number') {
            coin[attr] = this.formatNumber(value);
        }
        });
    
        return (
            <div className="overview-container">
                <Head coin={coin}/>
                <StatsTable coin={coin} />
                <Chart />
            </div>
        );
      }
}

export default OverView