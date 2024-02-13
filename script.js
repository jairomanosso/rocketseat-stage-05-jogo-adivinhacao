const number = Math.round(Math.random() * 10)
let numAttempt = 0

function clickTry (event) {
    event.preventDefault()
    numAttempt++

    const inputTry = document.querySelector('#inputNumber')

    if (Number(inputTry.value) === number) {
        document.querySelector('#screen-one').classList.add('hide')
        document.querySelector('#screen-two').classList.remove('hide')
        
        document.querySelector('#screen-two h2').innerText = `Acertou em ${numAttempt} tentativa(s)!`
    }
}

document.querySelector('#btnTry').addEventListener('click', clickTry)

document.querySelector('#btnReset').addEventListener('click', () => {location.reload()})
