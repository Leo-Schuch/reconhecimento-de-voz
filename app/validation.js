function verifyIfRandomIsValid(chute) {
    const numero = +chute
    if (verifyIfRandomIsInvalid(numero)){
        elementRandom.innerHTML += '<div>valor invalido</div>'
        return
    }
    if(numberHigherOrLowerThanAllow(numero)){
        elementRandom.innerHTML += `<div>valor invalido: precisa estar entre ${lowerValue} e ${highestValue}</div>`
        return
    }
    if (numero === secretNumber) {
        document.body.innerHTML = `<h2> voce acertou!</h2>
        <h3>o numero secreto era ${secretNumber}</h3>
        
        <button id= "jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > secretNumber){
        elementRandom.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementRandom.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}
function verifyIfRandomIsInvalid (numero){
    return Number.isNaN(numero)
}

function numberHigherOrLowerThanAllow(numero){
    return numero > highestValue || numero < lowerValue
}

document.body.addEventListener('click', e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})

