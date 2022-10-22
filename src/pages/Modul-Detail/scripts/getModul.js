import templateCard from "../scripts/templateCard.js";

const API_URL = "https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls";
const modulContainer = document.querySelector('.list-modul');

const getModul = async () => {
    const response = await fetch(API_URL);
    const moduls = await response.json();
    moduls.forEach((modul) => modulContainer.innerHTML += templateCard(modul));
}

export default getModul;