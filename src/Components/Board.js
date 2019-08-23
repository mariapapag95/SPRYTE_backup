import React from 'react'
import Box from '@material-ui/core/Box';
import ProductNameInput from './ProductNames';
import CompareProductInput from './CompareProducts';
import IndicatorsDropDown from './Indicators';
import TemplatesDropDown from './TemplatesDropDown';
import VolumeChart from './VolumeChart'
import SecondaryChart from './SecondaryCharts'
import MultiSeries from './MultiSeries'
import '../App.css'

class Board extends React.Component {

    constructor(props) {
        super (props)
        this.state = {
            productName : "", // "value" needs to be passed in from ProductNameInput 
            compareProds : [], // "value" needs to be passed in from CompareProductInput
            indicators : [], // "value" needs to be passed in from IndicatorsDropDown
            secondaryChart : [], // "value" needs to be passed in from TemplatesDropDown
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
            test : [{x:1, y:6}, {x:2, y:2},{x:3, y:6},{x:4, y:7},{x:5, y:1},{x:6, y:6}, {x:7, y:2},{x:8, y:6},{x:9, y:7},{x:10, y:1},{x:11, y:6}, {x:12, y:2},{x:13, y:6},{x:14, y:7},{x:15, y:1},{x:16, y:6}, {x:17, y:2},{x:18, y:6},{x:19, y:7},{x:20, y:1}],
            data : [],
            volume: [],
            series : [],
            unit1Chart : false,
            unit2Chart : false
        }
    }

    componentDidMount() {
        // formats data for charts
        // produces a two pair dictionary with x and y as the keys, time and price as the values, respectively
        // {x : ___ , y : ___}
        // the .map function takes every date and assigns is to an x key, then converts it to a date in JS
        // ... takes every value and assigns it to a y key, the [i] assigns the same index value to the y value as the x value in the dictionary
        const data = this.state.dates.map((x, i) => 
                    ({x: new Date(x), y: this.state.values[i]}));
        this.setState({data:data})
        this.populate()
    }

    populate() {
        this.state.series.push({name: this.state.productName, data: this.state.test})
    }

    toggle1 = () => {
        this.setState({unit1Chart : !this.state.unit1Chart})
    }
    
    toggle2 = () => {
        this.setState({unit2Chart : !this.state.unit2Chart})
    }

    monthly() {
        let today = new Date()
        today.setDate(today.getDate() - 30);
        const range = [today, today.getDate() - 30]
        // console.log(range)
        // this.setState({dates:range})
    }

    bimonthly(){
        // TO DO 
    }
    
    trimester(){
        // TO DO
    }

    quarter(){
        // TO DO
    }
    semester(){
        // TO DO
    }

    year() {
        // TO DO 
    }

    all() {
        // TO DO 
    }

    render () { 
    return (
        <div className = "full"> 
            <div className = "flex-container">
                <div className = "flex-item0">
                    <Box display = "flex" flexDirection = "row" height = {50}>
                    <ProductNameInput/>
                    <CompareProductInput/>
                    <IndicatorsDropDown/>
                    <TemplatesDropDown/>
                    <button onClick={this.toggle1}>
                        UNIT 1 CHART TOGGLE
                    </button>
                    <button onClick={this.toggle2}>
                        UNIT 2 CHART TOGGLE
                    </button>
                    </Box>
                </div>
                <div className = "flex-item3">
                    <MultiSeries margin={0} series={this.state.series}/>
                </div>
                <div className = "flex-item1">
                    <VolumeChart volume={this.state.test}/>
                </div>
                {
                    this.state.unit1Chart ? 
                        <div className="flex-item2">
                            <SecondaryChart  margin={0} series={this.state.series}/> 
                        </div>
                        :
                        null
                    }
                {
                    this.state.unit2Chart ? 
                        <div className="flex-item2">
                            <SecondaryChart  margin={0} series={this.state.series}/> 
                        </div>
                        : 
                        null
                    }
                <div className = "flex-item0">
                    <Box display="flex" flexDirection="row" p={1} m={1} >
                        <button 
                            onClick = {this.monthly()}>M</button>
                        <button>B</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>Y</button>
                        <button>A</button>
                        <div className = "timebuttons">____</div>
                        <button>LINEAR</button>
                        <button>CYCLIC</button>
                    </Box>
                </div>
            </div>
        </div>
        )
    }
}

export default Board;