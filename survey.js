const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

const questions = ["QUESTION 1", "QUESTION 2", "QUESTION 3"];

const conductSurvey = (questionArray, callback) => {
  const responses = [];
  rl.question(questionArray[0], answer => {
    callback(responses, answer);
    rl.close();
  });
  return responses;
};

const saveResponse = (responseArray, response) => responseArray.push(response);

console.log(conductSurvey(questions, saveResponse));