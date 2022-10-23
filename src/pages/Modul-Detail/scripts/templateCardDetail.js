const templateCardDetail = ({
    image,
    title,
    description,
}) => {
    return `
        <div class="p-5 detail-content">
            <h3 class="content-h3 text-center" data-title="${title}">${title}</h3>
            <img src="${image}" data-image="${image}" class="card-img-top p-2 card-image w-75 mx-auto d-block my-3" alt="${title}">
            <p class="w-100" data-description="${description}">${description}</p>
        </div>
    `
}

const templateCardDEtailMithVideo = ({ title, description, video }) => {
    return `
        <div class="p-5 detail-content">
            <h3 class="content-h3 text-center" data-title="${title}">${title}</h3>
            <div class="card-img-top p-2 card-image w-75 mx-auto d-block my-3">
            <iframe width="560" height="315" src="${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="w-100" data-description="${description}">${description}</p>
        </div>
    `
}

export {templateCardDetail, templateCardDEtailMithVideo};