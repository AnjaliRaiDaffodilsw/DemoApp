import React from 'react'
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Tooltip,
} from "recharts";

import GraphData from '../../../lib/GraphData';
import './BarGraph.css';

const BarGraph = () => {
  return (
    <>
      <h1 className="bar-graph-heading">Social Media Users Bar-Graph</h1>
      <div className="bar-graph">
        <BarChart
          width={500}
          height={300}
          data={GraphData}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3"
          />
          <Bar
            dataKey="usersCount"
            fill="#8884d8"
            background={{ fill: "#FF7300" }}
          />
        </BarChart>
      </div>
    </>
  )
}

export default BarGraph;
