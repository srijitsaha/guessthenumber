let computerGuess
let userGuess = []
let maxGuess
let userGuessUpdate = document.getElementById("textOutput")
let userNumberUpdate = document.getElementById("inputBox")
let click = new Audio("clickSound.mp3")


// Initial Stage

const init = () => {
    computerGuess = Math.floor(Math.random() * 100)
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none"
    document.getElementById("gameArea").style.display = "none"
}

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none"
    document.getElementById("gameArea").style.display = "block"
}

const easyMode = () => {
    click.play()
    maxGuess = 10
    startGame()
}

const hardMode = () => {
    click.play()
    maxGuess = 5
    startGame()
}

// Main logic

const startNewGame = () => {
    // click.play()
    document.getElementById("newGameButton").style.display = "inline"
    userNumberUpdate.setAttribute("disabled", true)
}

const compareGuess = () => {
    click.play()
    const userNumber = Number(document.getElementById("inputBox").value)
    userGuess = [...userGuess, userNumber]
    document.getElementById("guesses").innerHTML = userGuess

    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High ☹"
            userNumberUpdate.value = ""
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low 🙃"
            userNumberUpdate.value = ""
        }
        else if (userNumber == computerGuess) {
            userGuessUpdate.innerHTML = "Congrats!!! It's Correct"
            userGuessUpdate.style.color = "#027a06"
            userNumberUpdate.value = ""
            startNewGame()
        }
        else {
            userGuessUpdate.innerHTML = "Some error occured"
            userNumberUpdate.value = ""
        }
    }
    else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `Sorry!!! You loose! Correct answer is : ${computerGuess}`
            userGuessUpdate.style.color = "#3cb52b"
            userNumberUpdate.value = ""
            startNewGame()
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `Sorry!!! You loose! Correct answer is : ${computerGuess}`
            userGuessUpdate.style.color = "#3cb52b"
            userNumberUpdate.value = ""
            startNewGame()
        }
        else if (userNumber == computerGuess) {
            userGuessUpdate.innerHTML = "Congrats!!! It's Correct"
            userGuessUpdate.style.color = "#027a06"
            userNumberUpdate.value = ""
            startNewGame()
        }
        else {
            userGuessUpdate.innerHTML = "Some error occured"
            userGuessUpdate.style.color = "#5ded4a"
            userNumberUpdate.value = ""
            startNewGame()
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length
}

const newGameBegin = () => {
    click.play()
    window.location.reload()
}
