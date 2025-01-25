import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend, ArcElement);

const WaterStats = () => {
  const [charts, setCharts] = useState([]);
  const [chartTexts, setChartTexts] = useState([]);

  useEffect(() => {
    const processCSV = async (fileName) => {
      try {
        const response = await fetch(fileName);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        return new Promise((resolve, reject) => {
          Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => resolve(results.data),
            error: (error) => reject(error),
          });
        });
      } catch (error) {
        console.error(`Failed to fetch and parse CSV file ${fileName}:`, error);
        throw error;
      }
    };

    const processXLSX = async (fileName) => {
      try {
        const response = await fetch(fileName);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      } catch (error) {
        console.error(`Failed to fetch and parse XLSX file ${fileName}:`, error);
        throw error;
      }
    };

    const fetchData = async () => {
      try {
        const niSpillsData = await processXLSX("/NIWaterModelledSpillsMay2024v2.xlsx");
        const riverQualityData = await processCSV("/River_Water_Quality_Monitoring_1990_to_2018.csv");
        const loughNeaghData = await processXLSX("/Lough Neagh at Martins Bay statistics for graph.xlsx");
        const drainageData = await processCSV("/Drainage_Assets.csv");
        const groundwaterData = await processCSV("/Groundwater_Dependent_Terrestrial_Ecosystems.csv");

        // Process and add charts
        const spillFrequencyChart = generateSpillFrequencyChart(niSpillsData);
        const spillVolumeChart = generateSpillVolumeChart(niSpillsData);
        const bodTrendChart = generateBODTrendChart(riverQualityData);
        const suspendedSolidsChart = generateSuspendedSolidsChart(loughNeaghData);
        const drainageContributionChart = generateDrainageContributionChart(drainageData);
        const gullyTypeChart = generateGullyTypeChart(drainageData);
        const groundwaterPollutionChart = generateGroundwaterPollutionChart(groundwaterData);

        const texts = [
          "Spill Frequency by Location: This chart highlights areas with the highest spill frequencies, helping prioritize pollution control measures.",
          "Spill Volume by Location: This visualization shows locations with the largest spill volumes, which can significantly impact water quality.",
          "Average BOD Levels Over Time: This graph tracks Biochemical Oxygen Demand, an indicator of organic pollution, over the years.",
          "Suspended Solids at Lough Neagh: Suspended solids indicate erosion and pollution levels in Lough Neagh, a crucial water source.",
          "Drainage Contribution to Pollution: This chart shows which drainage points contribute the most to pollution.",
          "Distribution of Gully Types: This pie chart illustrates the types of gullies in the drainage network, highlighting infrastructure diversity.",
          "Groundwater Pollution Trends: This graph shows the pollution levels in groundwater ecosystems over time, critical for long-term resource management."
        ];

        // Add all charts and texts to the carousel
        setCharts([
          spillFrequencyChart,
          spillVolumeChart,
          bodTrendChart,
          suspendedSolidsChart,
          drainageContributionChart,
          gullyTypeChart,
          groundwaterPollutionChart,
        ]);
        setChartTexts(texts);
      } catch (error) {
        console.error("Error processing data files:", error);
      }
    };

    fetchData();
  }, []);

  // Chart Generators
  const generateSpillFrequencyChart = (data) => {
    const groupedData = data.reduce((acc, row) => {
      acc[row["Name"]] = (acc[row["Name"]] || 0) + parseFloat(row["Predicted Spill Frequency / Year"] || 0);
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const chartData = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          label: "Spill Frequency by Location",
          data: chartData,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
  };

  const generateSpillVolumeChart = (data) => {
    const groupedData = data.reduce((acc, row) => {
      acc[row["Name"]] = (acc[row["Name"]] || 0) + parseFloat(row["Predicted Spill Volume / Year (m3)"] || 0);
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const chartData = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          label: "Spill Volume by Location",
          data: chartData,
          backgroundColor: "rgba(255,99,132,0.4)",
          borderColor: "rgba(255,99,132,1)",
        },
      ],
    };
  };

  const generateBODTrendChart = (data) => {
    const groupedData = data.reduce((acc, row) => {
      const year = row["Date"].split("-")[0];
      acc[year] = (acc[year] || 0) + parseFloat(row["BOD_MGL"] || 0);
      return acc;
    }, {});

    const labels = Object.keys(groupedData).sort();
    const chartData = labels.map((label) => groupedData[label]);

    return {
      labels,
      datasets: [
        {
          label: "Average BOD Levels Over Time",
          data: chartData,
          borderColor: "rgba(54,162,235,1)",
          backgroundColor: "rgba(54,162,235,0.4)",
        },
      ],
    };
  };

  const generateSuspendedSolidsChart = (data) => {
    const groupedData = data.reduce((acc, row) => {
      acc[row["Year"]] = (acc[row["Year"]] || 0) + parseFloat(row["SS_MGL"] || 0);
      return acc;
    }, {});

    const labels = Object.keys(groupedData).sort();
    const chartData = labels.map((label) => groupedData[label]);

    return {
      labels,
      datasets: [
        {
          label: "Suspended Solids (SS_MGL) Trends at Lough Neagh",
          data: chartData,
          borderColor: "rgba(153,102,255,1)",
          backgroundColor: "rgba(153,102,255,0.4)",
        },
      ],
    };
  };

  const generateDrainageContributionChart = (data) => {
    const groupedData = data.reduce((acc, row) => {
      acc[row["Drainage Point"]] = (acc[row["Drainage Point"]] || 0) + parseFloat(row["Pollution Contribution"] || 0);
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const chartData = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          label: "Drainage Contribution to Pollution",
          data: chartData,
          backgroundColor: "rgba(255,206,86,0.4)",
          borderColor: "rgba(255,206,86,1)",
        },
      ],
    };
  };

  const generateGullyTypeChart = (data) => {
    const groupedData = data.reduce((acc, row) => {
      acc[row["GULLY_TYPE_NAME"]] = (acc[row["GULLY_TYPE_NAME"]] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const chartData = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          label: "Distribution of Gully Types",
          data: chartData,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    };
  };

  const generateGroundwaterPollutionChart = (data) => {
    const groupedData = data.reduce((acc, row) => {
      acc[row["Year"]] = (acc[row["Year"]] || 0) + parseFloat(row["Pollution Level"] || 0);
      return acc;
    }, {});

    const labels = Object.keys(groupedData).sort();
    const chartData = labels.map((label) => groupedData[label]);

    return {
      labels,
      datasets: [
        {
          label: "Pollution Trends in Groundwater Ecosystems",
          data: chartData,
          borderColor: "rgba(255,159,64,1)",
          backgroundColor: "rgba(255,159,64,0.4)",
        },
      ],
    };
  };

  // Carousel Settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h3>Water Pollution Statistics in Northern Ireland</h3>
      <p>
        This dashboard highlights critical data about pollution in Northern Ireland's water systems.
        The graphs below provide insights into spill frequency and volume, water quality trends, and drainage impacts on pollution.
      </p>
      <Slider {...sliderSettings}>
        {charts.map((chart, index) => (
          <div key={index}>
            <h4>{chart.datasets[0].label}</h4>
            <Bar data={chart} />
            <p>{chartTexts[index]}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WaterStats;
