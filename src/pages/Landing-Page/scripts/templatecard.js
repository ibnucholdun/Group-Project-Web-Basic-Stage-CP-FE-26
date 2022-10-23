const templateCard = (template) => {
    return `
        <div class="swiper-slide">
        <div class="card" style="width: 20rem;">
            <img src="${template.image}" class="card-img-top p-2 card-image" alt="${template.title}">
            <div class="card-body">
                <h5 class="card-title">${template.title}</h5>
                <p class="text-end fw-light">Kategori: ${template.category}</p>
                <p class="card-text pw-normal">${template.descript}</p>
                <a href="src/pages/Sign-In/signin.html" class="btn btn-primary btn-card">Selengkapnya</a>
            </div>
        </div>
        </div>
        `
}

const templateCardInstructur = (template) => {
    return `
        <div class="swiper-slide">
        <div class="card" style="width: 20rem; height: 350px;">
            <img src="${template.image}" class="card-img-top img-instructur pt-3 mx-auto d-block rounded-circle" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${template.name}</h5>
                <p class="card-description pw-normal">${template.descript}</p>
            </div>
        </div>
        </div>`
}

export {templateCard, templateCardInstructur};