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

     // this will decide how many steps in the array to take to select the next question/ this allows the questions to be a (mostly) random order
    var y = Math.floor(Math.random() * 11) + 1
    console.log('y = ' + y)

    // this changes the question text into one of the questions from the array
    const questionElement = document.getElementById('question').textContent = questArray[x]
    console.log(questionElement)
    console.log(questArray[x])
}

// this array contains all the question so that the questionStart() function can choose a question based on a random number and the position of the question
var questArray = ["This bird from Greek mythology is usually associated with fire and rising from the ashes after death?", "Kitsune are Japanese yokai that resemble which animal?", "Cerberus of Greek mythology had how many heads?", "What makes a Unicorn different from a regular horse?", "the Leviathan is associated with...", "these dragons tend to have long slender bodies and lack wings.", "which greek monster had snakes for hair?", "this winged serpent was a god to the aztecs.", "which yokai is a female spirit associated with ice and snow?", "this jackal headed Egyptian diety was associated with mummification"]