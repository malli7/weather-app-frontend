import React from "react";
import { useEffect,useState } from 'react';

// Import the WeatherMap component
import WeatherMap from "./WeatherMap";

const WeatherMaps = () => {
  const url = "https://weather-app-backend.onrender.com/api/weather/page/"
  // Declare state variables for the list of cities and the current page
  const [citiesList, setCitiesList] = useState([]);
  const [page, setPage] = useState(1);

  // Define a function to handle the "next" button click
  const handleNext = () => {
    // Increment the page number
    setPage(page + 1)
    // Get the data for the next page
    getData()
  }

  // Define a function to handle the "previous" button click
  const handlePrevious = () => {
    // Decrement the page number
    setPage(page - 1)
    // Get the data for the previous page
    getData()
  }

  setInterval(() => {
    // Code to call the third-party API and update the data
    getData()
  }, 600000); // This will update the data every 10 minutes (600000 milliseconds)
    
  // Define a function to get the data for the current page
  const getData = async () => {
    // Make a GET request to the /api/weather/page/:page route with the current page number
    const response = await fetch(`${url}${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    // Parse the response as JSON
    const json = await response.json()

    // Set the list of cities to the data from the response
    setCitiesList(json)
  }

  // Use the useEffect hook to get the data when the component is mounted
  useEffect(() => {
    const getData = async () => {
      // Make a GET request to the /api/weather/page/:page route with the current page number
      const response = await fetch(`${url}1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      // Parse the response as JSON
      const json = await response.json()
  
      // Set the list of cities to the data from the response
      setCitiesList(json)
    }
    getData()
  }, []);

  return (
    <div>
      {/* Render the "previous" and "next" buttons and the WeatherMap component */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Render the "previous" button */}
        <button 
          type='button' 
          disabled={page === 1?true:false} 
          onClick={handlePrevious} 
          style={{margin:"10px",width:"100px",height:"50px",cursor:"pointer",backgroundColor:"#00ff00",border:"0px",borderRadius:"20%"}}
        >
          previous
        </button>
        <h1>Weather Map</h1>
        {/* Render the "next" button */}
        <button 
          type='button' 
          disabled={page === 3?true:false} 
          onClick={handleNext} 
          style={{margin:"10px",width:"100px",height:"50px",cursor:"pointer",backgroundColor:"#06a8ff",border:"0px",borderRadius:"20%"}}
        >
          next
        </button>
      </div>
      {/* Render the WeatherMap component with the list of cities as a prop */}
      <WeatherMap citiesList={citiesList} />
    </div>
  );
};

export default WeatherMaps;
