//Setup Variables
var quizBox;
var questionIndex;
var timeLeft = 0;

//Setup HTML Variables
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
    <h1>Congratulations, your done!</h1>
    <p>Your score is: </p>
    <input type="text" id="initials" name="initials" required>
    <input type="submit" value="Submit" onclick="storeInitials(), generateHighScoreList()">
</section>
`
var highscoreBoxHtml = 
`
<section class="highscore-box">
    <h1>HighScores</h1>
    <section class="scores">
    </section>
    <button onclick="loadBox(startBoxHtml)">Go Back</button>
    <button onclick="clearHighScores()">Clear HighScores</button>
</section>
`

//Setup Question Variables
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

//wait for html to load
setTimeout(function() {
    quizBox = document.querySelector('.quiz-box')
}, 250);

function loadBox(_box) {
    quizBox.innerHTML = _box
}

function startQuiz() {
    questionIndex = 0;
    loadBox(questionBoxHtml)
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
    }
    document.querySelector('.question-box').innerHTML = _options
    
}

function generateHighScoreList() {
    loadBox(highscoreBoxHtml)
    for (i = 0; localStorage.length; i++) {
        if (localStorage.key(i) === null) {
            return
        }
        console.log(localStorage.key(i))
    }
}

function submitAnswer(i){
    if (questions[questionIndex].a == i){
        //Correct
    }
    else {
        //Wrong
    }
    questionIndex++;

    if(questionIndex == questions.length) {
        //Answered last question
        quizBox.innerHTML = endBoxHtml
        document.querySelector('.end-box p').innerHTML += timeLeft; //Add the time left to the final screen
    }
    else {
        //If this is not the last question
        generateQuestion(questionIndex)
    }
    
}

function storeInitials() {
    if (document.querySelector('#initials').value == "") { return; }
    localStorage.setItem(document.querySelector('#initials').value, timeLeft);
}



function clearHighScores() {
    localStorage.clear()
}