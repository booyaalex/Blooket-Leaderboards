//Box Height
let height = screen.height;
let ingHeight = height * 0.6;
let potHeight = height * 0.38;
document.getElementById('ingredientList').style.height = ingHeight + "px";
document.getElementById('potionSec').style.height = potHeight + "px"; 

//Potion Variables
var potionImg = "";
let ing1 = 0;
let ing2 = 0;
let ing3 = 0;
let ing4 = 0;
let ing5 = 0;
let ing6 = 0;
let number = 0;
var ingr = [];
let zeroCount = 0;
//Potion Code

function addIngredient() {
  //Get Image Source
  console.log(event.target);
  potionImg = event.target.src;
  console.log(potionImg);
 
  //Set Ingredient
  
  console.log(document.getElementById('ing1').src);
  if(document.getElementById('ing1').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('1st');
    document.getElementById('ing1').src = event.target.src;
  
   //Set Ing Value
   nodeList = document.querySelectorAll('.boxImg');
   console.log(nodeList);
    for(let i = 0; i < 96; i++) {
    if (nodeList[i] == event.target) {
      number = i + 1;
      console.log(i);
      }
    }
    ing1 = number;
    console.log(ing1);
  } else if(document.getElementById('ing2').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('2nd');
    document.getElementById('ing2').src = event.target.src;
  
   //Set Ing Value
   nodeList = document.querySelectorAll('.boxImg');
   console.log(nodeList);
    for(let i = 0; i < 96; i++) {
    if (nodeList[i] == event.target) {
      number = i + 1;
      console.log(i);
      }
    }
    ing2 = number;
    console.log(ing2);
  } else if(document.getElementById('ing3').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('3rd');
    document.getElementById('ing3').src = event.target.src;
  
   //Set Ing Value
   nodeList = document.querySelectorAll('.boxImg');
   console.log(nodeList);
    for(let i = 0; i < 96; i++) {
    if (nodeList[i] == event.target) {
      number = i + 1;
      console.log(i);
      }
    }
    ing3 = number;
    console.log(ing3);
  } else if(document.getElementById('ing4').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('4th');
    document.getElementById('ing4').src = event.target.src;
  
   //Set Ing Value
   nodeList = document.querySelectorAll('.boxImg');
   console.log(nodeList);
    for(let i = 0; i < 96; i++) {
    if (nodeList[i] == event.target) {
      number = i + 1;
      console.log(i);
      }
    }
    ing4 = number;
    console.log(ing4);
  } else if(document.getElementById('ing5').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('5th');
    document.getElementById('ing5').src = event.target.src;
  
   //Set Ing Value
   nodeList = document.querySelectorAll('.boxImg');
   console.log(nodeList);
    for(let i = 0; i < 96; i++) {
    if (nodeList[i] == event.target) {
      number = i + 1;
      console.log(i);
      }
    }
    ing5 = number;
    console.log(ing5);
  } else if(document.getElementById('ing6').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('6th');
    document.getElementById('ing6').src = event.target.src;
  
   //Set Ing Value
   nodeList = document.querySelectorAll('.boxImg');
   console.log(nodeList);
    for(let i = 0; i < 96; i++) {
    if (nodeList[i] == event.target) {
      number = i + 1;
      console.log(i);
      }
    }
    ing6 = number;
    console.log(ing6);
  }
}

//Delete Ingredient
function deleteIng1() {
  document.getElementById('ing1').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  ing1 = 0;
}
function deleteIng2() {
  document.getElementById('ing2').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  ing2 = 0;
}
function deleteIng3() {
  document.getElementById('ing3').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  ing3 = 0;
}
function deleteIng4() {
  document.getElementById('ing4').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  ing4 = 0;
}
function deleteIng5() {
  document.getElementById('ing5').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  ing5 = 0;
}
function deleteIng6() {
  document.getElementById('ing6').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  ing6 = 0;
}

//Brewing

function brew() {
  //List Ingredients
  ingr[0] = ing1;
  ingr[1] = ing2;
  ingr[2] = ing3;
  ingr[3] = ing4;
  ingr[4] = ing5;
  ingr[5] = ing6;
  console.log(ingr);
  //Make Potion
  checkRecipie();
}

