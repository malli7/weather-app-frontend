// Import the WeatherMaps component from the './components/WeatherMaps' file
import WeatherMaps from './components/WeatherMaps';

// Define the App function that returns the JSX for the app
function App() {
// Return the JSX for the app, which consists of the WeatherMaps component
return (
<div>
{/* Render the WeatherMaps component */}
<WeatherMaps/>
</div>
);
}

// Export the App component so it can be used in other parts of the application
export default App;