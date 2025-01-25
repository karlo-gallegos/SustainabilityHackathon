import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as XLSX from "xlsx";
import proj4 from "proj4";
import L from "leaflet"; // Import leaflet for custom icons

// Define Projections
proj4.defs("EPSG:27700", "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs");
proj4.defs("EPSG:2157", "+proj=tmerc +lat_0=53 +lon_0=-8 +k=1.000000 +x_0=200000 +y_0=250000 +datum=WGS84 +units=m +no_defs");
proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");

// Custom Marker Icons
const createIcon = (color) => {
  return L.icon({
    iconUrl: `https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
    className: `custom-marker-icon-${color}`, // Dynamic styling
  });
};

// Dynamic Marker Color Logic
const getMarkerColor = (classification) => {
  switch (classification) {
    case "High": return "red";
    case "Medium": return "orange";
    case "Low": return "green";
    default: return "blue"; // Default color
  }
};

const InteractiveMaps = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await fetch("/NIWaterModelledSpillsMay2024v2.xlsx");
        const arrayBuffer = await response.arrayBuffer();

        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        const markerData = sheetData
          .map((row) => {
            const xy = row["XY Coordinates"];
            if (!xy) return null;
            const [x, y] = xy.split(",").map((coord) => parseFloat(coord.trim()));
            if (isNaN(x) || isNaN(y)) return null;

            const [lng, lat] = proj4("EPSG:2157", "EPSG:4326", [x, y]);
            const adjustedLat = lat + 0.485;
            const adjustedLng = lng;

            return {
              lat: adjustedLat,
              lng: adjustedLng,
              classification: row["Storm Overflow Classification"] || "N/A",
              popup: `
                <strong>CARID:</strong> ${row.CARID || "N/A"}<br />
                <strong>Name:</strong> ${row.Name || "N/A"}<br />
                <strong>Spill Frequency:</strong> ${row["Predicted Spill Frequency / Year"] || "N/A"} / Year<br />
                <strong>Spill Volume:</strong> ${row["Predicted Spill Volume / Year (m3)"] || "N/A"} m³<br />
                <strong>Classification:</strong> ${row["Storm Overflow Classification"] || "N/A"}<br />
                <strong>Receiving Waterbody:</strong> ${row["Receiving Waterbody Name"] || "N/A"}
              `,
              tooltip: `${row.Name || "Unknown"} - ${row["Storm Overflow Classification"] || "N/A"}`,
            };
          })
          .filter(Boolean);

        setMarkers(markerData);
      } catch (error) {
        console.error("Error loading spreadsheet:", error);
      }
    };

    fetchMapData();
  }, []);

  return (
    <div>
      <header style={{ padding: "20px", background: "#f8f9fa", borderBottom: "1px solid #dee2e6" }}>
        <h1>Storm Overflow Map for Northern Ireland</h1>
        <p>
          This interactive map highlights storm overflow locations in Northern Ireland. Storm overflows are emergency 
          release points in the sewer system designed to prevent flooding during heavy rainfall. However, their frequent 
          use can result in pollution of rivers, lakes, and other water bodies, causing harm to ecosystems and public health.
        </p>
        <p>
          Use the map to explore specific locations, understand their classification based on environmental impact, 
          and view detailed information about each site.
        </p>
        <p>
          This data comes from NI Water’s modelled spill predictions (2024). While every effort has been made to ensure 
          accuracy, these predictions are subject to change and should be interpreted with caution.
        </p>
      </header>
      
      <MapContainer center={[54.5, -6.5]} zoom={8} style={{ height: "60vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={createIcon(getMarkerColor(marker.classification))}
          >
            <Tooltip>{marker.tooltip}</Tooltip>
            <Popup>
              <div dangerouslySetInnerHTML={{ __html: marker.popup }} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMaps;
