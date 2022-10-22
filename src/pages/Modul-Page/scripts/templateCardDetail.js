const templateCardDetail = ({
    image,
    title,
    description,
}) => {
    return `
        <div class="p-5 detail-content">
            <h3 class="content-h3">${title}</h3>
            <img src="${image}" class="card-img-top p-2 card-image w-75 mx-auto d-block my-3" alt="${title}">
            <p class="w-100">${description}</p>
            <div class="d-flex justify-content-between">
                <button class="btn-hero">Sebelumnya</button>
                <button class="btn-hero">Selanjutnya</button>
            </div>
        </div>
    `
}

export default templateCardDetail;