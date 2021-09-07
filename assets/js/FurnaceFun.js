const StartButton = document.getElementById('start-btn')
const NextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

let shuffleQuestions, currentQuestionsIndex
const answerButtonsElement = document.getElementById('answer-buttons')

StartButton.addEventListener('click', startGame)
NextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    StartButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    console.log('setting next question')
    resetState()
    showQuestion(shuffleQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    console.log('question is visible')
    questionElement.innertext = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innertext = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addeventlistener('click', selectAnswer())
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    comsole.log('everything is reset')
    NextButton.classlist.add('hide')
    while (answerButtonsElement.firstchild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, coreect)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionsIndex + 1) {
        NextButton.classList.remove('hide')
    }
    else {
        StartButton.innertext = 'Restart'
        StartButton.classList.remove('hide')
    }
}

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

    const questions = [
    {question: 'This bird from Greek mythology is usually associated with fire and rising from the ashes after death:',
    answers: [ {text: 'Harpy', correct: false}, {text: 'Phoenix', correct: true}, {text: 'Cucco', correct: false} ]},
    {question: 'Kitsune are Japanese yokai that resemble which animal:',
    answers: [ {text: 'foxes', correct: true}, {text: 'leopards', correct: false}, {text: 'falcons', correct: false} ]},
    {question: 'Cerberus of Greek mythology had how many heads:',
    answers: [ {text: 'two', correct: false}, {text: 'three', correct: true}, {text: 'four', correct: false} ]}
]