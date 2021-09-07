const StartButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

let shuffleQuestions, currentQuestionsIndex
const answerButtonsElement = document.getElementById('answer-buttons')

StartButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    StartButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innertext = question.question
}

function selectAnswer() {

}

const questions= [
    {
    question: 'This bird from Greek mythology is usually associated with fire and rising from the ashes after death:',
    answers: [
        {text: 'Harpy', correct: false},
        {text: 'PHhoenix', correct: true},
        {text: 'Cucco', correct: false}
    ]
}
]