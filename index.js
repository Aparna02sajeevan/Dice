var RandomNumber1 =Math.floor(Math.random()*6)+1;
var dicerandom1 ="dice" + RandomNumber1+ ".jpg";
var images1 = document.querySelectorAll("img") [0].setAttribute("src",dicerandom1);



var RandomNumber2 =Math.floor(Math.random()*6)+1;
var dicerandom2 ="dice" + RandomNumber2+ ".jpg";
var images1 = document.querySelectorAll("img") [1].setAttribute("src",dicerandom2);

if (RandomNumber1>RandomNumber2)
{
    document.querySelector("h1").innerHTML ="🚩  Player 1 Wins!";
}
else if(RandomNumber1<RandomNumber2)
{
    document.querySelector("h1").innerHTML ="🚩 Player 2 Wins! ";
}
else {

    document.querySelector("h1").innerHTML =" DRAW 🏳";
}