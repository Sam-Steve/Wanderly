import { useState } from "react";

function useLocation() {
  const [location, setLocation] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError(
        "Location services are not supported by your browser."
      );

      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setLoading(false);
      },

      (error) => {
        setLoading(false);

        if (error.code === 1) {
          setError(
            "Location permission was denied."
          );
        } else if (error.code === 2) {
          setError(
            "Your location could not be determined."
          );
        } else {
          setError(
            "Unable to get your location."
          );
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  };

  return {
    location,
    loading,
    error,
    requestLocation,
  };
}

export default useLocation;