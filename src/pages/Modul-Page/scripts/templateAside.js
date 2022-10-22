const templateAside = ({no, title, isActive}) => {
    return `
        <span class="list-span ${isActive ? "active" : ""}" data-list=${no}>${no ? no+".": ""} ${title}</span><br>
    `
}

export default templateAside;