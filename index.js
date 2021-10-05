var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomSourceImage = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSourceImage);   

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomSourceImage2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSourceImage2);    

if(randomNumber1 > randomNumber2){
    document.querySelector(".result").innerHTML = "🚩 Player 1 wins";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector(".result").innerHTML = "Draw";
}
else{
    document.querySelector(".result").innerHTML = "Player 2 wins 🚩";
}
