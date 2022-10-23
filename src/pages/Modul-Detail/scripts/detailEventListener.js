import {templateCardDetail, templateCardDEtailMithVideo} from "../scripts/templateCardDetail.js";
export const asideEventListener = () => {
    const listSpans = document.querySelectorAll('.list-span')
    listSpans.forEach((listSpan) => {
        listSpan.addEventListener('click',async (e)=>{
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            const response = await fetch(`https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls/${params.id}/content/${params.id}`);
            const { contents } = await response.json();
            const testResponse = document.querySelector('#response');
            const {title, description, image, video} = contents[e.target.dataset.list-1]
            if (video) {
                testResponse.innerHTML = templateCardDEtailMithVideo({title, description, video})
            }
            else {
                testResponse.innerHTML = templateCardDetail({title, description, image})
            }

            listSpans.forEach((listSpan) => {
                listSpan.classList.remove('active')
            }
            )
            e.target.classList.add('active')
        })
    })
}