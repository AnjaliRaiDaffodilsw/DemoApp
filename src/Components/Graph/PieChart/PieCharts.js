import React from 'react'
import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

import GraphData from '../../../lib/GraphData';
import './PieCharts.css';

const PieCharts = () => {

  return (
    <>
      <h1 className="pie-chart-heading">Social Media Users PieChart</h1>
      <div className="pie-chart">
        <PieChart width={730} height={350}>
          <Pie
            dataKey="usersCount"
            isAnimationActive={false}
            data={GraphData}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#47839C"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </>
  )
}

export default PieCharts;
