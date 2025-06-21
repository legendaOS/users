import cardTemplate from './components/card.js';

function handleJson(data){
    console.log(data)
    cards = data

    renderCards(cards)
}

function handleErrorJson(error){
    console.error(error)
}

function handeResponse(response){
    response.json().then(handleJson).catch(handleErrorJson)
}

function handleError(error){
    console.error(error)
}

function renderCards(data){

    cardsContainer.innerHTML = ''

    for(let element of data){
        cardsContainer.insertAdjacentHTML('beforeend', cardTemplate(element));
    }
}

function handleButtonClick(){
    const randomCards = cards.sort(() => Math.random() - 0.5).slice(0, 4)
    renderCards(randomCards)
}


const cardsContainer = document.querySelector('.cards');

const button = document.querySelector('.button')

button.addEventListener('click', handleButtonClick)

let cards = []


fetch('https://mocki.io/v1/bd252c08-38c4-4c95-91e9-fdc06f77b18c')
    .then(handeResponse)
    .catch(handleError)


