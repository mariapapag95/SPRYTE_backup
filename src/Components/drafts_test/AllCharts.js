import React from 'react'
import LineChart from '../MainChart'
import BarChart from './VolumeChart'
import SecondaryChart from './SecondaryChart'
import SeriesTitle from '../SeriesTitle'

export default class AllCharts extends React.Component {

constructor(props) {
  super (props)
  this.state = {
    productName : undefined,
    compareProds : [],
    indicators : [],
    secondaryChart : [],
    seriesColor: 'red', // test
    barColor: 'purple', // test 
    dates : ["04/14/2017 05:00:00",
      "04/13/2017 05:00:00",
      "04/13/2017 05:00:00",
      "04/13/2017 05:00:00",
      "04/13/2017 05:00:00",
      "04/12/2017 06:00:00",
      "04/12/2017 05:00:00",
      "04/12/2017 05:00:00",
      "04/12/2017 05:00:00",
      "04/12/2017 05:00:00"],
    values : [351,
      354,
      355,
      356,
      353,
      350,
      350,
      350,
      357,
      357],
    data : undefined,
    test : [{x:1, y:6}, {x:2, y:2},{x:3, y:6},{x:4, y:7},{x:5, y:1},{x:6, y:6}, {x:7, y:2},{x:8, y:6},{x:9, y:7},{x:10, y:1},{x:11, y:6}, {x:12, y:2},{x:13, y:6},{x:14, y:7},{x:15, y:1},{x:16, y:6}, {x:17, y:2},{x:18, y:6},{x:19, y:7},{x:20, y:1}],
  }
}

// AJAX call to API 
// pass in data from time selection buttons --> will setState of dates
// pass in data from drop down menus (product name, compare products, indicators) --> will setState of each
// this.state of product name, compare products, indicators determines AJAX call

componentDidMount() {
  // formats data for charts
  // produces a two pair dictionary with x and y as the keys, time and price as the values, respectively
  // {x : ___ , y : ___}
  // the .map function takes every date and assigns is to an x key, then converts it to a date in JS
  // ... takes every value and assigns it to a y key, the [i] assigns the same index value to the y value as the x value in the dictionary
  const data = this.state.dates.map((x, i) => 
                ({x: new Date(x), y: this.state.values[i]}));
            console.log(data)
  this.setState({data:data}) 
}

componentDidUpdate() {
  // TO DO
}

render () { 
  // having trouble determining where to insert <SeriesTitle> since the charting library creates the chart component
  // but it should be in the chart component so that it can share a state with the rendering of the charts
    if (this.state.secondaryChart === true)
    {return (
        <div>
          <SeriesTitle name="test"/>
        <div class="panels">
            <div class="panel">
              <div>
                <LineChart data={this.state.data} seriesColor = {this.state.seriesColor}/>
              </div>
            </div>
            <div class="panel">
              <div>
              <BarChart  data={this.state.test}/>
              </div>
            </div>
            <div class="panel">
            <div>
              <SecondaryChart visible = {this.state.secondaryChart}/>
            </div>
          </div>
          </div>
          </div>
    )}
    else {return (
        <div>
        <div class="panels">
            <div class="panel">
              <div>
                <LineChart data={this.state.data}/>
              </div>
            </div>
            <div class="panel">
              <div>
              <BarChart  data={this.state.test}/>
              </div>
            </div>
          </div>
          </div>
    );}
}
}