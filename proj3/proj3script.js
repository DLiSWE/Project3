const score = 10
const generateNumber = () => {
    return Math.trunc(Math.random()*100+1)
}
const randomchoice = generateNumber()

document.getElementById("submit").addEventListener('click', function(){
    const uGuess = document.getElementById('guess').value
    if (uGuess == randomchoice){
        console.log('It is equal')
    }
    else if (uGuess < randomchoice){
        console.log('Your guess is too low try again')
    }
    else {
        console.log('Your guess is too high')
    }
})

// const checker = () => {
//     const userguess = document.getElementById('guess');
//     console.log(userguess.value);
// }



// document.getElementById("submit").addEventListener("click",checker)