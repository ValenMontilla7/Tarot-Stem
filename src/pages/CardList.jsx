import { useEffect, useState } from "react";
import { getCards } from "../services/tarotService";
import { Link } from "react-router-dom";
import './CardList.css';


function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(data => setCards(data));
  }, []);

  return (
    <div className="card-list-container">
      <h1>𖤓EL FUTURO NO SE IMPROVISA, SE PREPARA𖤓</h1>
      <div className="card-grid">
        {cards.map(card => (
          <Link key={card.id} to={`/cards/${card.id}`}>
            <div className="card-item">
  <img
    src={card.arcaneImage.imageSrc}
    alt={card.arcaneName}
    className="card-thumbnail"
  />
  <p>{card.arcaneName}</p>
</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardList;