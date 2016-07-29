$(document).ready(function(){

	// quiz questions
	var questions = [
		{
			question: "Question 1",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 0,
		},
		{
			question: "Question 2",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 3,
		},
		{
			question: "Question 3",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 1,
		},
		{
			question: "Question 4",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 2,
		},
		{
			question: "Question 5",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 2,
		},
		{
			question: "Question 6",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 1,
		},
		{
			question: "Question 7",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 0,
		},
		{
			question: "Question 8",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 1,
		},
		{
			question: "Question 9",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 3,
		},
		{
			question: "Question 10",
			choices: ["Option 1","Option 2","Option 3","Option 4"],
			correctAnswer: 2,
		},
	];
	var currentQuestion = 0;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unanswered = 0;
	var timer = 20;
;
	

	// game functions */
	var game = {
		displayQuestion: function () {
			$("#begin").empty();
			$("#question").empty();
			$("#choices").empty();
			$("#result").empty();
			var question = questions[currentQuestion].question;
			$("#question").html(question);
			var numChoices = questions[currentQuestion].choices.length;
			for(i=0; i<numChoices; i++) {
				var options = questions[currentQuestion].choices[i];
				console.log(options);
				var $choices = 
				$('<div>')
				.addClass('choice')
				.attr('choice-id', i)
				.html(options);
				$("#choices").append($choices);
			};
			$('.choice').click(function() {
				game.checkAnswer(this.getAttribute('choice-id'))
				console.log(this.getAttribute('choice-id'))
			});

				
		},
		answerCorrect: function() {
				correctAnswers++;
				$("#question").empty();
				$("#choices").empty();	
				$("#result").html("correct");
				game.nextQuestion();	
		},
		answerIncorrect: function() {
				wrongAnswers++;
				$("#question").empty();
				$("#choices").empty();	
				$("#result").html("wrong");
				game.nextQuestion();
		},
		checkAnswer: function(index) {
				if(index == questions[currentQuestion].correctAnswer) {
				game.answerCorrect()
			}	else {
						game.answerIncorrect()};
		},
		nextQuestion: function() {
			currentQuestion++	
			if(currentQuestion < questions.length) {
				game.displayQuestion()
			} else {
				$("#result").empty();
				$('#stats').append("You got " + correctAnswers	+" answers correct" +"<br>");
				$('#stats').append("You got " + wrongAnswers	+" answers wrong" +"<br>");
				$('#stats').append("You left " + unanswered	+" answers unanswered");
				$('#reset').append("Start Over");
			};
			$('#reset').click(function() {
				game.reset();
			})
		},
		reset: function() {
				currentQuestion = 0;
				correctAnswers = 0;
				wrongAnswers = 0;
				unaswered = 0;
				$('#stats').empty();
				$('#reset').empty();
				game.displayQuestion();
		},
	}

	$("#begin").click(function() {
		game.displayQuestion();
	})		


})































































