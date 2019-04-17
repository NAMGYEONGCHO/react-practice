import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, LineSeries, SplineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';
// import data from 'data.json';
//import Moment from 'react-moment';
import DateRangePickers from 'react-jsx-highstock-datepickers'
import 'moment-timezone';

class SampleChart extends Component {

  constructor() {
    super();
    const d = new Date(2018, 0, 1);
    d.setDate(d.getDate() + 1); 

    //console.log(new Date(2019, 12, 3).getTime());
    const data1 = [];
    const data2 = [];

    for(let i = 0; i < 300; i++){
      d.setDate(d.getDate() + 1);
      data1.push([d.getTime(), parseFloat((Math.random() * (9.99 - 0.01)).toFixed(2))]);
      data2.push([d.getTime(), parseFloat((Math.random() * (9.99 - 0.01)).toFixed(2))]);
    }
    
    // Init dummy data 
    this.state = {
      data1,
      data2
    };
  }

  render() {
    const { data1, data2 } = this.state;
   
    return (
      <div className="chart container">

        <HighchartsStockChart>
          <Chart zoomType="x" />

          <Title> Historical Price Chart </Title>

          <Legend>
            <Legend.Title>coins</Legend.Title>
          </Legend>

          <RangeSelector>
            <RangeSelector.Button count={1} type="day">1d</RangeSelector.Button>
            <RangeSelector.Button count={7} type="day">7d</RangeSelector.Button>
            <RangeSelector.Button count={1} type="month">1m</RangeSelector.Button>
            <RangeSelector.Button type="all">All</RangeSelector.Button>
            <RangeSelector.Input boxBorderColor="#7cb5ec" DateFormat="%Y-%m-%d"/>
            {/* <DateRangePickers axisId="xAxis" /> */}
          </RangeSelector>

          <Tooltip />

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Price(EURO)</YAxis.Title>
            <LineSeries id="mxc" name="mxc" data={data1} />
          </YAxis>

          <YAxis opposite>
            <YAxis.Title>Price(USD)</YAxis.Title>
            <LineSeries id="btc" name="btc" data={data2} />
          </YAxis>

          <Navigator>
            <Navigator.Series seriesId="mxc" />
            <Navigator.Series seriesId="btc" />
          </Navigator>

        </HighchartsStockChart>
      </div>
    );
  }
}

export default withHighcharts(SampleChart, Highcharts);