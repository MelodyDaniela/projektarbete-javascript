// här väljer jag ut vilka element som ska träffas. 

let body = document.querySelector("body"); 
let modeButton = document.querySelector(".icon");
const tagLine = document.getElementById('tagline');
const header = document.querySelector('header');
const links = document.querySelectorAll('a');
const iconContainer = document.getElementById('iconContainer');


/* Lägger till en eventlistener till knappen "modebutton". 

1. När eventet triggas i det här fallet av "click" så körs en funktion. 

2. funktionen Toggle gör så att en class läggs till eller tas bort. (klassen .dark)

*/

modeButton.addEventListener("click", function(){
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    tagLine.classList.toggle('dark');
    links.forEach(link => link.classList.toggle('dark'));
    iconContainer.classList.toggle('logotypelight');
});


