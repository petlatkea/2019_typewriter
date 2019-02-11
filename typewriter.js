"use strict";
let typewriter = document.getElementById("typewriter").innerHTML;
let counter = 0;
let speed = 250;

document.getElementById("typewriter").innerHTML = "";

function type() {
  if (counter < typewriter.length) {
    document.getElementById("typewriter").innerHTML += typewriter.charAt(
      counter
    );
    counter++;
    setTimeout(type, speed);
  }
}

setTimeout(type, speed);
//for (counter = 0; counter < typewriter.lenght; counter++) {}

//document.getElementById("typewriter").textContent = "";
