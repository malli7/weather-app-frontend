import React from "react";
// Import the MapContainer, TileLayer, Popup, and Marker components from the react-leaflet library
import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'

const WeatherMap = ({ citiesList }) => {
  
  return (
    <div>
      {/* Render a MapContainer component with the specified style, zoom, center, and scrollWheelZoom, fadeAnimation, and markerZoomAnimation props */}
      <MapContainer
        style={{ width: "100%", height: "80vh" }}
        zoom={1}
        center={[52,13]}
        scrollWheelZoom={false}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
        {/* Render a TileLayer component with the specified attribution and url props */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Map over the list of cities and render a Marker component for each city */}
        {citiesList.map((element) => {
          // Parse the body of the response as JSON
          let x = JSON.parse(element.body)
          // Render a Marker component with the specified key, position, and Popup child
          return (
            <Marker key={x.coord.lat} position={[x.coord.lat,x.coord.lon]}>
              <Popup>
                {/* Render the weather data for the city in a Popup component */}
                <p>name: {x.name}</p>
                <p>coordinates: [{x.coord.lat} , {x.coord.lon}]</p>
                <p>temperature: {(x.main.temp-273.15).toFixed(2)} °C</p>
                <p>feels like: {(x.main.feels_like-273.15).toFixed(2)} °C</p>
                <p>temperature range: {(x.main.temp_min - 273.15).toFixed(2)} °C  -- {(x.main.temp_max-273.15).toFixed(2)} °C</p>
                <p>humidity: {x.main.humidity} %</p>
                <p>pressure: {x.main.pressure} hPa</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
