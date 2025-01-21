// src/pages/WaterStats.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const WaterStats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://opendatani.gov.uk/api/v1/datasets'); // Example API endpoint
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.map(item => item.date), // Replace with actual date field
    datasets: [
      {
        label: 'Pollution Level',
        data: data.map(item => item.pollutionLevel), // Replace with actual data fields
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>Water Stats</h1>
      <Line data={chartData} />
    </div>
  );
};

export default WaterStats;
