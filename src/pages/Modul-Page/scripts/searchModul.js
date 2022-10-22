import getSearchModul from "../scripts/getSearchModul.js";
import getModul from "../scripts/getModul.js";
import templateCard from "../scripts/templateCard.js";

const searchModul = () => {
    const search = document.querySelector('.input-search');
    const modulContainer = document.querySelector('.list-modul');

    search.addEventListener('keyup', async(e) => {
        const moduls = await getSearchModul(e.target.value);

        if (moduls) {
            moduls.length > 0 
            ? modulContainer.innerHTML = moduls.map(modul => templateCard(modul)).join('') 
            : modulContainer.innerHTML = `<p class="text-center fs-4">Modul "<span class="fw-bold">${e.target.value}</span>" Tidak Ditemukan</p>`;
        } else {
            getModul();
        }
    })
}

export default searchModul;