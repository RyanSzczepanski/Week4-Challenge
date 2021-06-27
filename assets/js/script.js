var startBoxHtml = 
`
<section class="start-box">
    <h1>Welcome to the quiz game!</h1>
    <p>This quiz game will test you on your Javascript knowledge and time your quiz!  Do your best to answer the questions as quickly as possible but remeber answering incorectly will result in you losing 10 seconds</p>
    <button onclick="startQuiz()">Start Quiz!</button>
</section>
`
var questionBoxHtml = 
`
<section class="question-box">
    
</section>
`
var endBoxHtml = 
`
<section class="end-box">
    
</section>
`

var questions = 
[  
    {
        q: 'All are commonly used datatypes except for:', 
        o: ['Strings', 'Booleans','Alerts', 'Numbers'],
        a: 2,
     },
    {
        q: 'The condition in an if / else statement is enclosed within:', 
        o: ['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
        a: 1,
    },
    {
        q: 'Arrays in JavaScript can be used to store: ', 
        o: ['Numbers & Strings', 'Arrays', 'Booleans', 'All Of The Above'],
        a: 3,
    },
];

var quizBox;
var questionIndex = 0;

//wait for html to load
setTimeout(function() {
    quizBox = document.querySelector('.quiz-box')
}, 250);

function startQuiz() {

    quizBox.innerHTML = questionBoxHtml
    
    generateQuestion(questionIndex)
    //Start Timer
}

function generateQuestion() {
    _options = 
    `
    <h1>${questions[questionIndex].q}</h1>
    `

    for (var i = 0; i < questions[questionIndex].o.length; i++) {
        _options += 
        `
        <button onClick="submitAnswer('${i}')">${questions[questionIndex].o[i]}</button>
        `
        console.log('loops')
    }
    document.querySelector('.question-box').innerHTML = _options
    
}

function submitAnswer(i){
    if (questions[questionIndex].a == i){
        //Correct
    }
    else {
        //Wrong
    }
    questionIndex++;
    if(questionIndex == questions.length){
        //Answered last question
    }
    generateQuestion(questionIndex)
}

