const quizContainer = document.querySelector('.quiz');
const preButton = document.querySelector('button[name=previous]')
const nextButton = document.querySelector('button[name=next]');
const submitButton = document.querySelector('button[type=submit]');
const results = document.querySelector('.results');

function buildQuiz(questions) {
	quizContainer.innerHTML = questions.map((question, index) => {
		let answerArray = [];
		for (letter in question.answers) {
			answerArray.push(`<label>
				<input 
					type="radio" 
					name="question-${index}" 
					value="${letter}">
					${question.answers[letter]}					
				</label>`);
		};

		return `<div class="slide">
					<div class="question">${question.question}</div>
					<div class="answer">${answerArray.join('')}</div>
				</div>`
	}).join('');	
}

function showResult() {
	const answerContainers = quizContainer.querySelectorAll('.answer');
	let numCorrect = 0;
	myQuestions.forEach((question, index) => {
		const answerContainer = answerContainers[index];
		const selector = `input[name=question-${index}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
		
		
		if(userAnswer === question.correctAnswer) {
			numCorrect++;
		}
	})
	const comment = numCorrect > myQuestions.length / 2 ? "You will be a successful developer!": "Good luck!";
	slides[currentSlide].classList.remove('active-slide');		
	results.innerHTML = `<h3>${comment}</h3>
						<p>${numCorrect} out of ${myQuestions.length}</p>`;
}

function slideMove(e) {
	if(e.target.name === 'next' && currentSlide < slides.length - 1) {
		showSlide(currentSlide + 1);
	} else if(e.target.name === 'previous' && currentSlide > 0) {
		showSlide(currentSlide -1);
	} else {
		return null
	}
}

function showSlide(n) {
	for(let i=0; i < slides.length; i++) {
		if(i === n) {
			slides[i].classList.add('active-slide');		
		} else {
			slides[i].classList.remove('active-slide');		
		}		
	}
	currentSlide = n;
	showButton(currentSlide);
}

function showButton(n) {
	if(n === 0) {
		preButton.style.display = 'none';
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
	} else if(n < slides.length -1 && n > 0) {
		preButton.style.display = 'inline-block';
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
	} else if(n === slides.length - 1) {
		preButton.style.display = 'inline-block';
		nextButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
	}
}

const myQuestions = [
	{
		question: "Why do you want to be a developer?",
		answers: {
			a: "Get rich quick",
			b: "Build interesting things",
			c: "Just like hitting the computer"
		},
		correctAnswer: "b"
	},
	{
		question: "What do you want to learn?",
		answers: {
			a: "Web development",
			b: "Data Science",
			c: "Artificial intelligence"
		},
		correctAnswer: "a"
	},
	{
		question: "How much time do you expect to spend on it?",
		answers: {
			a: "One hour a day",
			b: "Four hours a day",
			c: "Not sure"
		},
		correctAnswer: "b"
	},
	{
		question: "What would you want to do then?",
		answers: {
			a: "Start your own business",
			b: "Find a full time developer job",
			c: "Be a freelancer"
		},
		correctAnswer: "c"
	},
	{
		question: "How do you want to study?",
		answers: {
			a: "Bootcamp",
			b: "Online course",
			c: "Free online resources"
		},
		correctAnswer: "c"
	}
];


nextButton.addEventListener('click', slideMove);
preButton.addEventListener('click', slideMove);
submitButton.addEventListener('click', showResult);

buildQuiz(myQuestions);

const slides = Array.from(document.querySelectorAll('.slide'));
let currentSlide = 0;

showSlide(currentSlide);



