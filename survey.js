const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your favourite animal?  ",
  "What's the most embarassing thing ever?  ",
  "What did you want to be when you grew up?  ",
  "What's your best feature?  ",
  "What adjective describes you least?  ",
  "What's your favourite food?  "
];
const responses = [];

const conductSurvey = (questionArray, index) => {
  rl.question(questionArray[index], (response) => {
    saveResponse(response);
    if (index < questionArray.length - 1) {
      conductSurvey(questionArray, index + 1);
    } else {
      formatProfile(responses);
      rl.close();
    }
  });
};

const saveResponse = (response) => responses.push(response);

const formatProfile = (responseArray) => {
  const animal = responseArray[0];
  const activity = responseArray[1];
  const profession = responseArray[2];
  const feature = responseArray[3];
  const adjective = responseArray[4];
  const food = responseArray[5];

  const preamble = "Your death will be very interesting...\n";
  const message = `You will be killed by a ${animal} while ${activity}. You will be mourned by ${profession}s everywhere, who will remember your ${feature} with ${adjective} celebrations annually. A statue of your likeness will be erected in your home town made entirely of ${food}.`;

  setTimeout(() => logMessage(preamble), 1000);
  setTimeout(() => logMessage(message), 4000);
};

const logMessage = (message) => {
  let delay = 50;
  const interval = 50;

  for (const [index, char] of message.split('').entries()) {
    setTimeout(() => {
      process.stdout.write(char);
      if (index === message.length - 1) console.log("\n");
    }, delay);
    delay += interval;
  }
};

conductSurvey(questions, 0);