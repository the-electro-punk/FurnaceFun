const StartButton = document.getElementById('start-btn')

const questionBox = document.getElementById('question-container')

StartButton.addEventListener('click', startGame)

function startGame() {
    StartButton.classList.add('hide')
    questionBox.classList.remove('hide')
}

var questArray = ["This bird from Greek mythology is usually associated with fire and rising from the ashes after death:", "Kitsune are Japanese yokai that resemble which animal:", "Cerberus of Greek mythology had how many heads:"]