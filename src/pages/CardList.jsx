import { useEffect, useState } from "react";
import { getCards } from "../services/tarotService";
import { Link } from "react-router-dom";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(data => setCards(data));
  }, []);

  return (
    <div className="card-list-container">
      <h1>Tarot STEM</h1>
      <div className="card-grid">
        {cards.map(card => (
          <Link key={card.id} to={`/cards/${card.id}`}>
            <div className="card-item">
              Carta
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardList;