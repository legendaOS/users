import cardTemplate from './components/card.js';
import pageTemplate from './components/pageElement.js';

let cards = []
let cardsContainer

document.addEventListener('DOMContentLoaded', main)

function handleJson(data) {
    console.log(data)
    cards = data

    renderCards(cards.slice(0, 4))
}

function handleErrorJson(error) {
    console.error(error)
}

function handeResponse(response) {
    response.json().then(handleJson).catch(handleErrorJson)
}

function handleError(error) {
    console.error(error)
}

function renderCards(data) {

    cardsContainer.innerHTML = ''

    for (let element of data) {
        cardsContainer.insertAdjacentHTML('beforeend', cardTemplate(element));
    }
}

function handleButtonClick() {
    const randomCards = cards.sort(() => Math.random() - 0.5).slice(0, 4)
    renderCards(randomCards)
}



function handlePageClick() {

    const paginatorContainer = document.querySelector('.paginations')

    let currentClickedPage = (this.dataset.page - 1) * 4
    renderCards(cards.slice(currentClickedPage, currentClickedPage + 4))

    // console.log(this.firstElementChild.innerHTML)
}


function main() {
    cardsContainer = document.querySelector('.cards');

    const button = document.querySelector('.button')

    button.addEventListener('click', handleButtonClick)

    fetch('https://mocki.io/v1/bd252c08-38c4-4c95-91e9-fdc06f77b18c')
        .then(handeResponse)
        .catch(handleError)

    const paginatorContainer = document.querySelector('.paginations')

    for (let pageNumber = 1; pageNumber <= 25; pageNumber = pageNumber + 1) {
        paginatorContainer.insertAdjacentHTML('beforeend', pageTemplate(pageNumber))
    
        paginatorContainer.lastElementChild.addEventListener('click', handlePageClick)
    }

    paginatorContainer.firstElementChild.classList.add('button--active')
}