import {
  MapPin,
  Navigation,
  X,
} from "lucide-react";

import useLocation from "../hooks/useLocation";

import "./LocationPrompt.css";

function LocationPrompt() {
  const {
    location,
    loading,
    error,
    requestLocation,
  } = useLocation();

  return (
    <section className="location-section">

      <div className="location-icon">
        <MapPin size={22} />
      </div>

      <div className="location-content">

        <p className="location-label">
          DISCOVER NEARBY
        </p>

        <h2>
          What's around you?
        </h2>

        {!location && !error && (
          <p className="location-description">
            Allow Wanderly to use your location
            and discover interesting places nearby.
          </p>
        )}

        {location && (
          <p className="location-success">
            Location detected successfully.
          </p>
        )}

        {error && (
          <p className="location-error">
            {error}
          </p>
        )}

        {!location && (
          <button
            className="location-button"
            onClick={requestLocation}
            disabled={loading}
          >
            <Navigation size={16} />

            {loading
              ? "Finding you..."
              : "Use my location"}
          </button>
        )}

        {location && (
          <div className="coordinates">

            <span>
              Latitude
            </span>

            <strong>
              {location.latitude.toFixed(4)}
            </strong>

            <span>
              Longitude
            </span>

            <strong>
              {location.longitude.toFixed(4)}
            </strong>

          </div>
        )}

        {error && (
          <button
            className="location-retry"
            onClick={requestLocation}
          >
            Try again
          </button>
        )}

      </div>

    </section>
  );
}

export default LocationPrompt;