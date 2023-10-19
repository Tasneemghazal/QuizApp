//array of object contains questions + answers
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    answer: "France",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: "Au",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Mercury", "Uranus"],
    answer: "Mars",
  },
  {
    question: "What is the largest species of shark?",
    options: [
      "Great White Shark",
      "Whale Shark",
      "Tiger Shark",
      "Hammerhead Shark",
    ],
    answer: "Whale Shark",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "Lion",
  },
  
];
const len = questions.length;
const questionText = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
let questionIndex = 0;
let score=0;
const nextBtn = document.getElementById("next-btn");
function startQuiz() {
  createQuestion();
}

function createQuestion() {
  resetState();
  let currQuestion = questions[questionIndex];
  questionText.innerHTML = currQuestion.question;
  for (let i = 0; i < currQuestion.options.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = questions[questionIndex].options[i];
    button.classList.add("btn");
    answerBtn.appendChild(button);
  }
  
  Array.from(answerBtn.children).forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.innerHTML == questions[questionIndex].answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("incorrect");
      }
      Array.from(answerBtn.children).forEach((btn) => {
        btn.disabled = true;
      });
     
      
      nextBtn.style.display = "block";
      showCorrectAnswer();
      nextBtn.addEventListener("click",showNextBtn);
      
     
    });
  });
  
}
function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}
function showCorrectAnswer() {
  Array.from(answerBtn.children).forEach((btn) => {
    if (btn.innerHTML == questions[questionIndex].answer) {
      btn.classList.add("correct");
    }
  });
}

function showNextBtn() {
    if (questionIndex < len) {
      handleNextBtn();
    } else {
      startQuiz();
    }
}
function handleNextBtn() {
  questionIndex++;
  if (questionIndex < len) {
    createQuestion();
  } else {
    resetState();
    questionText.innerHTML = ` Your Score is ${score}/${questionIndex}`;
  }
}
startQuiz();
