const templateCard = (template) => {
    return `
        <div class="col">
            <div class="card mx-auto" style="width: 15rem;">
                <img src="${template.image}" class="card-img-top p-2 card-image" alt="${template.title}">
                <div class="card-body">
                    <h5 class="card-title">${template.title}</h5>
                    <p class="text-end fw-light">Kategori: ${template.category}</p>
                    <p class="card-text pw-normal">${template.descript}</p>
                    <a href="#" class="btn btn-primary btn-card">Selengkapnya</a>
                </div>
            </div>
        </div>
        `
}

export default templateCard;