let score = 10;
document.getElementById('current').innerHTML = score

// random number function
const generateNumber = () => {
    return Math.trunc(Math.random()*100+1);
}

// get random choice
const randomchoice = generateNumber();

// logic to check whether user input is number
document.getElementById("submit1").addEventListener('click', function(){
    const uGuess = document.getElementById('guess').value;
    if (Number(uGuess) == randomchoice){
        document.getElementById('phrase').innerHTML = `${uGuess} is right!`;
        document.getElementById('high').innerHTML = `${score} `;
    }
    else if (Number(uGuess) < randomchoice){
        document.getElementById('phrase').innerHTML = `Your guess is too low`;
        score--;
        document.getElementById('current').innerHTML = score
    }
    else if (Number(uGuess) > randomchoice){
        document.getElementById('phrase').innerHTML = `Your guess is too high`;
        score--;
        document.getElementById('current').innerHTML = score
    }
    else{
        document.getElementById('phrase').innerHTML = 'Your guess is not within 1-100. Please try again';
    }
})

// Check if score is 0

