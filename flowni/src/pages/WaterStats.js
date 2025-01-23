import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Line } from "react-chartjs-2"; // Chart.js for rendering the line chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WaterStats = () => {
  const [chartDataLoughNeagh, setChartDataLoughNeagh] = useState(null);

  useEffect(() => {
    const fetchChartDataLoughNeagh = async () => {
      try {
        const response = await fetch("/Lough Neagh at Martins Bay statistics for graph.xlsx");
        const arrayBuffer = await response.arrayBuffer();

        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        const yearData = {};
        sheetData.forEach((row) => {
          const year = row["Year"];
          const bod = parseFloat(row["BOD Average"]);
          if (!isNaN(bod)) {
            if (!yearData[year]) {
              yearData[year] = { totalBOD: 0, count: 0 };
            }
            yearData[year].totalBOD += bod;
            yearData[year].count += 1;
          }
        });

        const years = Object.keys(yearData).sort((a, b) => a - b);
        const averageBOD = years.map((year) => yearData[year].totalBOD / yearData[year].count);

        setChartDataLoughNeagh({
          labels: years,
          datasets: [
            {
              label: "Average BOD for Lough Neagh",
              data: averageBOD,
              fill: false,
              borderColor: "rgba(75,192,192,1)",
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error loading Lough Neagh chart data:", error);
      }
    };

    fetchChartDataLoughNeagh();
  }, []);

  return (
    <div>
      {/* BOD Description and Chart Section */}
      <div style={{ marginTop: "20px" }}>
        <h3>Biochemical Oxygen Demand (BOD)</h3>
        <p>
          Biochemical Oxygen Demand (BOD) is a measure of the amount of oxygen that microorganisms in water 
          consume as they decompose organic matter. In aquatic ecosystems like Lough Neagh, a high BOD 
          indicates significant organic pollution, which can reduce the amount of dissolved oxygen available 
          for fish and other aquatic life, potentially leading to environmental stress or even ecosystem imbalance.
        </p>
        {chartDataLoughNeagh && <Line data={chartDataLoughNeagh} />}
      </div>
    </div>
  );
};

export default WaterStats;
