import {templateCardInstructur}  from "../scripts/templatecard.js";

const API_URL = "https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/instructurs";
const instructurContainer = document.querySelector('.instructur-container');

const getInstructur = async () => {
    const response = await fetch(API_URL);
    const instructurs = await response.json();
    instructurs.forEach((instructur) => {
        instructurContainer.innerHTML += templateCardInstructur(instructur);
    });
}

export default getInstructur;