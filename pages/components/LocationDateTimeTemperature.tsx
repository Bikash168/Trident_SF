import { useEffect, useState } from 'react';

type WeatherData = {
  temperature: number;
  location: string;
  dateTime: string;
};

export default function LocationDateTimeTemperature() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async (lat: number, lon: number) => {
      try {
        // Fetch weather data from Open-Meteo
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const weatherData = await weatherResponse.json();

        // Fetch location name from OpenCage Geocoder (reverse geocoding)
        const geoResponse = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=/e5d856fa5de94ae0966a656931515640`
        );
        const geoData = await geoResponse.json();
        const location = geoData.results[0]?.formatted;

        // Format the current date and time
        const dateTime = new Intl.DateTimeFormat('en-US', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(new Date());

        setWeather({
          temperature: weatherData.current_weather.temperature,
          location: location || "Unknown Location", // If location is not found, use a fallback
          dateTime,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude); // Fetch weather using user's location
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            // Fallback to a default location if geolocation is not available
            fetchWeatherData(20.2961, 85.8189); // Default location: Bhubaneswar
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
        // Fallback to a default location if geolocation is not available
        fetchWeatherData(20.2961, 85.8189); // Default location: Bhubaneswar
      }
    };

    getUserLocation(); // Call the function to fetch weather based on user location
  }, []);

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center mt-8 ">
      <p className="text-[#316b9e] ">
        {weather.location} | {weather.dateTime} | {weather.temperature}°C
      </p>
    </div>
  );
}
