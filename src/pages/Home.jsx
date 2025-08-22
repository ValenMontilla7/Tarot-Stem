import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>¡Bienvenid@s al mundo esotérico!</h1>
      <p>Sumérgete en el mundo de las cartas y el tarot y aprende a revelar tu futuro</p>
      <Link to="/cards">
        <button className="home-button">
          Empezar!
        </button>
      </Link>
    </div>
  );
}

export default Home;