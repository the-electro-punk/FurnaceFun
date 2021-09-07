const StartButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

StartButton.addEventListerner('click', startGame)

function startGame() {
    console.log('started')
    StartButton.classList.add('hide')
}

function setNextQuestion() {

}

function selectAnswer() {

}