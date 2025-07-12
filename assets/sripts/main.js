import cardTemplate from './components/card.js';
import pageTemplate from './components/pageElement.js';

let cards = []
let cardsContainer
let currentPage = 1

document.addEventListener('DOMContentLoaded', main)

function handleSkipButtonClickLeft() {
    currentPage = currentPage - 1

    if (currentPage < 1) {
        currentPage = 25
    }

    const paginatorContainer = document.querySelector('.paginations')

    let currentClickedPage = (currentPage - 1) * 4
    renderCards(cards.slice(currentClickedPage, currentClickedPage + 4))

    paginatorContainer.querySelector('.button--active').classList.remove('button--active')

    paginatorContainer.children[currentPage - 1].classList.add('button--active')
}

function handleSkipButtonClickRight() {

    currentPage = currentPage + 1

    if (currentPage > 25) {
        currentPage = 1
    }

    const paginatorContainer = document.querySelector('.paginations')

    let currentClickedPage = (currentPage - 1) * 4
    renderCards(cards.slice(currentClickedPage, currentClickedPage + 4))

    paginatorContainer.querySelector('.button--active').classList.remove('button--active')

    paginatorContainer.children[currentPage - 1].classList.add('button--active')
}

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

    currentPage = this.dataset.page

    const paginatorContainer = document.querySelector('.paginations')

    let currentClickedPage = (this.dataset.page - 1) * 4
    renderCards(cards.slice(currentClickedPage, currentClickedPage + 4))

    paginatorContainer.querySelector('.button--active').classList.remove('button--active')
    this.classList.add('button--active')
    
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

    document.querySelector('.pages__skip_button--left').addEventListener('click', handleSkipButtonClickLeft)
    document.querySelector('.pages__skip_button--right').addEventListener('click', handleSkipButtonClickRight)
}