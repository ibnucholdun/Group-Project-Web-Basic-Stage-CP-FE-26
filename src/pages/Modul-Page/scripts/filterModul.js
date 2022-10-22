import filterModulByCategory from "../scripts/getFilterModulByCategory.js";
import getModul from "../scripts/getModul.js";
import templateCard from "../scripts/templateCard.js";

const filterModul = () => {
    const checkbox = document.querySelectorAll(".form-check-input");
    const btnFilter = document.querySelector(".btn-filter");
    const modulContainer = document.querySelector(".list-modul");

    btnFilter.addEventListener("click", async (e) => {
        e.preventDefault(); 

        checkbox.forEach(async (check) => {
            if (check.checked) {
                const moduls = await filterModulByCategory(check.value);
                if (moduls) {
                    modulContainer.innerHTML = moduls.map(modul => templateCard(modul)).join('') 
                } else {
                    getModul();
                }
            }
        }
    )})
}

export default filterModul;