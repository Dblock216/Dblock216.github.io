/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: A'Niya Tugard
      Date:   10/22/2025

      Filename: project02-03.js
 */
document.getElementById("square").onmouseover = function(){
	
  document.getElementById("feedback").innerHTML = "You are hovering over a square";
}

document.getElementById("square").onmouseout = function(){

  document.getElementById("feedback").innerHTML = "";
}

document.getElementById("triangle").onmouseover = function(){

  document.getElementById("feedback").innerHTML = "You are hovering over a triangle";
}

document.getElementById("triangle").onmouseout = function() {

  document.getElementById("feedback").innerHTML = "";
}

document.getElementById("circle").onmouseover = function() {

  document.getElementById("feedback").innerHTML = "You are hovering over a circle";
}

document.getElementById("circle").onmouseout = function() {

  document.getElementById("feedback").innerHTML = "";
}
