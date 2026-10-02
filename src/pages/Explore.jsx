import LocationPrompt from "../components/LocationPrompt";
import { useMemo, useState } from "react";

import {
  ArrowUpRight,
  Search,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import destinations from "../data/destinations";

import "./Explore.css";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeContinent, setActiveContinent] =
    useState("All");

const continents = [
  "All",
  "North India",
  "South India",
  "East India",
  "West India",
];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        destination.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        destination.country
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        destination.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

      const matchesContinent =
        activeContinent === "All" ||
        destination.continent === activeContinent;

      return matchesSearch && matchesContinent;
    });
  }, [searchTerm, activeContinent]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="explore-page">

      <Navbar />

      {/* PAGE HERO */}

      <section className="explore-hero">

        <div className="explore-hero-content">

          <p className="explore-eyebrow">
            DISCOVER THE WORLD
          </p>

          <h1>
            Find your
            <br />
            next place.
          </h1>

          <p>
            Explore destinations worth remembering,
            from cities full of stories to landscapes
            that feel like another world.
          </p>

        </div>

      </section>


      {/* EXPLORER */}

      <section className="explorer">

        <div className="explorer-top">

          <div>
            <p className="section-label">
              EXPLORE DESTINATIONS
            </p>

            <h2>
              Where will you go?
            </h2>
          </div>

          <span className="result-count">
            {filteredDestinations.length}{" "}
            {filteredDestinations.length === 1
              ? "destination"
              : "destinations"}
          </span>

        </div>


        {/* SEARCH */}

        <div className="search-wrapper">

          <Search
            size={20}
            className="search-icon"
          />

          <input
            type="text"
            placeholder="Search a destination, country or experience..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          {searchTerm && (
            <button
              className="clear-search"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}

        </div>


        {/* FILTERS */}

        <div className="filters">

          {continents.map((continent) => (
            <button
              key={continent}
              className={`filter-button ${
                activeContinent === continent
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveContinent(continent)
              }
            >
              {continent}
            </button>
          ))}

        </div>


        {/* RESULTS */}

        {filteredDestinations.length > 0 ? (

          <div className="explore-grid">

            {filteredDestinations.map(
              (destination, index) => (
                <Link
                  key={destination.id}
                  to={`/destination/${destination.id}`}
                  className={`explore-card ${
                    index === 0
                      ? "explore-card-featured"
                      : ""
                  }`}
                >

                  <div
                    className="explore-card-image"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          0deg,
                          rgba(0,0,0,0.65),
                          transparent 65%
                        ),
                        url(${destination.image})
                      `,
                    }}
                  />

                  <div className="card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="explore-card-content">

                    <div>

                      <span>
                        {destination.country}
                      </span>

                      <h3>
                        {destination.name}
                      </h3>

                      <div className="destination-tags">

                        {destination.tags
                          .slice(0, 2)
                          .map((tag) => (
                            <small key={tag}>
                              {tag}
                            </small>
                          ))}

                      </div>

                    </div>

                    <div className="card-arrow">
                      <ArrowUpRight size={20} />
                    </div>

                  </div>

                </Link>
              )
            )}

          </div>

        ) : (

          /* EMPTY STATE */

          <div className="empty-state">

            <div className="empty-icon">
              <Search size={25} />
            </div>

            <h3>
              We couldn't find that place.
            </h3>

            <p>
              Try another destination, country or
              experience.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setActiveContinent("All");
              }}
            >
              Show all destinations
            </button>

          </div>

        )}
        <LocationPrompt />

      </section>

    </div>
  );
}

export default Explore;