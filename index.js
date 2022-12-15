let readlineSync = require("readline-sync");

let score = 0;

let userName = readlineSync.question("What is your name? \n");

console.log("\nHello ", userName, "! Welcome to the Game Of Thrones Quiz");
console.log(" -----------------------------------")

let GotQuiz = [{question: "What was the name of Daenerys Targaryen's father? \n a. Viserys \n b. Daemon \n c. Aegon \n d. Aerys II \n",
               answer: "d"},
               {question: "Where did the Starks lived? \n a. Winterfell \n b. King's Landing \n c. Stormlands \n d. Harrenhal \n ",
               answer: "a"},
               {question: "What was Jon Snow's real name? \n a. Viserys \n b. Daemon \n c. Aegon \n d. Aerys \n",
               answer: "c"},
               {question: "Who killed the Night King? \n a. Sansa \n b. Daenerys \n c. Jaime \n d. Arya \n",
               answer: "d"},
               {question: "What was Tyrion's family name? \n a. Stark \n b. Lannister \n c. Boston \n d. Targaryen \n",
               answer: "b"}
]


for(let i = 0; i< GotQuiz.length; i++){
  quizPlay(GotQuiz[i].question, GotQuiz[i].answer)
}
  
function quizPlay (question, answer){
  userAnswer = readlineSync.question(question);
  rightAnswer = answer;

  if(userAnswer === rightAnswer){
    console.log("Correct Answer!");
    score++;
  }
  else{
    console.log("Wrong answer! The correct answer is: ", rightAnswer);
    score--;
  }
  console.log("-----------------------------------")
  console.log("Your current score is: ", score);
  console.log("-----------------------------------")
}
console.log("-----------------------------------")
console.log("Your final score is: ", score);
console.log("-----------------------------------")

let HighScorers = [{name: "Rahul", score: 5},
                  {name: "Saurav", score: 3},
                  {name: "Simran", score: 2}]

console.log("High Scorers:: \n \n");
for (let j = 0; j< HighScorers.length; j++){
  console.log(HighScorers[j].name + "::: " + HighScorers[j].score);

}

  console.log("\nPlease send a screenshot of your score and I will update it")