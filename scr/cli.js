import readlineSync from 'readline-sync';

function greetUser() {
  console.log("Welcome to the Brain Games!");
  const name = prompt("May I have your name?");
  console.log(`Hello, ${name}!`);
  return name;
}

function isEven(number) {
  return number % 2 === 0;
}

function getCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function playGame() {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
      const number = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
      const correctAnswer = getCorrectAnswer(number);
      console.log(`Question: ${number}`);
      
      const userAnswer = prompt('Your answer:').trim().toLowerCase();

      if (userAnswer !== 'yes' && userAnswer !== 'no') {
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          return;
      }

      if (userAnswer === correctAnswer) {
          console.log("Correct!");
          correctAnswers += 1;
      } else {
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          return;
      }
  }
  
  console.log(`Congratulations, ${userName}!`);
}
