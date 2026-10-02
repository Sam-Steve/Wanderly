import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles, LoaderCircle } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";

import destinations from "../data/destinations";
import "./Planner.css";

function Planner() {
  const [searchParams, setSearchParams] = useSearchParams();

  const destinationFromUrl = searchParams.get("destination");

  const [selectedDestination, setSelectedDestination] = useState(null);

  const [days, setDays] = useState(3);
  const [interests, setInterests] = useState("Culture & sightseeing");
  const [travelStyle, setTravelStyle] = useState("Balanced");

  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (destinationFromUrl) {
      const destination = destinations.find(
        (item) => item.id === destinationFromUrl
      );

      setSelectedDestination(destination || null);
    } else {
      setSelectedDestination(null);
    }
  }, [destinationFromUrl]);

  const handleDestinationSelect = (destination) => {
    setSearchParams({
      destination: destination.id,
    });

    setItinerary(null);
    setError("");
  };

  const generateItinerary = async () => {
    if (!selectedDestination) {
      setError("Please choose a destination first.");
      return;
    }

    setLoading(true);
    setError("");
    setItinerary(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/generate-itinerary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination: selectedDestination.name,
            days,
            interests,
            travelStyle,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to generate itinerary."
        );
      }

      setItinerary(data.itinerary);
    } catch (err) {
      console.error("Itinerary error:", err);

      setError(
        err.message ||
          "Something went wrong while generating your itinerary."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="planner-page">

      {/* HERO */}

      <section className="planner-hero">
        <p className="planner-label">
          PLAN • EXPLORE • WANDER
        </p>

        <h1>
          Plan your
          <br />
          India journey.
        </h1>

        <p className="planner-description">
          Create a personalized travel plan for India's incredible
          destinations, from historic monuments and royal cities to
          mountains, beaches and peaceful backwaters.
        </p>
      </section>


      {/* DESTINATION SELECTOR */}

      <section className="planner-destinations">

        <p className="planner-section-label">
          CHOOSE YOUR DESTINATION
        </p>

        <h2>
          Where do you want to go?
        </h2>

        <div className="planner-options">

          {destinations.map((destination) => (
            <button
              key={destination.id}
              type="button"
              className={
                selectedDestination?.id === destination.id
                  ? "planner-option active"
                  : "planner-option"
              }
              onClick={() =>
                handleDestinationSelect(destination)
              }
            >
              {destination.name}
            </button>
          ))}

        </div>


        {/* SELECTED DESTINATION */}

        {selectedDestination && (
          <div className="planner-selected">

            <div className="planner-selected-image">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
              />
            </div>


            <div className="planner-selected-content">

              <p className="planner-selected-label">
                YOUR DESTINATION
              </p>

              <h3>
                {selectedDestination.name}
              </h3>

              <p className="planner-location">
                {selectedDestination.state} ·{" "}
                {selectedDestination.continent}
              </p>

              <p className="planner-selected-description">
                {selectedDestination.description}
              </p>


              <div className="planner-meta">

                <div>
                  <span>BEST TIME</span>
                  <strong>
                    {selectedDestination.bestTime}
                  </strong>
                </div>

                <div>
                  <span>EXPERIENCES</span>
                  <strong>
                    {selectedDestination.places?.length || 0} places
                  </strong>
                </div>

              </div>


              {/* AI FORM */}

              <div className="ai-planner-form">

                <div className="ai-form-heading">
                  <Sparkles size={18} />

                  <span>
                    CREATE YOUR AI ITINERARY
                  </span>
                </div>


                <div className="ai-form-grid">

                  <div className="ai-form-field">

                    <label>
                      NUMBER OF DAYS
                    </label>

                    <select
                      value={days}
                      onChange={(e) =>
                        setDays(Number(e.target.value))
                      }
                    >
                      <option value={1}>1 Day</option>
                      <option value={2}>2 Days</option>
                      <option value={3}>3 Days</option>
                      <option value={4}>4 Days</option>
                      <option value={5}>5 Days</option>
                      <option value={6}>6 Days</option>
                      <option value={7}>7 Days</option>
                    </select>

                  </div>


                  <div className="ai-form-field">

                    <label>
                      INTERESTS
                    </label>

                    <select
                      value={interests}
                      onChange={(e) =>
                        setInterests(e.target.value)
                      }
                    >
                      <option>
                        Culture & sightseeing
                      </option>

                      <option>
                        Food & local experiences
                      </option>

                      <option>
                        Adventure & nature
                      </option>

                      <option>
                        History & heritage
                      </option>

                      <option>
                        Relaxation & beaches
                      </option>
                    </select>

                  </div>


                  <div className="ai-form-field">

                    <label>
                      TRAVEL STYLE
                    </label>

                    <select
                      value={travelStyle}
                      onChange={(e) =>
                        setTravelStyle(e.target.value)
                      }
                    >
                      <option>
                        Budget
                      </option>

                      <option>
                        Balanced
                      </option>

                      <option>
                        Comfortable
                      </option>

                    </select>

                  </div>

                </div>


                <button
                  type="button"
                  className="ai-generate-button"
                  onClick={generateItinerary}
                  disabled={loading}
                >

                  {loading ? (
                    <>
                      <LoaderCircle
                        size={18}
                        className="ai-spinner"
                      />

                      Creating your itinerary...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />

                      Generate AI itinerary
                    </>
                  )}

                </button>

              </div>


              {/* ERROR */}

              {error && (
                <div className="ai-error">
                  {error}
                </div>
              )}


              {/* EXISTING ACTIONS */}

              <div className="planner-actions">

                <Link
                  to={`/destination/${selectedDestination.id}`}
                  className="planner-view-destination"
                >
                  View destination

                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </div>

          </div>
        )}


        {/* GENERATED ITINERARY */}

        {itinerary && (
          <section className="itinerary-section">

            <div className="itinerary-heading">

              <div>
                <p className="planner-section-label">
                  YOUR WANDERLY PLAN
                </p>

                <h2>
                  {itinerary.destination}
                </h2>
              </div>

              <div className="ai-badge">
                <Sparkles size={15} />
                AI GENERATED
              </div>

            </div>


            <p className="itinerary-summary">
              {itinerary.summary}
            </p>


            <div className="itinerary-days">

              {itinerary.days?.map((day) => (
                <article
                  className="itinerary-day"
                  key={day.day}
                >

                  <div className="day-number">
                    {String(day.day).padStart(2, "0")}
                  </div>


                  <div className="day-content">

                    <h3>
                      {day.title}
                    </h3>


                    <div className="day-timeline">

                      <div>
                        <span>MORNING</span>
                        <p>{day.morning}</p>
                      </div>

                      <div>
                        <span>AFTERNOON</span>
                        <p>{day.afternoon}</p>
                      </div>

                      <div>
                        <span>EVENING</span>
                        <p>{day.evening}</p>
                      </div>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

      </section>

    </div>
  );
}

export default Planner;