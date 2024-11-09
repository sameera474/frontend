// frontend/src/components/LawnDataChart.js
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getLawnData } from "../services/lawnDataService";

const LawnDataChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLawnData();
      const timestamps = data.map((d) =>
        new Date(d.timestamp).toLocaleTimeString()
      );
      const batteryLevels = data.map((d) => d.batteryLevel);

      setChartData({
        labels: timestamps,
        datasets: [
          {
            label: "Battery Level",
            data: batteryLevels,
            borderColor: "rgba(75,192,192,1)",
            fill: false,
          },
        ],
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Battery Level Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LawnDataChart;
