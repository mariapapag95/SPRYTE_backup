import React from 'react'
import {FlexibleXYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineMarkSeries, LineSeries} from 'react-vis';


function LineChart(props) {
    return(
        <FlexibleXYPlot
            xType="time">
            <HorizontalGridLines 
                style ={{stroke : "#f0f0f0"}}/>
            <VerticalGridLines 
                style ={{stroke : "#f0f0f0"}}/>
            <XAxis 
                style ={{text: {fontSize: 8}}}/>
            <YAxis 
                style ={{text: {fontSize: 8}}}/>
            <LineMarkSeries
                data={props.data}
                style={{strokeLinejoin: "round", fill: "none"}}
                />
        </FlexibleXYPlot>
    )
}

export default LineChart;