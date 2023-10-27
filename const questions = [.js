const questions = [
    {
        question: "What is the capital of France?",
        choices: {
            A: "London",
            B: "Berlin",
            C: "Paris"
        },
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: {
            A: "Venus",
            B: "Mars",
            C: "Jupiter"
        },
        correctAnswer: "B"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    for (let choice in q.choices) {
        document.querySelector(`input[value="${choice}"]`).nextSibling.textContent = q.choices[choice];
    }
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) return;
    
    if (selectedChoice.value === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").textContent = `Your Score: ${score} out of ${questions.length}`;
}

displayQuestion();
document.getElementById("submit").addEventListener("click", checkAnswer);
