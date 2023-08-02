"use client";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import colors from "../colors";

export default function ExpensesPieChart() {
  const data = [
    {
      name: "Miscellaneous",
      value: 400,
    },
    {
      name: "Food",
      value: 300,
    },
    {
      name: "Utilities",
      value: 300,
    },
    {
      name: "Shopping",
      value: 200,
    },
    {
      name: "Transportation",
      value: 278,
    },
    {
      name: "Insurance",
      value: 189,
    },
  ];

  const renderLabel = function (labelData: any) {
    labelData.fill = "black";
    return labelData.name;
  };

  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    // <ResponsiveContainer width="80%" height="80%">
    <PieChart width={730} height={300}>
      <Pie
        isAnimationActive={true}
        className="outline-none"
        data={data}
        dataKey="value"
        nameKey="name"
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
      <Legend
        layout="vertical"
        align="right"
        verticalAlign="top"
        height={36}
        formatter={(value, entry) => (
          <span className="text-sm font-normal text-black">
            {`${value}`}
            {"  "}
            {`R$${entry.payload?.value}`}
            {"  "}
            {`(${((entry.payload?.value / total) * 100).toFixed(0)}%) `}
          </span>
        )}
      />
    </PieChart>
    // </ResponsiveContainer>
  );
}
