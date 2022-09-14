const lowerValue = 1
const highestValue = 300
const secretNumber = randomNumber()

function randomNumber () {
    return parseInt(Math.random() * highestValue + 1 )
}

console.log("Secret Number:", secretNumber)

const lowerValueElement = document.getElementById('menor-valor')
lowerValueElement.innerHTML = lowerValue
const highestValueElement = document.getElementById('maior-valor')
highestValueElement.innerHTML = highestValue


