const buttons = document.querySelectorAll('.button__primary');


for(let button of buttons){
    button.addEventListener('click', handleButtonClick);
}

// function handleButtonClick(){
    
//     const textToRerender = this.nextElementSibling
    
//     textToRerender.classList.toggle('card__footer_text_active');
// }

function handleButtonClick(){  
    const additionalFotter = this.parentElement.parentElement.parentElement.lastElementChild

    additionalFotter.insertAdjacentHTML('beforeend', '<span class="regular">привет</span>');
}
