
//play theme song on load

    $("#theme").get(0).play();
    $("answer-box").hide();
    $(".quiz-intro").hide();


// click continue //

$(".question-box").hide();
$("#portrait").hide();
$(".quiz-intro").show("slow");
$("#continue").click(function(){
	$("#portrait").fadeIn("slow");
	$(".quiz-intro").fadeOut("fast");
	$(".question-box").fadeIn(getNextQuestion);
});



//quiz questions object//

 var score = []
 var quiz = [{
 		question: "Why was Ned Stark beheaded?",
 		choices: ['Treason', 'Leaving Westeros', "Refusing to be the King's hand", "Trying to have Joffrey killed"],
 		correctAnswer: 0,
 		image: "images/1.png"
 			
 },
 { 
 		question: "Who kills Joffrey?",
  		choices: ["Sansa Stark", "Tyrion Lannister", "Olenna Tyrell", "The Hound"],
   		correctAnswer: 2,
   		image: "images/2.png"
 },
 {
 		question: "What does Shae call Tyrion?",
 		choices: ["Imp", "My Angel", "My Lion", "My Moon & Stars"],
 		correctAnswer: 2,
 		image: "images/3.png"
 },
 {
 		question: "How does Khal Drogo Die?",
 		choices: ["Drowning", "Slain by another Khal", "Dragons", "Infected boo boo"],
 		correctAnswer: 3,
 		image: "images/4.png"
 },
 {
		question: "Who was Robert Baratheon in love with?",
		choices: ["Lyanna Stark", "Margaery Tyrell", "Cersei Lannister", "Catelyn Stark"],
		correctAnswer: 0,
		image: "images/5.png"
},
 {
		question: "Who was The Hound's brother?",
		choices: ["Rob Stark", "The Mountain", "Robert Baratheon", "Ned Stark"],
		correctAnswer: 1,
		image: "images/6.png"
},
{
		question: "What was Robb Stark's direwolf's name?",
		choices: ["Grey Wind", "Lady", "Nymeria", "Ghost"],
		correctAnswer: 0,
		image: "images/7.png"
},
{
		question: "What does John Snow know?",
		choices: ["Everything", "Lots of Things", "All About Women", "Nothing"],
		correctAnswer: 3,
    	image: "images/8.png"
}];



//Global Variables//
var questH5 = document.getElementById('questH5');
var answerList = document.getElementById('answerList');
var nextBtn = document.getElementById('nextBtn');
var nextQuest = quiz[i];
//Variable Initiation//
var i = 0;
var length1 = quiz.length;
var score = document.getElementById("displayCount");
score.innerHTML = 0;
correctAnswer = quiz[i].correctAnswer;


// get the next question and a list of choices // 


function getNextQuestion() {
	var nextQuest = quiz[i];
	questH5.innerText = nextQuest.question;
	var choice = nextQuest.choices; 
	    $("#choice1").text(quiz[i].choices[0]);
	 	$("#choice2").text(quiz[i].choices[1]);
	 	$("#choice3").text(quiz[i].choices[2]);
	 	$("#choice4").text(quiz[i].choices[3]);
	 	$("#portrait").attr('src',quiz[i].image);

 	};
	
//Move to Next Question
 	$("#nextBtn").on("click", function() {
		// nextQuestion()
		checkAnswer();
	
	});

	function nextQuestion() {
		i++;
	if(i <= 7){
		getNextQuestion();
	}
	else{
	$(".question-box").hide();
	$("#portrait").hide();
	$(".result").show()
	$(".results").text("Valar Dohaeris! You got " + score.innerHTML + " questions out of " + quiz.length + " total questions correct!"); 	
	};
	$("#playAgain").on("click",function(){
			location.reload();
		});
	
};

//compare selected answer to the correct answer
function checkAnswer(){
		var value = quiz[i].correctAnswer;
		console.log(value)
		var answer = $("input:radio[name='radio']:checked").val();
		if (answer === undefined){
			alert("Please make a selection")
    		return false;
    	}
    	if (answer == value) {
    	score.innerHTML++;
    	nextQuestion();
		$("input:radio").attr("checked", false);
		}
		if(answer != value){
		nextQuestion();
		$("input:radio").attr("checked", false);

		}
    	
    
 }

 
