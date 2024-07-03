console.log(document.querySelector('.js-button').classList.contains('js-button'));
            

function clicked(choice) {
    const button = document.querySelector(`.${choice}`)

    if (!button.classList.contains('button-on')){
        previousClicked();
        button.classList.add('button-on')
    }else {
        button.classList.remove('button-on')
    }
}


function previousClicked() {
    const previousButton = document.querySelector('.button-on')
    if (previousButton){
        previousButton.classList.remove('button-on')
    }
}