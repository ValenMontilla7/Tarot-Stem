import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenid@ al Tarot STEM</h1>
      <p>Explora las cartas y descubre su significado.</p>
      <Link to="/cards">
        <button className="home-button">
          Ver Cartas
        </button>
      </Link>
    </div>
  );
}

export default Home;