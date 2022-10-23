const templateAside = ({no, title, isActive}) => {
    return `
        <li class="list-span ${isActive ? "active" : ""}" data-list=${no}>${no ? no+".": ""} ${title}</li>
    `
}

export default templateAside;