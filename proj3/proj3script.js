let score = 10;
document.getElementById('current').innerHTML = score

// random number function
const generateNumber = () => {
    return Math.trunc(Math.random()*100+1);
}


// get random choice
const randomchoice = generateNumber();

console.log(randomchoice)


// logic to check whether user input is number
document.getElementById("submit1").addEventListener('click', function(){
    const uGuess = document.getElementById('guess').value;
    if (Number(uGuess) == randomchoice){
        document.getElementById('phrase').innerHTML = `${uGuess} is right!`;
        document.getElementById('high').innerHTML = `${score} `;
        document.body.style.backgroundColor = 'green'
        document.getElementById('main').style.backgroundColor = 'lightgreen';
    }
    else if (Number(uGuess) < randomchoice){
        document.getElementById('phrase').innerHTML = `Your guess is too low`;
        score--;
        document.getElementById('current').innerHTML = score
        if (Number(document.getElementById('current').innerText) == 0){
            document.body.style.backgroundColor = 'red'
            document.getElementById('main').style.backgroundColor = 'pink';
        }
    }
    else if (Number(uGuess) > randomchoice){
        document.getElementById('phrase').innerHTML = `Your guess is too high`;
        score--;
        document.getElementById('current').innerHTML = score
        if (Number(document.getElementById('current').innerText) == 0){
            console.log(document.getElementById('current').innerText)
            document.body.style.backgroundColor = 'red'
            document.getElementById('main').style.backgroundColor = 'pink';
        }
    }
    else{
        document.getElementById('phrase').innerHTML = 'Your guess is not within 1-100. Please try again';
    }
})

