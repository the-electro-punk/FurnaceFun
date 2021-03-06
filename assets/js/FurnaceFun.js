const StartButton = document.getElementById('start-btn')
const NextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset-btn')
const scoreBox = document.getElementById('scoreBox')
let finalScore = document.getElementById('score')

const StartingMinutes = 5;
let Time = StartingMinutes * 60
const countDownEl = document.getElementById('countdown');

var Score = 0
var totalQuest = 0

const FirstBTN = document.getElementById('btn-1')
const SecondBTN = document.getElementById('btn-2')
const ThirdBTN = document.getElementById('btn-3')
const questionBox = document.getElementById('question-container')

// this selects a value so a random question is chosen from the array
// use a for loop for Math.random
var startQuest = Math.floor(Math.random() * 10)
console.log('x = ' + startQuest)

// this will decide how many steps in the array to take to select the next question/ this allows the questions to be a (mostly) random order
// let Steps = Math.floor(Math.random() * 4) + 1
//     if (Steps ** 2 === 0 || Steps ** 5 === 0) {
//         Steps = Math.floor(Math.random() * 4) + 1
//     }
// console.log('y = ' + Steps)

StartButton.addEventListener('click', startGame)

resetButton.addEventListener('click', startGame)

// this removes the start button and creates the question
function startGame() {
    Score = 0
    totalQuest = 0

    NextButton.disabled = false
    FirstBTN.disabled = false
    SecondBTN.disabled = false
    ThirdBTN.disabled = false 

    StartButton.classList.add('hide')
    scoreBox.classList.add('hide')
    questionBox.classList.remove('hide')
    countDownEl.classList.remove('hide')
    console.log('start button clicked')
    questionStart()
    updateCountDown
}

function endGame() {
    NextButton.disabled = true
    FirstBTN.disabled = true
    SecondBTN.disabled = true
    ThirdBTN.disabled = true

    NextButton.classList.add('hide')
    questionBox.classList.add('hide')
    countDownEl.classList.add('hide')

    scoreBox.classList.remove('hide')
    finalScore.textContent = (Score + "/10")
}
// this determines the timer counts down
setInterval(updateCountDown, 1000)

// this function sets up the timer
function updateCountDown() {
    if (totalQuest < 10) {
    const minutes = Math.floor(Time / 60);
    let seconds = Time % 60;

    seconds = seconds < 5 ? '0' + seconds : seconds;

    countDownEl.textContent = `${minutes}: ${seconds}`
    Time--;
    }
    if (totalQuest >= 10) {
        endGame()
             
    }
}

function questionStart() {
        // this changes the question text into one of the questions from the array
        let questionElement = document.getElementById('question').textContent = questArray[startQuest]
        let First = document.getElementById('btn-1').textContent = answersOne[startQuest].text
        let Second = document.getElementById('btn-2').textContent = answersTwo[startQuest].text
        let Third = document.getElementById('btn-3').textContent = answersThree[startQuest].text
            
        // these were to test if the input was being made
        console.log(questionElement)
        console.log(First)
        console.log(Second)
        console.log(Third)
        }
// these determine which answer was selected
FirstBTN.addEventListener('click', ButtonOneCorrect)
SecondBTN.addEventListener('click', ButtonTwoCorrect)
ThirdBTN.addEventListener('click', ButtonThreeCorrect)

// this function is what happens AFTER an answer has been selected
// it shows which is correct/incorrect and display the next button
function selectAnswer() {
    NextButton.classList.remove('hide')
    FirstBTN.disabled = true
    SecondBTN.disabled = true
    ThirdBTN.disabled = true
    }

