import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer
} from 'recharts';

function renderTooltip() {
  return (
  <div>Custom content</div>
  )
}
// TO DO 
// CUSTOMIZE THIS

export default function MultiSeries (props){
    return (
      <ResponsiveContainer width="99%" height="99%">
      <LineChart
          margin={{top: -5, right: 20, left: -10, bottom: -5,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" allowDuplicatedCategory={false} 
        tick={{fontSize: 8}}/>
        <YAxis dataKey="y" 
        tick={{fontSize: 8}}/>
        <Tooltip content={renderTooltip()}/>
        {props.series.map(s => ( 
        <Line dataKey="y" data={s.data} name={s.name} key={s.name}/>
      ))
      }
      </LineChart>
      </ResponsiveContainer>
    );
  }


// colors should be passed in by props