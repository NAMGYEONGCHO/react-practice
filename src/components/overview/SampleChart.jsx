import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, SplineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';
// import data from 'data.json';
import Moment from 'react-moment';
import 'moment-timezone';

class SampleChart extends Component {

  constructor(props) {
    super(props);

    const now = Date.now();
   console.log(new Date('2019-02-23').getTime());
   

  
   
    this.state = {
      //data1: [['2019-01-02', 2.3], ['2019-01-03', 3.3], ['2019-01-04', 5.3], ['2019-01-05', 5.3], ['2019-01-06', 5.3], ['2019-01-07', 5.3], ['2019-01-08', 5.3], ['2019-01-09', 5.3], ['2019-10-04', 5.3], ['2019-11-04', 5.3], ['2019-12-04', 5.3]],
      //data2: [['2019-01-02', 2.3], ['2019-01-03', 3.3], ['2019-01-04', 5.3], ['2019-01-05', 5.3], ['2019-01-06', 5.3], ['2019-01-07', 5.3], ['2019-01-08', 5.3], ['2019-01-09', 5.3], ['2019-10-04', 5.3], ['2019-11-04', 5.3], ['2019-12-04', 5.3]]
      data1: [[1267315200000, 2.3], [1267415200000, 5.3], [1267515200000, 3.3], [1267615200000, 5.3], [1267715200000, 3.3], [1267815200000, 5.3], [1267915200000, 3.3]],
      data2: [[1267315200000, 3.3], [1267415200000, 7.3], [1267515200000, 8.3]]
      //data1: [1267315200000, 1267415200000, 1267515200000, 1167515200000],
      //data2: [1267315200000, 1267415200000, 1267515200000, 1247515200000]
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
            <Legend.Title>Key</Legend.Title>
          </Legend>

          <RangeSelector>
            <RangeSelector.Button count={1} type="day">1d</RangeSelector.Button>
            <RangeSelector.Button count={7} type="day">7d</RangeSelector.Button>
            <RangeSelector.Button count={1} type="month">1m</RangeSelector.Button>
            <RangeSelector.Button type="all">All</RangeSelector.Button>
            <RangeSelector.Input boxBorderColor="#7cb5ec" />
          </RangeSelector>

          <Tooltip />

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Price</YAxis.Title>
            <AreaSplineSeries id="profit" name="Profit" data={data1} />
          </YAxis>

          <YAxis opposite>
            <YAxis.Title>Social Buzz</YAxis.Title>
            <SplineSeries id="twitter" name="Twitter mentions" data={data2} />
          </YAxis>

          <Navigator>
            <Navigator.Series seriesId="profit" />
            <Navigator.Series seriesId="twitter" />
          </Navigator>
        </HighchartsStockChart>
      </div>
    );
  }
}

export default withHighcharts(SampleChart, Highcharts);