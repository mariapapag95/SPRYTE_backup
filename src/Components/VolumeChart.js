import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Brush, ResponsiveContainer} from 'recharts';


function renderTooltip() {
        return (
        <div>Custom content</div>
        )
    }
    // TO DO 
    // CUSTOMIZE THIS


export default function VolumeChart(props) {
    return (
        <ResponsiveContainer width="99%" height="99%">
        <BarChart
            data={props.volume}
            margin={{top: -5, right: 20, left: -10, bottom: -5,}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" tick={{fontSize: 8}}/>
            <YAxis tick={{fontSize: 8}}/>
            <Tooltip content={renderTooltip()}/>
            <ReferenceLine y={0} stroke="#000" />
            {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
            <Bar dataKey="y" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    );
}