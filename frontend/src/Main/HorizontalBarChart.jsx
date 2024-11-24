import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HorizontalBarChart = (props) => {
  const data = [
    { name: "Alpha", value: 87 },
    { name: "Beta", value: 123 },
    { name: "Gamma", value: 145 },
    { name: "Theta", value: 56 },
    { name: "HighBeta", value: 61 },
  ];

  const formattedData = data.map(({ name, value }) => ({
    name,
    value,
  }));

  return (
    <BarChart
      width={600}
      height={300}
      data={formattedData}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 90, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" stroke="black" tick={{ fontSize: 12 }} />
      <YAxis
        dataKey="name"
        type="category"
        stroke="black"
        tick={{ fontSize: 12 }}
      />
      <Tooltip
        cursor={{ fill: "rgba(255,255,255,0.1)" }}
        wrapperStyle={{ fontSize: 12, fontWeight: "bold", color: "#d36cdb" }}
      />
      <Legend
        wrapperStyle={{ fontSize: 12, fontWeight: "bold", color: "#d36cdb" }}
      />
      <Bar dataKey="value" fill="#d36cdb" />
    </BarChart>
  );
};

export default HorizontalBarChart;
