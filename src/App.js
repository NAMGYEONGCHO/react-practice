import React, { Component } from 'react';
import Sidebar from './components/layout/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import OverView from './components/overview/OverView'
import TradeMarkets from './components/tradeMarkets/TradeMarkets'
import NewsFeed from "./components/news-feed/news-feed";
//import CopyPeople from './components/copy-people/';
import WatchList from './components/watch-list/watch-list';
import PortFolio from './components/port-folio/port-folio';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import './components/overview/overview.css';
import "mdbreact/dist/css/mdb.css";


class App extends Component {

  /* constructor() {
    super();

    this.state = {
        coin
    }

    setInterval(this.updateCoinData.bind(this), 1000);
  } */

  

  render() {
    
    /* const { coin } = this.state;

    console.log(coin)

    Object.keys(coin).forEach(attr => {
    const value = coin[attr];

    if (typeof value === 'number') {
        coin[attr] = this.formatNumber(value);
    }
    }); */

    return (
      <BrowserRouter>
        <div className="app">
          <div className="overview-container">
            <div className="row">
              {/* Coin data */}
              <div className="col s12 m3 no-pading-right">
                <Sidebar />
              </div>
              <div className="col s12 m9 no-pading-left">
                <Switch>
                  <Route path='/' exact component={ OverView } />
                  <Route path='/trade-markets' component={ TradeMarkets } />
                  <Route path='/watch-list' component={ WatchList } />
                  <Route path='/port-folio' component={ PortFolio } />
                  <Route path='/news-feed' component={ NewsFeed } />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

// export default withHighcharts(App, Highcharts);
export default App;