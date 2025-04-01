"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function MapView({ units }) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-xl p-4">
      <h2 className="text-lg font-bold mb-4">Global Locations</h2>
      <ComposableMap width={800} height={400}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#F53", outline: "none" },
                  pressed: { fill: "#E42", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {units.map((unit) => (
          <Marker
            key={unit.name}
            coordinates={[unit.coordinates.lng, unit.coordinates.lat]}
          >
            <circle r={8} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontSize: "12px", fill: "#000", fontWeight: "bold" }}
            >
              {unit.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}