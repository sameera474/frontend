import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [speedData, setSpeedData] = useState([]);
  const [batteryData, setBatteryData] = useState([]);
  const [cuttingPattern, setCuttingPattern] = useState("Zigzag");
  const [labels, setLabels] = useState([]);

  // Simulate data updates every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 10); // Simulate speed between 0-10 km/h
      const newBattery = Math.max(0, 100 - speedData.length * 2); // Decrease battery over time

      setSpeedData((prevData) => [...prevData, newSpeed]);
      setBatteryData((prevData) => [...prevData, newBattery]);
      setLabels((prevLabels) => [
        ...prevLabels,
        new Date().toLocaleTimeString(),
      ]);

      // Change cutting pattern every few updates
      if (speedData.length % 5 === 0) {
        setCuttingPattern(cuttingPattern === "Zigzag" ? "Spiral" : "Zigzag");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [speedData, cuttingPattern]);

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
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <p>
        View real-time data from your robotic lawnmower, including speed,
        battery level, and cutting patterns.
      </p>

      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Line data={data} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Current Cutting Pattern: {cuttingPattern}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
