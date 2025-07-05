export default function pageElement(pageNumber){
    return `
        <button class="button" data-page="${pageNumber}">
                <span class="medium">${pageNumber}</span>
            </button>
    `
}