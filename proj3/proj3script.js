const score = 10

const generateNumber = () => {
    return Math.trunc(Math.random()*1+1)
}

const randomchoice = generateNumber()
console.log(randomchoice)

document.getElementById("submit").addEventListener("click",function(){
    if (document.getElementById("guess").value == generateNumber()){
        console.log('Same')
    }
})