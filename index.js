const readlineSync = require("readline-sync")
var score = 0

var userName = readlineSync.question("What is your name goodsir : ")
console.log("----------------------")
console.log("Welcome", userName, "to the superhero game")
console.log("----------------------")

function Game(question,answer){
var userAnswer = readlineSync.question(question)
  if (userAnswer == answer){
    console.log("You are right")
    score++
    console.log("your score is ",score)
    console.log("----------------------")
  }else{
    console.log("you are wrong")
    console.log("dont worry no deductions on wrong answers")
    console.log("----------------------")
  }
  
}





var questions =[{
  question:"Who is the best superhero ever made : ",
  answer :"ironman"
},{
  question:"What is the color of ironmans armor : ",
  answer:"red"
},{
  question:"In which movie did iron man die : ",
  answer:"endgame"
},{
  question:"How much did ironman love his daughter : ",
  answer:"3000"
},{
  question:"What was ironmans wifes name : ",
  answer:"pepper"
}]

for(i=0;i<questions.length;i++){
var currentquestion = questions[i]
  Game(currentquestion.question,currentquestion.answer)
}

console.log ("Congrats you have finished the Superhero game")
console.log("Your final score is ", score)