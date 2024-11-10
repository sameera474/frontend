import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [speedData, setSpeedData] = useState([]);
  const [batteryData, setBatteryData] = useState([]);
  const [cuttingPattern, setCuttingPattern] = useState("Zigzag");
  const [labels, setLabels] = useState([]);

  // Simulated data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 10);
      const newBattery = Math.max(0, 100 - speedData.length * 2);

      setSpeedData((prev) => [...prev, newSpeed]);
      setBatteryData((prev) => [...prev, newBattery]);
      setLabels((prev) => [...prev, new Date().toLocaleTimeString()]);
    }, 3000);

    return () => clearInterval(interval);
  }, [speedData]);

  const data = {
    labels,
    datasets: [
      {
        label: "Speed (km/h)",
        data: speedData,
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "Battery Level (%)",
        data: batteryData,
        borderColor: "rgba(255,99,132,1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="dashboard container">
      <h1>Dashboard</h1>
      <p>View real-time data from your robotic lawnmower.</p>
      <div className="chart-container">
        <Line data={data} />
      </div>
      <div>
        <h3>Current Cutting Pattern: {cuttingPattern}</h3>
        <button
          className="button"
          onClick={() =>
            setCuttingPattern((prev) =>
              prev === "Zigzag" ? "Spiral" : "Zigzag"
            )
          }
        >
          Change Cutting Pattern
        </button>
        <button
          className="button"
          onClick={() => (window.location.href = "/history")}
        >
          View History Data
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
