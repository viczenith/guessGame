// Computer Number Pick
const ComputerPick = Math.floor(Math.random() * 21);

const guessFeild = document.getElementById('guessFeild');
const result = document.getElementById('result');

let attempt = 0;

function guessGame(){
    let userGuess = parseInt(guessFeild.value);

    attempt++;

    if (userGuess === ComputerPick){
        result.textContent = `Congratulations, you have won with an attempt of ${attempt}`;
        result.style.color = 'green';
    }
    else if ((userGuess > 20) || (userGuess < 1)){
        result.textContent = 'Invalid Input, You must not exceed 20'
        result.style.color = 'red';
    }
    else if(userGuess < ComputerPick){
        result.textContent = 'Too Low, Try Again!'
        result.style.color = 'red';
    }
    else if (userGuess > ComputerPick){
        result.textContent = 'Too High, Try Again!'
        result.style.color = 'red';
    }
    else if (userGuess == 0){
        result.textContent = 'Invalid, Type a number.'
        result.style.color = 'red';
    }
    else{
        result.textContent = `Guess not correct, use numbers.`
        result.style.color = 'red';
    }

    guessFeild === '';
    guessFeild.focus();
    
}