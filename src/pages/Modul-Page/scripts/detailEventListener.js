export const asideEventListener = () => {
    const listSpans = document.querySelectorAll('.list-span')
    listSpans.forEach((listSpan) => {
        listSpan.addEventListener('click',(e)=>{
            console.log(e.target.dataset.list)
        })
    })
}