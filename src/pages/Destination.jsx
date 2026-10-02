import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import destinations from "../data/destinations";

import {
  getWeather,
  getWeatherIcon,
} from "../services/weatherService";

import "./Destination.css";

function Destination() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === id
  );

  const [weather, setWeather] = useState(null);
const [weatherLoading, setWeatherLoading] =
  useState(true);
const [weatherError, setWeatherError] =
  useState(false);

  useEffect(() => {
  async function loadWeather() {
    if (!destination?.coordinates) {
      setWeatherLoading(false);
      return;
    }

    try {
      setWeatherLoading(true);
      setWeatherError(false);

      const data = await getWeather(
        destination.coordinates.latitude,
        destination.coordinates.longitude
      );

      setWeather(data);
    } catch (error) {
      console.error(error);

      setWeatherError(true);
    } finally {
      setWeatherLoading(false);
    }
  }

  loadWeather();
}, [destination]);

  if (!destination) {
    return (
      <div className="destination-not-found">
        <h1>Destination not found</h1>

        <Link to="/explore">
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-page">

      <Navbar />

      {/* HERO */}

      <section
        className="destination-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              0deg,
              rgba(0,0,0,0.72),
              rgba(0,0,0,0.12)
            ),
            url(${destination.image})
          `,
        }}
      >

        <Link
          to="/explore"
          className="back-button"
        >
          <ArrowLeft size={16} />
          Back to explore
        </Link>

        <div className="destination-hero-content">

          <div className="destination-location">
  <MapPin size={15} />
  {destination.state} · {destination.continent}
</div>

          <h1>
            {destination.name}
          </h1>

          <p>
            {destination.country}
          </p>

        </div>

        <div className="hero-scroll-text">
          SCROLL TO DISCOVER
        </div>

      </section>


      {/* INTRO */}

      <section className="destination-intro">

        <div className="destination-section-number">
          01
        </div>

        <div className="destination-intro-content">

          <p className="destination-label">
            ABOUT {destination.name.toUpperCase()}
          </p>

          <h2>
            A place worth
            <br />
            experiencing.
          </h2>

          <p className="destination-description">
            {destination.description}
          </p>

          <div className="destination-tags-large">

            {destination.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* WEATHER */}

      <section className="weather-section">

        <div className="destination-section-number">
          02
        </div>

        <div className="weather-content">

          <p className="destination-label">
            RIGHT NOW
          </p>

          <h2>
            What's the weather
            <br />
            like?
          </h2>
          </div>

         <div className="weather-card">

  {weatherLoading && (
    <div className="weather-loading">
      <div className="weather-spinner"></div>

      <p>
        Getting current weather...
      </p>
    </div>
  )}

  {!weatherLoading && weatherError && (
    <div className="weather-error">

      <div className="weather-icon">
        !
      </div>

      <div>
        <span className="weather-temperature">
          --
        </span>

        <p>
          Weather information is currently
          unavailable.
        </p>
      </div>

    </div>
  )}

  {!weatherLoading &&
    !weatherError &&
    weather && (
      <>

        <div className="weather-main">

         <div className="weather-icon">
  {getWeatherIcon(weather.description)}
</div>
          <div>

            <span className="weather-temperature">
              {weather.temperature}°
            </span>

            <p>
              {weather.description}
            </p>

          </div>

        </div>

        <div className="weather-details">

          <div>
            <span>
              FEELS LIKE
            </span>

            <strong>
              {weather.feelsLike}°
            </strong>
          </div>

          <div>
            <span>
              HUMIDITY
            </span>

            <strong>
              {weather.humidity}%
            </strong>
          </div>

          <div>
            <span>
              WIND
            </span>

            <strong>
              {weather.windSpeed} km/h
            </strong>
          </div>

        </div>

      </>
    )}

</div>
      </section>


      {/* PLACES */}

      <section className="places-section">

        <div className="places-heading">

          <div>

            <p className="destination-label">
              DON'T MISS THESE
            </p>

            <h2>
              Places worth
              <br />
              seeing.
            </h2>

          </div>

          <span className="places-count">
            {destination.places?.length || 0} places
          </span>

        </div>


        <div className="places-grid">

          {destination.places?.map(
            (place, index) => (

              <article
                className="place-card"
                key={place.name}
              >

                <div
                  className="place-image"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        0deg,
                        rgba(0,0,0,0.55),
                        transparent 65%
                      ),
                      url(${place.image})
                    `,
                  }}
                >

                  <span className="place-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="place-content">

                  <h3>
                    {place.name}
                  </h3>

                  <p>
                    {place.description}
                  </p>

                  <button>
                    Explore place
                    <ArrowUpRight size={15} />
                  </button>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* BEST TIME */}

      <section className="best-time">

        <div className="destination-section-number">
          03
        </div>

        <div>

          <p className="destination-label">
            PLAN YOUR VISIT
          </p>

          <h2>
            When should
            <br />
            you go?
          </h2>

          <div className="best-time-card">

            <CalendarDays size={25} />

            <div>

              <span>
                BEST TIME TO VISIT
              </span>

              <strong>
                {destination.bestTime ||
                  "Explore throughout the year"}
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* AI CTA */}

      <section className="destination-ai">

        <Sparkles size={28} />

        <p>
          YOUR PERSONAL TRAVEL ASSISTANT
        </p>

        <h2>
          Not sure what
          <br />
          to do next?
        </h2>

        <p className="ai-description">
          Ask Wanderly AI about {destination.name}.
          Get recommendations, trip ideas and a
          personalized itinerary.
        </p>

        <Link
          to={`/planner?destination=${destination.id}`}
          className="ai-button"
        >
          Plan my {destination.name} trip
          <ArrowUpRight size={18} />
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="destination-footer">

        <div>
          WANDERLY
        </div>

        <Link to="/explore">
          Explore more destinations
          <ArrowUpRight size={15} />
        </Link>

      </footer>

    </div>
  );
}

export default Destination;