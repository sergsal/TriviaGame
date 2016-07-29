$(document).ready(function(){

	// quiz questions
	var questions = [
		{
			question: "In the game HALO, what is the name of Master Chief's AI sidekick?",
			choices: ["Cortana","Arbiter","343 Guilty Spark","HAL"],
			correctAnswer: 0,
			answerImg: "assets/images/cortana.jpg",
		},
		{
			question: "Which bad guy was introduced in Super Mario Brothers 2?",
			choices: ["Koopa Troopa","Lakitu","Shy Guy","Goomba"],
			correctAnswer: 2,
			answerImg: "assets/images/shyguy.png",
		},
		{
			question: "What video game console has the highest number of video game console sales of all time?",
			choices: ["Xbox 360","Nintendo 64","Nintendo Wii","Playstation 2"],
			correctAnswer: 3,
			answerImg: "assets/images/ps2.jpg",
		},
		{
			question: "In which video game did the Konami Code first appear?",
			choices: ["Contra","Super Mario Bros.","Gradius","Duck Hunt"],
			correctAnswer: 2,
			answerImg: "assets/images/gradius.png",
		},
		{
			question: "What is the main character's name of the Metroid Series?",
			choices: ["Seamus Rang","Zero","Luigi","Samus Aran"],
			correctAnswer: 3,
			answerImg: "assets/images/samus.png",
		},
		{
			question: "In what year was the Nintendo Entertainment System released in the US?",
			choices: ["1991","1985","1984","1980"],
			correctAnswer: 1,
			answerImg: "assets/images/nes.jpg",
		},
		{
			question: "Who is the main villain of the Legend of Zelda series?",
			choices: ["Ganondorf","Link","Shy Guy","Bowser"],
			correctAnswer: 0,
			answerImg: "assets/images/ganondorf.png",
		},
		{
			question: "How many colossuses do you face in Shadow of the Colossus?",
			choices: ["9","16","13","25"],
			correctAnswer: 1,
			answerImg: "assets/images/shadowofthecolossus.jpg",
		},
		{
			question: "In the game Mortal Kombat, what phrase is heard when Scorpion uses his spear?",
			choices: ["Come here now!","Hi!","A moment of your time please","Get over here!"],
			correctAnswer: 3,
			answerImg: "assets/images/scorpion.jpg",
		},
		{
			question: "What color is Pac-Man",
			choices: ["Blue","Orange","Yellow","Red"],
			correctAnswer: 2,
			answerImg: "assets/images/pacman.jpg",
		},
	];
	var currentQuestion = 0;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unanswered = 0;
	var timer = 20;

	function startTimer() {
			counter = setInterval(decrement, 1000)
		};
	function decrement() {
            // Decrease number by one.
            timer--;
            // Show the number in the #show-number tag.
            $('#timer').html('<h2> Time Remaining: ' + timer + ' seconds</h2>');

            // Once number hits zero...
            if (timer == 0){
                // ...run the stop function.
                stop();
            }
        };

        // The stop function
    function stop (){
            // Clears our "counter" interval.
            // We just pass the name of the interval
            // to the clearInterval function.
            clearInterval(counter);
        };
	

	// game functions */
	var game = {

		//displays questions and the choices to those questions
		displayQuestion: function () {
			$("#begin").empty();
			$("#question").empty();
			$("#choices").empty();
			$("#result").empty();
			$("#answerImage").empty();
			timer = 20;
			//startTimer();
			if (timer < 1 ) {
				game.noAnswer();};
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
			$("#result").html("That's right!");
			$("#answerImage").html('<img src =' +questions[currentQuestion].answerImg+'>')
			setTimeout(game.nextQuestion, 2000);	
		},
		answerIncorrect: function() {
			wrongAnswers++;
			$("#question").empty();
			$("#choices").empty();	
			$("#result").html("Wrong! The correct answer is " +questions[currentQuestion].choices[this.correctAnswer]);
			$("#answerImage").html('<img src =' +questions[currentQuestion].answerImg+'>')
			setTimeout(game.nextQuestion, 2000);
		},
		noAnswer: function() {
			unanswered++;
			$("#question").empty();
			$("#choices").empty();	
			$("#result").html("You didn't respond in time");
			$("#answerImage").html('<img src =' +questions[currentQuestion].answerImg+'>')
			setTimeout(game.nextQuestion, 2000);
		},
		checkAnswer: function(index) {
			if(index == questions[currentQuestion].correctAnswer) {
				game.answerCorrect()
			}
			else {
				game.answerIncorrect()
			};
		},
		nextQuestion: function() {
			currentQuestion++	
			if(currentQuestion < questions.length) {
				game.displayQuestion()
			} else {
				$("#result").empty();
				$("#answerImage").empty();
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
		
	};

	$("#begin").click(function() {
		game.displayQuestion();
	})		


})































































