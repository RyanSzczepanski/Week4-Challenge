var startBoxHtml = 
`
<section class="start-box">
    <h1>Welcome to the quiz game!</h1>
    <p>This quiz game will test you on your Javascript knowledge and time your quiz!  Do your best to answer the questions as quickly as possible but remeber answering incorectly will result in you losing 10 seconds</p>
    <button onclick="startQuiz()">Start Quiz!</button>
</section>
`

var questions = 
    [{
    q: 'test or test 2.', 
    o: ['test', 'test2'],
    a: 0
     },
    {
    q: 'test or test 2.', 
    o: ['test', 'test2'],
    a: 0
    }];


function startQuiz() {
    var quizBox = document.querySelector('.quiz-box')
    var startBox = document.querySelector('.start-box')
    quizBox.innerHTML = startBoxHtml
    
    console.log("QUIZ STARTED")
}