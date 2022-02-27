let score = 10;
document.getElementById('current').innerHTML = score


// random number function
const generateNumber = () => {
    return Math.trunc(Math.random()*100+1);
}

// get random choice
let randomchoice = generateNumber();
console.log(randomchoice)

// logic to check whether user input is number
document.getElementById("submit1").addEventListener('click', function(){
    const uGuess = document.getElementById('guess').value;
    if (Number(uGuess) == randomchoice){
        document.body.style.backgroundColor = 'green';
        document.getElementById('secret').innerHTML = `${uGuess}`;
        document.getElementById('guess').style.display = 'none';
        document.getElementById('submit1').style.display = 'none';
        document.getElementById('reset1').style.display = 'none';
        document.getElementById('reset2').style.display = 'flex';
        document.getElementById('picture').src='youwin.png';
        document.getElementById('picture').style.marginLeft = '20%';
        document.getElementById('win').style.display = 'flex';
        document.getElementById('main').style.backgroundColor = 'lightgreen';
        document.getElementById('phrase').style.display = 'none';
        document.getElementById('toprow1').style.marginTop = '-30px'
        document.getElementById('toprow1').style.justifyContent = 'left'
        document.getElementById('crs').innerHTML = document.getElementById('current').innerHTML;
        if (document.getElementById('high').innerHTML == 0) {
        document.getElementById('hi').innerHTML = document.getElementById('current').innerHTML
        }
        else if (document.getElementById('hi').innerHTML < score) {
            document.getElementById('hi').innerHTML = `${score}`
        }
        if (Number(document.getElementById('current').innerHTML) > Number(document.getElementById('high').innerHTML)){
            document.getElementById('high').innerHTML = `${score}`;
        }
    }
    else if (Number(uGuess) < randomchoice || (Number(uGuess) > randomchoice && Number(uGuess) <= 100)){
        document.getElementById('phrase').innerHTML = `Your guess is too low`;
        score--;
        document.getElementById('current').innerHTML = score
        if (Number(document.getElementById('current').innerText) == 0){
            document.body.style.backgroundColor = 'red';
            document.getElementById('secret').innerHTML = `${uGuess}`;
            document.getElementById('guess').style.display = 'none';
            document.getElementById('submit1').style.display = 'none';
            document.getElementById('reset1').style.display = 'none';
            document.getElementById('reset2').style.display = 'flex';
            document.getElementById('picture').src='lose.png';
            document.getElementById('picture').style.marginLeft = '20%';
            document.getElementById('lose').style.display = 'flex';
            document.getElementById('phrase').style.display = 'none';
            document.getElementById('toprow1').style.marginTop = '-80px'
            document.getElementById('toprow1').style.justifyContent = 'left'
            document.getElementById('main').style.backgroundColor = 'pink';
            
        }
    }

    else{
        document.getElementById('phrase').innerHTML = 'Your guess is not within 1-100. Please try again';
    }
    // append to list after every submit
    const node = document.createElement("li");
    const guess = document.createTextNode(uGuess);
    let guesslist = []

    if (guess in guesslist === false){
        node.appendChild(guess);
        guesslist.push(guess);
        console.log(guesslist)
        document.getElementById("guesslist").appendChild(node);
    }
    else {
        alert('You chose the same number');
        score++;
    }
}
)

//reset to initial 
document.getElementById("reset1").addEventListener('click', function(){
    score = 10
    document.getElementById('current').innerHTML = score;
    let randomchoice = Number(generateNumber());
    document.body.style.backgroundColor = 'aquamarine';
    document.getElementById('main').style.backgroundColor = 'peachpuff';
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('phrase').style.display = 'flex';
    document.getElementById('phrase').style.textAlign = 'center';
    document.getElementById('main').style.backgroundColor = "dodgerblue";
    document.getElementById('reset1').style.backgroundColor = 'lightcoral';
    document.getElementById('reset1').style.color = 'darkmagenta';
    document.getElementById('reset1').innerHTML = 'Reset';
    document.getElementById('guess').style.display = 'flex';
    document.getElementById('submit1').style.display = 'flex';
    document.getElementById('picture').src='initial.png';
})

document.getElementById("reset2").addEventListener('click', function(){
    score = 10
    document.getElementById('current').innerHTML = score;
    let randomchoice = Number(generateNumber());
    document.body.style.backgroundColor = 'aquamarine';
    document.getElementById('main').style.backgroundColor = 'peachpuff';
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('phrase').style.display = 'flex';
    document.getElementById('main').style.backgroundColor = "dodgerblue";
    document.getElementById('reset1').style.backgroundColor = 'lightcoral';
    document.getElementById('reset1').style.color = 'darkmagenta';
    document.getElementById('reset1').innerHTML = 'Reset';
    document.getElementById('guess').style.display = 'flex';
    document.getElementById('submit1').style.display = 'flex';
    document.getElementById('picture').src='initial.png';
})