function checkRecipie() {
  countZero();
  console.log(zeroCount);
  //Bottle Of Expectation
  if(ingr.includes(25) &&  ingr.includes(79) && ingr.includes(44) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/4ML6hs7/Bottle-Of-Expectation.png";
    document.getElementById("potionText").innerHTML = "Bottle Of Expectation";
  }
  //Bottle Of Insanity
  if(ingr.includes(47) && ingr.includes(72) && ingr.includes(50) && ingr.includes(73) && ingr.includes(62) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/vmrN9Ys/Bottle-Of-Insanity.png";
    document.getElementById("potionText").innerHTML = "Bottle Of Insanity";
  }
  //Brew Of Ignorance
  if(ingr.includes(73) && ingr.includes(24) && ingr.includes(35) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ftVp1gt/Brew-Of-Ignorance.png";
    document.getElementById("potionText").innerHTML = "Brew Of Ignorance";
  }
  //Brew Of Lies
  if(ingr.includes(10) && ingr.includes(75) && ingr.includes(7) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ZYQsLW9/Brew-Of-Lies.png";
    document.getElementById("potionText").innerHTML = "Brew Of Lies";
  }
  //Brew Of The Ancients
  if(ingr.includes(89) && ingr.includes(96) && ingr.includes(39) && ingr.includes(38) && ingr.includes(26) && ingr.includes(23)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/3SQjxbn/Brew-Of-The-Ancients.png";
    document.getElementById("potionText").innerHTML = "Brew Of The Ancients";
  }
  //Clutch Of Justice
  if(ingr.includes(1) && ingr.includes(38) && ingr.includes(28) && ingr.includes(15) && ingr.includes(58) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Tc3tNMp/Clutch-Of-Justice.png";
    document.getElementById("potionText").innerHTML = "Clutch Of Justice";
  }
  //Crawler's Grasp
  if(ingr.includes(84) && ingr.includes(19) && ingr.includes(37) && ingr.includes(18) && ingr.includes(13) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/19yBnhH/Crawler-s-Grasp.png";
    document.getElementById("potionText").innerHTML = "Crawler's Grasp";
  }
  //Death's Wish
  if(ingr.includes(62) && ingr.includes(46) && ingr.includes(66) && ingr.includes(85) && ingr.includes(88) && ingr.includes(66)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/wyFPZ5V/Death-s-Wish.png";
    document.getElementById("potionText").innerHTML = "Death's Wish";
  }
  //Draught of Bloodlust
  if(ingr.includes(81) && ingr.includes(44) && ingr.includes(54) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/HY8Cd4D/Draught-Of-Bloohlust.png";
    document.getElementById("potionText").innerHTML = "Draught Of Bloodlust";
  }
  //Draught of Deliriousness
  if(ingr.includes(23) && ingr.includes(82) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/3WLSQHH/Draught-Of-Deliriousness.png";
    document.getElementById("potionText").innerHTML = "Draught Of Deliriousness";
  }
  //Draught of Focus
  if(ingr.includes(76) && ingr.includes(92) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/WVXTxhd/Draught-Of-Focus.png";
    document.getElementById("potionText").innerHTML = "Draught Of Focus";
  }
  //Draught Of Petrification
  if(ingr.includes(16) && ingr.includes(13) && ingr.includes(2) && ingr.includes(42) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ftyW59M/Draught-Of-Petrification.png";
    document.getElementById("potionText").innerHTML = "Draught Of Petrification";
  }
  //Draught Of Petrification
  if(ingr.includes(90) && ingr.includes(40) && ingr.includes(21) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/sVjGxFC/Draught-Of-Spellpower.png";
    document.getElementById("potionText").innerHTML = "Draught Of Spellpower";
  }
  //Draught Of The Titans
  if(ingr.includes(63) && ingr.includes(94) && ingr.includes(61) && ingr.includes(6) && ingr.includes(12) && ingr.includes(86)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/8P88tKx/Draught-Of-The-Titans.png";
    document.getElementById("potionText").innerHTML = "Draught Of The Titans";
  }
  //Elixir Of Darkness
  if(ingr.includes(50) && ingr.includes(52) && ingr.includes(67) && ingr.includes(66) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rcHBk9h/Elixir-Of-Darkness.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Darkness";
  }
}
 
function countZero() {
  zeroCount = 0;
  for (let a = 0; a < ingr.length; a++) {
    if(ingr[a] == 0){
    zeroCount++;
    }
  }
}

//Clear

function clearing() {
  console.log('test');
  ingr = [];
  ing1 = 0;
  ing2 = 0;
  ing3 = 0;
  ing4 = 0;
  ing5 = 0;
  ing6 = 0;
  document.getElementById('ing1').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  document.getElementById('ing2').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  document.getElementById('ing3').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  document.getElementById('ing4').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  document.getElementById('ing5').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  document.getElementById('ing6').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  document.getElementById('potionBox').src = "https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png";
  document.getElementById('potionText').innerHTML = "";
}
