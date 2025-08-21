
const API_URL = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot";

export async function getCards() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function getCardById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}