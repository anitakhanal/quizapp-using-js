var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById("quizcontainer");
var questionE1 = document.getElementById('question');
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextbutton = document.getElementById("nextbutton");
var resultcont= document.getElementById("result");

function loadQuestion(questionIndex){
    var q = questions(questionIndex);
    questionE1.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
function loadNextQuestion(){
    var selectedOption = document.querySelector('input[type:radio]:checked');
    if(!selectedOption){
        alert("please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 2;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextbutton.textContent = "Finish";

    }
    if(currentQuestion = totQuestions){
        container.style.display ="none";
        resultcont.style.display = "";
        resultcont.textContent = "your score:" + score;
        return;

    }
    loadQuestion(currentQuestion);



}
loadQuestion(currentQuestion);

