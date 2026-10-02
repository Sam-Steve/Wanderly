import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import destinations from "../data/destinations";

import "./Home.css";

function Home() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="home">

      <Navbar />

      {/* HERO */}

      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-fallback"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-label">
            DISCOVER • EXPLORE • WANDER
          </p>

          <h1>
            Incredible India
            <br />
            is waiting.
          </h1>

          <p className="hero-description">
            Discover remarkable destinations across India,
            explore places worth visiting,
            check live weather and plan your next journey.
          </p>

          <div className="hero-actions">

            <Link
              to="/explore"
              className="hero-primary"
            >
              Explore destinations
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/planner"
              className="hero-secondary"
            >
              Plan my trip
            </Link>

          </div>

        </div>

        <div className="hero-bottom">

          <div className="hero-scroll">
            <ArrowDown size={16} />
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="hero-location">
            <span className="location-dot"></span>
            INDIA
          </div>

        </div>

      </section>


      {/* INTRODUCTION */}

      <section className="intro">

        <div className="section-label">
          <span>01</span>
          <span>START YOUR JOURNEY</span>
        </div>

        <div className="intro-content">

          <h2>
            Places that make
            <br />
            you want to pack a bag.
          </h2>

          <div className="intro-text">

            <p>
              From historic monuments and royal cities
              to mountains, beaches and peaceful landscapes,
              discover destinations worth experiencing across India.
            </p>

            <Link
              to="/explore"
              className="text-link"
            >
              Explore all destinations
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* FEATURED DESTINATIONS */}

      <section className="featured">

        <div className="section-heading">

          <div>

            <p className="section-small-title">
              PLACES TO GO
            </p>

            <h2>
              Start somewhere
              <br />
              unforgettable.
            </h2>

          </div>

          <Link
            to="/explore"
            className="view-all"
          >
            View all
            <ArrowUpRight size={17} />
          </Link>

        </div>


        <div className="destination-grid">

          {featuredDestinations.map(
            (destination, index) => (

              <Link
                key={destination.id}
                to={`/destination/${destination.id}`}
                className={`destination-card ${
                  index === 0
                    ? "destination-large"
                    : ""
                }`}
              >

                <div
                  className="destination-image"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        0deg,
                        rgba(0,0,0,0.55),
                        transparent 65%
                      ),
                      url(${destination.image})
                    `,
                  }}
                ></div>

                <div className="destination-info">

                  <div>

                    <span>
                      {destination.state ||
                        destination.country}
                    </span>

                    <h3>
                      {destination.name}
                    </h3>

                  </div>

                  <ArrowUpRight size={20} />

                </div>

              </Link>

            )
          )}

        </div>

      </section>


      {/* AI PLANNER */}

      <section className="planner-preview">

        <div className="planner-number">
          02
        </div>

        <div className="planner-content">

          <p className="section-small-title">
            YOUR PERSONAL TRAVEL ASSISTANT
          </p>

          <h2>
            Don't just pick
            <br />
            a destination.
            <br />
            <span>Plan the journey.</span>
          </h2>

          <p>
            Tell Wanderly where you want to go,
            how long you have and what kind of
            experience you're looking for.
          </p>

          <Link
            to="/planner"
            className="planner-button"
          >
            Build my itinerary
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-logo">
          WANDERLY
        </div>

        <p>
          Explore India. Find your next story.
        </p>

        <span>
          © 2026 Wanderly
        </span>

      </footer>

    </div>
  );
}

export default Home;