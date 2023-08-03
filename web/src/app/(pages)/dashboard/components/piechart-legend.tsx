"use client";

import { useEffect, useState } from "react";
import colors from "../colors";

export default function PieChartLegend({ className, rows }: any) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const sum = rows.reduce((acc: number, row: any) => acc + row.amount, 0);
      setTotal(sum);
    };
    calculateTotal();
  }, [rows]);

  return (
    <table className={className}>
      {rows &&
        rows.map((row: any, index: number) => (
          <tr key={index}>
            <td></td>
            <td>
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
            </td>
            <td className="px-2 py-2">{row.category}</td>
            <td className="px-4 py-2">
              R$ {row.amount.toLocaleString("en-US")}
            </td>
            <td className="px-4 py-2">
              {`${((row.amount / total) * 100).toFixed(2)}%`}
            </td>
          </tr>
        ))}
    </table>
  );
}
