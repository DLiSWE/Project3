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

        document.getElementById('current').innerText = score
        if (Number(document.getElementById('current').innerText) == 0){
            document.body.style.backgroundColor = 'red';
            document.getElementById('main').style.backgroundImage = 'none';
            document.getElementById('main').style.backgroundImage = "url('angry.gif')";
            document.getElementById('main').style.backgroundPositionX = "75px";
            document.getElementById('main').style.backgroundPositionY = "50px";
            document.getElementById('main').style.backgroundRepeat = "no-repeat";
            document.getElementById('secret1').innerText = `${randomchoice}`;
            document.getElementById('guess').style.display = 'none';
            document.getElementById('guesshist').style.backgroundColor = '#9c1f17';
            document.getElementById('scoreboard').style.backgroundColor = '#9c1f17';
            document.getElementById('submit1').style.display = 'none';
            document.getElementById('reset1').style.display = 'none';
            document.getElementById('reset2').style.display = 'flex';
            document.getElementById('picture').src='lose.png';
            document.getElementById('picture').style.marginLeft = '20%';
            document.getElementById('lose').style.display = 'flex';
            document.getElementById('phrase').style.display = 'none';
            document.getElementById('toprow1').style.marginTop = '-65px';
            document.getElementById('toprow1').style.justifyContent = 'left';
            document.getElementById('main').style.backgroundColor = 'pink';
        }
    }
    else {
        document.body.style.backgroundColor = '#273B37';
        document.getElementById('main').style.backgroundImage = "url('win_animation.gif')";
        document.getElementById('main').style.backgroundColor = '#ff7e06';
        document.getElementById('secret').innerText = `${uGuess}`;
        document.getElementById('guess').style.display = 'none';
        document.getElementById('submit1').style.display = 'none';
        document.getElementById('reset1').style.display = 'none';
        document.getElementById('reset2').style.display = 'flex';
        document.getElementById('win').style.display = 'flex';
        document.getElementById('guesshist').style.backgroundColor = '#732c91';
        document.getElementById('guesshist').style.color = '#51b077';
        document.getElementById('scoreboard').style.backgroundColor = '#fe3300';
        document.getElementById('scoreboard').style.color = 'white';
        document.getElementById('guesslist').style.color = 'black';
        document.getElementById('phrase').style.display = 'none';
        document.getElementById('toprow1').style.marginTop = '-30px'
        document.getElementById('toprow1').style.justifyContent = 'left'
        document.getElementById('crs').innerText = document.getElementById('current').innerText;
    }
}

// logic to check whether user input is number
document.getElementById("submit1").addEventListener('click', function(){
    score--;
    console.log(score)
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
        document.getElementById('phrase').innerText = 'Your guess is invalid. Please try again';
    }   
    // append to guess list after every submit
    const node = document.createElement("li");
    const guess = document.createTextNode(uGuess);

    if (!(guesslist.includes(uGuess))){
        node.appendChild(guess);
        guesslist.push(uGuess);
        console.log(guesslist);
        document.getElementById("guesslist").appendChild(node);
    }
    else{
        score++;
        document.getElementById('current').innerText = `${score}`
        console.log(score)
        document.getElementById('modal').style.display = "block";
    }
})
// reset function
function reset(){
    score = 10
    randomchoice = generateNumber();
    console.log(randomchoice)
    guesslist.length = 0
    document.getElementById("guesslist").innerText = 'Guesses: '
    document.getElementById('current').innerText = score;
    document.body.style.backgroundColor = '#EE8651';
    document.getElementById('main').style.backgroundColor = '#ffca5a';
    document.getElementById('main').style.backgroundPosition = 'unset';
    document.getElementById('win').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('phrase').style.display = 'flex';
    document.getElementById('phrase').innerText = 'Enter your guess here';
    // changed it to backgroundImage
    document.getElementById('main').style.backgroundImage = "url('questionmark-dribbble.gif')";
    document.getElementById('reset1').style.display = 'flex';
    document.getElementById('toprow1').style.marginTop = '-18px';
    document.getElementById('toprow1').style.justifyContent = 'space-between';
    document.getElementById('reset1').style.backgroundColor = '#EE8651';
    document.getElementById('reset1').style.color = 'white';
    document.getElementById('reset1').innerHTML = 'Reset';
    document.getElementById('guess').style.display = 'flex';
    document.getElementById('guesslist').style.color = 'white';
    document.getElementById('submit1').style.display = 'flex';
    document.getElementById('guess').value = '';
    document.getElementById('guesshist').style.backgroundColor = '#9C5221';
    document.getElementById('scoreboard').style.backgroundColor = '#0073bb'
}

function hide(){
    document.getElementById('modal').style.display = 'none';
}

// top right corner reset
document.getElementById("reset1").addEventListener('click', reset)
// reset button after win/loss on bottom
document.getElementById("reset2").addEventListener('click', reset)
document.getElementById("reset3").addEventListener('click', reset)



        // picture.animate([
        //     {transform: 'translate (0deg)'},
        //     {transform: 'rotate(270deg'}
        // ], {
        //     duration: 2000,
        //     easing: 'ease-in-out',
        //     iterations: Infinity,
        //     fill: 'forwards'
        // });