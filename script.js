const quizData = [
    {
        question: "What's the biggest animal in the world?",
        a: 'The blue whale',
        b: 'Lion',
        c: 'Elephant',
        d: 'Shark',
        correct: 'a'
    }, 
    {
        question: 'Which country is brie cheese originally from?',
        a: 'Italy',
        b: 'Ukraine',
        c: 'France',
        d: 'China',
        correct: 'c'
    }, 
    {
        question: 'Who painted the Mona Lisa?',
        a: 'Ilya Repin',
        b: 'Michelangelo',
        c: 'Kazimir Malevich',
        d: 'Leonardo da Vinci',
        correct: 'd'
    }, 
    {
        question: 'Which planet is closest to the sun?',
        a: 'Earth',
        b: 'Mercury',
        c: 'Mars',
        d: 'Saturn',
        correct: 'b'
    }, 
    {
        question: 'What is the largest country in the world?',
        a: 'Russia',
        b: 'Canada',
        c: 'Brazil',
        d: 'China',
        correct: 'a'
    }
];
const answers = document.querySelectorAll('input[name="answer"]');
const questionElement = document.getElementById('question')
const quiz = document.querySelector('.quiz-inner');
const quizError = document.querySelector('.quiz-error');
const counterFact = document.getElementById('quiz-counter-fact');
const counterAll = document.getElementById('quiz-counter-all');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question; 
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    counterFact.innerText = currentQuiz + 1;
    counterAll.innerText = quizData.length;
}

function getSelected() {

    let answer = undefined;

    answers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answers.forEach(answerEl => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <div class="quiz-score">
                    <div class="score">Your score is ${score}/${quizData.length}</div>
                    <button class="retry" onclick="location.reload();">retry</button>
                </div>
            `
            submitBtn.remove();
        }
    } else {
        quizError.style.opacity = 1;
        setTimeout( () => {
            quizError.style.opacity = 0;
        },1000)
    }
})