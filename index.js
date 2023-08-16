var randomNumber1 = Math.floor(Math.random() * 6) +1 ;
var randomDice = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src","C:/Users/kceli/Desktop/Udemy Course/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/" + randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) +1 ;
var randomDice2 = "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src","C:/Users/kceli/Desktop/Udemy Course/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/" + randomDice2);

if (randomDice < randomDice2){
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
else if (randomDice > randomDice2){
  document.querySelector("h1").textContent = "Player 1 Wins 🚩";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
