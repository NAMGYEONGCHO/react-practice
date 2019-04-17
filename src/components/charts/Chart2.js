// Based on: https://www.highcharts.com/stock/demo/basic-line

import React, { Component } from 'react';

import { Alert } from 'reactstrap';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official'

var
  names = ['MSFT', 'AAPL', 'GOOG'];

async function fetchChartData() {
  const seriesOptions = await Promise.all(names.map(async company => {
      const resp = await fetch('http://localhost:4000/highchartSampleData/' + company);
      const data = await resp.json();
      return {
        name: company,
        data
      };
    }));

  return {
    rangeSelector: {
      selected: 4
    },

    yAxis: {
      labels: {
        formatter: function () {
          return (this.value > 0 ? ' + ' : '') + this.value + '%';
        }
      },
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver'
      }]
    },

    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true
      }
    },

    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true
    },

    series: seriesOptions
  };
}

export default class Chart2 extends Component {
  state = { options: null }

  async componentDidMount() {
    try {
      const options = await fetchChartData();
      this.setState({ options });
    }
    catch (err) {
      console.error(err.stack);
      this.setState({error: err});
    }
  }

  renderError = () => {
    const { error } = this.state;
    if (error) {
      return <Alert color="danger">{error.message}</Alert>
    }
    return '';
  }

  renderChart() {
    const { options } = this.state;
    if (!options) {
      return 'loading...';
    }

    return (<>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </>);
  }

  render() {
    return (<>
      {this.renderError()}
      {this.renderChart()}
    </>);
  }
}