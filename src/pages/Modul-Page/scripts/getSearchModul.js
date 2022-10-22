const getSearchModul = async (search) => {
    try {
        const response = await fetch(`https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls?title=${search}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default getSearchModul;