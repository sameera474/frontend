import React, { useState, useEffect } from "react";

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Fetch history data
    fetch("http://localhost:5000/api/history")
      .then((response) => response.json())
      .then((data) => setHistoryData(data))
      .catch((error) => console.error("Error fetching history data:", error));
  }, []);

  return (
    <div className="history container">
      <h1>History Data</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Speed (km/h)</th>
            <th>Battery Level (%)</th>
            <th>Cutting Pattern</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td>{item.timestamp}</td>
              <td>{item.speed}</td>
              <td>{item.batteryLevel}</td>
              <td>{item.cuttingPattern}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
