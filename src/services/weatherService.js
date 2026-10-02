const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",

  45: "Fog",
  48: "Depositing rime fog",

  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",

  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",

  71: "Slight snowfall",
  73: "Moderate snowfall",
  75: "Heavy snowfall",

  80: "Rain showers",
  81: "Moderate rain showers",
  82: "Heavy rain showers",

  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with heavy hail",
};

export async function getWeather(latitude, longitude) {
  const url =
    `https://api.open-meteo.com/v1/forecast?` +
    `latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch weather data");
  }

  const data = await response.json();

  return {
    temperature: Math.round(data.current.temperature_2m),
    feelsLike: Math.round(
      data.current.apparent_temperature
    ),
    humidity: data.current.relative_humidity_2m,
    windSpeed: Math.round(
      data.current.wind_speed_10m
    ),
    description:
      weatherCodes[data.current.weather_code] ||
      "Weather unavailable",
  };
}

export function getWeatherIcon(description) {
  const text = description.toLowerCase();

  if (text.includes("thunder")) {
    return "⛈️";
  }

  if (
    text.includes("rain") ||
    text.includes("drizzle")
  ) {
    return "🌧️";
  }

  if (
    text.includes("snow")
  ) {
    return "❄️";
  }

  if (
    text.includes("cloud") ||
    text.includes("overcast")
  ) {
    return "☁️";
  }

  if (
    text.includes("fog")
  ) {
    return "🌫️";
  }

  return "☀️";
}