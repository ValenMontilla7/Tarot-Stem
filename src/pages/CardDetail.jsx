import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCardById } from "../services/tarotService";
import "./CardDetail.css";

function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    getCardById(id).then(data => setCard(data));
  }, [id]);

  if (!card) return <p>Cargando...</p>;

  return (
    <div className="card-detail-container">
      <h2>{card.arcaneName}</h2>
      <img src={card.arcaneImage.imageSrc} alt={card.arcaneName} width="200" />
      <p>{card.arcaneDescription}</p>

      <h3>Diosa contemporánea: {card.goddessName}</h3>
      <img src={card.goddessImage.imageSrc} alt={card.goddessName} width="200" />
      <p>{card.goddessDescription}</p>

      <Link to="/cards">🔙 Volver</Link>
    </div>
  );
}

export default CardDetail;