// // this function determines if, when clicked, that button 1 is true or false
function ButtonOneCorrect() {
    console.log("button 1 clicked")
    if (answersOne[startQuest].correct === true) {
        Score++;
        console.log("score is now " + Score)
        document.getElementById('btn-1').style.backgroundColor = "lightgreen";
        selectAnswer()
    }
    else {
        document.getElementById('btn-1').style.backgroundColor = "red";
        selectAnswer()
    }
}
// this function determines if, when clicked, that button 2 is true or false
function ButtonTwoCorrect() {
    if (answersTwo[startQuest].correct === true) {
        Score++;
        console.log("score is now " + Score)
        document.getElementById('btn-2').style.backgroundColor = "lightgreen";
        selectAnswer()
    }
    else {
        document.getElementById('btn-2').style.backgroundColor = "red";
        selectAnswer()
    }
}
// this function determines if, when clicked, that button 3 is true or false
function ButtonThreeCorrect() {
    if (answersThree[startQuest].correct === true) {
        Score++;
        console.log("score is now " + Score)
        document.getElementById('btn-3').style.backgroundColor = "lightgreen";
        selectAnswer()
    }
    else {
        document.getElementById('btn-3').style.backgroundColor = "red";
        selectAnswer()
    }
}

 NextButton.addEventListener('click', NextQuestion)

// this function pulls up the next question after clicking Next
function NextQuestion() {
    NextButton.classList.add('hide')
    document.getElementById('btn-1').style.backgroundColor = "lightgray";
    document.getElementById('btn-2').style.backgroundColor = "lightgray";
    document.getElementById('btn-3').style.backgroundColor = "lightgray";
   
    startQuest++
    if (startQuest >= 10) {
        startQuest = startQuest - 10
    }
        // document.getElementById('btn-1').style.color = "black";
        // document.getElementById('btn-2').style.color = "black";
        // document.getElementById('btn-3').style.color = "black";

        questionElement = document.getElementById('question').textContent = questArray[startQuest]
        First = document.getElementById('btn-1').textContent = answersOne[startQuest].text
        Second = document.getElementById('btn-2').textContent = answersTwo[startQuest].text
        Third = document.getElementById('btn-3').textContent = answersThree[startQuest].text

        // this re-enables the answer buttons
        FirstBTN.disabled = false
        SecondBTN.disabled = false
        ThirdBTN.disabled = false
        totalQuest++
        console.log("questions answered is " + totalQuest)
    }
  


// this array contains all the question so that the questionStart() function can choose a question based on a random number and the position of the question

const questArray = ["This bird from Greek mythology is usually associated with fire and rising from the ashes after death?", "Kitsune are Japanese yokai that resemble which animal?", "Cerberus of Greek mythology had how many heads?", "What makes a Unicorn different from a regular horse?", "the Leviathan is associated with which environment?", "these dragons tend to have long slender bodies and lack wings.", "which greek monster had snakes for hair?", "this winged serpent was a god to the aztecs.", "which yokai is a female spirit associated with ice and snow?", "this jackal headed Egyptian diety was associated with mummification"]

// these arrays contain the answers to insert into the answer buttons

// var answersThree = ["Cucco", "Falcons", "Four", "Fire Breath", "Sea", "Smaugs", "Nagas", "Tonatiuh", "Jorogumo", "Horus"]

// these arrays contain the answers that will be speciifed to each button
const answersOne = [{text: "Harpy", correct: false}, {text: "Foxes", correct: true}, {text: "Two", correct: false}, {text: "Wings", correct: false}, {text: "Land", correct: false}, {text: "Eastern Dragons", correct: true}, {text: "Sirens", correct: false}, {text: "Quetzalcoatl", correct: true}, {text: "Yuki-Onna", correct: true}, {text: "Anubis", correct: true}]

const answersTwo = [{text: "Phoenix", correct: true}, {text: "Leopards", correct: false}, {text: "Three", correct: true}, {text: "Horn", correct: true}, {text: "Air", correct: false}, {text: "Western Dragons", correct: false}, {text: "Gorgons", correct: true}, {text: "Tezcatlipoca", correct: false}, {text: "Rokurokubi", correct: false}, {text: "Ra", correct: false}]

const answersThree = [{text: "Cucco", correct: false}, {text: "Falcons", correct: false}, {text: "Four", correct: false}, {text: "Fire Breath", correct: false}, {text: "Sea", correct: true}, {text: "Smaugs", correct: false}, {text: "Nagas", correct: false}, {text: "Tonatiuh", correct: false}, {text: "Jorogumo", correct: false}, {text: "Horus", correct: false}]