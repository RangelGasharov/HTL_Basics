const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "How many elements are there in the Periodic table?",
        choice1: "118",
        choice2: "128",
        choice3: "120",
        choice4: "114",
        answer: 1
    },
    {
        question: "Which country has the highest coffee consumption per capita?",
        choice1: "Finland",
        choice2: "Sweden",
        choice3: "Italy",
        choice4: "USA",
        answer: 1
    },
    {
        question: "Which country has won the most Football World Cups?",
        choice1: "Argentina",
        choice2: "Germany",
        choice3: "France",
        choice4: "Brazil",
        answer: 4
    },
    {
        question: "Which Software comapany has its headquarter in Redmond, Washington?",
        choice1: "Facebook (Meta)",
        choice2: "Microsoft",
        choice3: "Adobe",
        choice4: "Oracle",
        answer: 2
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

function startGame() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if (classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

function incrementScore(points) {
    score += points
    scoreText.innerText = score
}

startGame()