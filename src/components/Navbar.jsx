import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        WANDERLY
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/planner">AI Planner</Link>
      </nav>

      <Link to="/explore" className="navbar-button">
        Start Exploring
        <ArrowUpRight size={16} />
      </Link>
    </header>
  );
}

export default Navbar;