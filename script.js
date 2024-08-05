const quizData = [
    {
        question: "What is  the full form of CSS?",
        options: ["Cascading Style Sheet", "Counter Strike Source", "Corrective Style Sheet", "Computer Style Sheet"],
        correct: 0
    },
    {
        question: "The client-side JavaScript asynchronous programming model contains ",
        options: ["User interface events", "NONE", "Timers and error handlers", "API"],
        correct: 2
    },
    {
        question: "Which symbol is used separate JavaScript statements?",
        options: ["Semicolon(;)", "Colon(:)", "Comma(,)", "Fullstop(.)"],
        correct: 0
    },
    {
        question: "Which property is used to align text to the center in CSS?",
        options: ["align-items", "text-align", "float", "justify-content"],
        correct: 1
    },
    {
        question: "Which function is used to iterate over an array and perform an operation on each element? ",
        options: ["Array.find()", "Array.forEach()", "Array.filter()", "Array.sort()"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerHTML = quizData[currentQuestion].question;
document.getElementById("options").innerHTML = quizData[currentQuestion].options.map((option, index) => {
    return `<li><input type="radio" id="option${index}" name="option">
                <label for="option${index}">${option}</label>
            </li>`;
}).join("");

document.getElementById("submit").addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.id.replace("option", ""));
        if (selectedIndex === quizData[currentQuestion].correct) {            
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            document.getElementById("question").innerHTML = quizData[currentQuestion].question;
            document.getElementById("options").innerHTML = quizData[currentQuestion].options.map((option, index) => {
                return `<li><input type="radio" id="option${index}" name="option">
                            <label for="option${index}">${option}</label>
                        </li>`;
            }).join("");
        } else {
            document.getElementById("result").innerHTML = `Your score is ${score} out of ${quizData.length}`;
        }
    }
});

document.querySelectorAll('input[name="option"]').forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
        document.getElementById("submit").disabled = false;
    });
});