"use client";
import { PieChart, Pie, Cell } from "recharts";
import colors from "../colors";
import PieChartLegend from "./piechart-legend";

export default function DashboardPieChart() {
  const data = [
    {
      category: "Miscellaneous",
      amount: 455,
    },
    {
      category: "Food",
      amount: 300,
    },
    {
      category: "Utilities",
      amount: 300,
    },
    {
      category: "Shopping",
      amount: 200,
    },
    {
      category: "Transportation",
      amount: 278,
    },
    {
      category: "Insurance",
      amount: 189,
    },
  ];

  const renderLabel = function (labelData: any) {
    labelData.fill = "black";
    return labelData.category;
  };

  return (
    <>
      <div className="flex justify-around">
        <PieChart width={500} height={300}>
          <Pie
            isAnimationActive={true}
            className="outline-none"
            data={data}
            dataKey="amount"
            valueKey="category"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={130}
            label={renderLabel}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
        <PieChartLegend rows={data} className="top-5" />
      </div>
    </>
  );
}
