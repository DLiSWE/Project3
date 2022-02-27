let score = 1;
const guesslist = [];

// random number function
const generateNumber = () => {
    return Math.trunc(Math.random()*100+1);
}

// get random choice
let randomchoice = generateNumber();
console.log(randomchoice);

document.getElementById('current').innerText = score

function changeStyling (status, uGuess){
    if (status === false){
        score--;
        console.log(score)
        document.getElementById('current').innerText = score
        if (Number(document.getElementById('current').innerText) == 0){
            document.body.style.backgroundColor = 'red';
            document.getElementById('secret1').innerText = `${randomchoice}`;
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
    else {
        document.body.style.backgroundColor = 'green';
        document.getElementById('secret').innerText = `${uGuess}`;
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
        document.getElementById('crs').innerText = document.getElementById('current').innerText;
    }
}

// logic to check whether user input is number
document.getElementById("submit1").addEventListener('click', function(){
    const uGuess = document.getElementById('guess').value;
    if (Number(uGuess) == randomchoice){
        changeStyling(true, uGuess)
        if (document.getElementById('high').innerText == 0) {
        document.getElementById('hi').innerText = document.getElementById('current').innerText
        }
        else if (document.getElementById('hi').innerText < score) {
            document.getElementById('hi').innerText = `${score}`
        }
        if (Number(document.getElementById('current').innerText) > Number(document.getElementById('high').innerText)){
            document.getElementById('high').innerText = `${score}`;
        }
    }
    // if guess is < randomchoice OR (guess is > randomchoice AND guess <= 100)
    else if (Number(uGuess) < randomchoice && Number(uGuess) >= 0){
        document.getElementById('phrase').innerText = `Your guess is too low`;
        changeStyling(false)
    }
    else if (Number(uGuess) > randomchoice && Number(uGuess) <= 100){
        document.getElementById('phrase').innerText = `Your guess is too high`;
        changeStyling(false)
    }
    else {
        document.getElementById('phrase').innerText = 'Your guess is not within 1-100. Please try again';
    }   
    // append to guess list after every submit
    const node = document.createElement("li");
    const guess = document.createTextNode(uGuess);

    if (!(guesslist.includes(uGuess))){
        node.appendChild(guess);
        guesslist.push(uGuess);
        console.log(guesslist)
        document.getElementById("guesslist").appendChild(node);
    }
    else {
        alert('You chose the same number');
        score++;
    }
    })
// reset function
function reset(){
    score = 10
    randomchoice = generateNumber();
    guesslist.length = 0
    document.getElementById("guesslist").innerText = 'Guesses: '
    console.log(randomchoice)
    document.getElementById('current').innerText = score;
    document.body.style.backgroundColor = 'aquamarine';
    document.getElementById('main').style.backgroundColor = 'peachpuff';
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('phrase').style.display = 'flex';
    document.getElementById('phrase').innerText = 'Enter your guess here';
    document.getElementById('main').style.backgroundColor = "dodgerblue";
    document.getElementById('reset1').style.display = 'flex';
    document.getElementById('toprow1').style.marginTop = '-15px';
    document.getElementById('toprow1').style.justifyContent = 'space-between';
    document.getElementById('reset1').style.backgroundColor = 'lightcoral';
    document.getElementById('reset1').style.color = 'darkmagenta';
    document.getElementById('reset1').innerHTML = 'Reset';
    document.getElementById('guess').style.display = 'flex';
    document.getElementById('submit1').style.display = 'flex';
    document.getElementById('picture').src='initial.png';
    document.getElementById('picture').style.marginLeft = 'unset';
}

// top right corner reset
document.getElementById("reset1").addEventListener('click', reset)
// reset button after win/loss on bottom
document.getElementById("reset2").addEventListener('click', reset)
document.getElementById("reset3").addEventListener('click', reset)
