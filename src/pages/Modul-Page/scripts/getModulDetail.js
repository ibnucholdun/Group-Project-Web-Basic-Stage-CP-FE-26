import templateCardDetail from "../scripts/templateCardDetail.js";
import { asideEventListener } from "./detailEventListener.js";
import templateAside from "./templateAside.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const API_URL = `https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls/${params.id}/content/${params.id}`;
const list = document.querySelector(".list")
const testResponse = document.querySelector('#response');

const getModulDetail = async () => {
    const response = await fetch(API_URL);
    const { id, contents } = await response.json();
    console.log()
    contents.forEach((content, idx)=> list.innerHTML += templateAside({no:idx+1, title: content.title}))
    testResponse.innerHTML = templateCardDetail(contents[0])
    asideEventListener()
}

getModulDetail()