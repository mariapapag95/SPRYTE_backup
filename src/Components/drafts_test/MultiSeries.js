import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'A', value: 4 },
      { category: 'B', value: 2 },
      { category: 'C', value: 3 },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 'B', value: 5 },
      { category: 'C', value: 6 },
      { category: 'D', value: 1 },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 'C', value: 3 },
      { category: 'D', value: 1 },
      { category: 'E', value: 2 },
    ],
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/ewcqxbwo/';

  render() {
    return (
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {series.map(s => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    );
  }
}