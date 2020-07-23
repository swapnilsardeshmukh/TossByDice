var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imagesource = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",imagesource);
/*
document.querySelectorAll("img")[0].setAttribute("src",imagesource);
*/

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imagesource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",imagesource2);


if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = " 👍 Team 1 Wins!";
}
else if( randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = " 👍 Team 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = " 👍 Tie!";
}
