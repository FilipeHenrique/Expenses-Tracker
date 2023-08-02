"use client";
import { PieChart, Pie, Legend, Cell } from "recharts";
import colors from "../colors";

export default function ExpensesPieChart() {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];

  return (
    <PieChart width={730} height={300}>
      <Pie
        className="outline-none"
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={130}
        label
      >
        {data01.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend layout="vertical" align="right" verticalAlign="top" height={36} />
    </PieChart>
  );
}
