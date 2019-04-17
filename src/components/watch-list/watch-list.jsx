import React, { Component } from 'react';
import Searchbar from './Searchbar'
import './watch-list.css';
import CoinExchange from '../CoinExchange/CoinExchange';
import Chart2 from '../charts/Chart2'

class WatchList extends Component {
    constructor() {
        super();

        this.state = {
            
        }
       
    }

    render() {
        //const { currentSlide, coins } = this.state;

        return (
            <div className="watch-list-container">
               <Searchbar />
               <div className="container">
                    <CoinExchange />
               </div>
               <Chart2 />
            </div>
        );
    }
}

export default WatchList