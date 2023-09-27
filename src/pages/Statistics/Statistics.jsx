import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import totalData from "../../../public/data.json";
import { useEffect, useState } from "react";

const Statistics = () => {
  const totalD = totalData.length;
  const [donations, setDonations] = useState(0);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("donations"));
    if (storedData?.length > 0) {
      setDonations(storedData.length);
    }
  }, []);

  const data = [
    { name: "Your Donation", value: donations },
    { name: "Total Donation", value: totalD - donations },
  ];
  const COLORS = ["green", "red"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center">
      <PieChart width={650} height={650}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={220}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
