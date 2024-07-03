let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};

updateScoreElement();

let computer = '';

function computerMove(){
    randNum = Math.random();
    if(randNum < 1 / 3){
        computer = 'Rock';
    } else if(randNum < 2 / 3){
        computer = 'Paper';
    } else {
        computer = 'Scissors';
    }

    console.log(computer);
}

function play(rock, paper, scissors){
    let result = '';

    if (computer === rock){
        result = 'Tie'
    } else if (computer === paper){
        result = 'You Lose.'
    } else if (computer === scissors){
        result = 'You Win.'
    }

    

    if (result == 'Win'){
        score.win ++;
    } else if (result == 'Lose'){
        score.lose ++;
    } else if (result == 'Tie'){
        score.tie ++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    
    updateScoreElement();
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.pick').innerHTML = `You
    <img class="move-icon" src="./images/${rock}-emoji.png">
    <img class="move-icon" src="./images/${computer}-emoji.png">
    Computer`;

}

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}
    `;
}