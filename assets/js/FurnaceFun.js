const StartButton = document.getElementById('start-btn')

const questionBox = document.getElementById('question-container')

StartButton.addEventListener('click', startGame)

function startGame() {
    StartButton.classList.add('hide')
    questionBox.classList.remove('hide')
    console.log('start button clicked')
    questionStart()
}
function questionStart() {

    // this selects a value so a random question is chosen from the array
    var x = Math.floor(Math.random() * 10)
    console.log('x = ' + x)
// use a for loop for Math.random

     // this will decide how many steps in the array to take to select the next question/ this allows the questions to be a (mostly) random order
    var y = Math.floor(Math.random() * 6) + 1
    console.log('y = ' + y)

    // this changes the question text into one of the questions from the array
    let questionElement = document.getElementById('question').textContent = questArray[x]
    let First = document.getElementById("btn-1").textContent = answersOne[x]
    let Second = document.getElementById("btn-2").textContent = answersTwo[x]
    let Third = document.getElementById("btn-3").textContent = answersThree[x]
    
    // these were to test if the input was being made
    console.log(questionElement)
    console.log(First)
    console.log(Second)
    console.log(Third)
}

// this array contains all the question so that the questionStart() function can choose a question based on a random number and the position of the question

var questArray = ["This bird from Greek mythology is usually associated with fire and rising from the ashes after death?", "Kitsune are Japanese yokai that resemble which animal?", "Cerberus of Greek mythology had how many heads?", "What makes a Unicorn different from a regular horse?", "the Leviathan is associated with which environment?", "these dragons tend to have long slender bodies and lack wings.", "which greek monster had snakes for hair?", "this winged serpent was a god to the aztecs.", "which yokai is a female spirit associated with ice and snow?", "this jackal headed Egyptian diety was associated with mummification"]

// these arrays contain the answers to insert into the answer buttons
// var answersOne = ["Harpy", "Foxes", "Two", "Wings", "Land", "Eastern Dragons", "Sirens", "Questzalcoatl", "Yuki-Onna", "Anubis"]
// var answersTwo = ["Phoenix", "Leopards", "Three", "Horn", "Air", "Western Dragons", "Gorgons", "Tezcatlipoca", "Rokurokubi", "Ra"]
// var answersThree = ["Cucco", "Falcons", "Four", "Fire Breath", "Sea", "Smaugs", "Nagas", "Tonatiuh", "Jorogumo", "Horus"]

var answers = [{"Harpy", "Phoenix", "Cucco"}]