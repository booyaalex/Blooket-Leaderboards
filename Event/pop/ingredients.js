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
    document.getElementById('ing1').alt = event.target.alt;
  
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
    document.getElementById('ing2').alt = event.target.alt;
  
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
    document.getElementById('ing3').alt = event.target.alt;
  
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
    document.getElementById('ing4').alt = event.target.alt;
  
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
    document.getElementById('ing5').alt = event.target.alt;
  
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
    document.getElementById('ing6').alt = event.target.alt;
  
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
  //Elixir Of Illusion
  if(ingr.includes(68) && ingr.includes(14) && ingr.includes(30) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/VQW3JgP/Elixir-Of-Illusion.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Illusion";
  }
  //Elixir Of Stupidity
  if(ingr.includes(5) && ingr.includes(81) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/c3VZV1t/Elixir-Of-Stupidity.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Stupidity";
  }
  //Elixir Of Taste
  if(ingr.includes(19) && ingr.includes(1) && ingr.includes(92) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ZB0WqHK/Elixir-Of-Taste.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Taste";
  }
  //Elixir Of The Berserker
  if(ingr.includes(11) && ingr.includes(24) && ingr.includes(56) && ingr.includes(87) && ingr.includes(1) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rvN2z7q/Elixir-Of-The-Berserker.png";
    document.getElementById("potionText").innerHTML = "Elixir Of The Berserker";
  }
  //Everfall Brew
  if(ingr.includes(19) && ingr.includes(1) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/CWmwhz9/Everfall-Brew.png";
    document.getElementById("potionText").innerHTML = "Everfall Brew";
}
//Eyedrops Of Phantoms
  if(ingr.includes(52) && ingr.includes(65) && ingr.includes(50) && ingr.includes(21) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/MPmqyC2/Eyedrops-Of-Phantoms.png";
    document.getElementById("potionText").innerHTML = "Eyedrops Of Phantoms";
  }
  //Fake Health Potion
  if(ingr.includes(63) && ingr.includes(5) && ingr.includes(93) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/72vbPXN/Fake-Health-Potion.png";
    document.getElementById("potionText").innerHTML = "Fake Health Potion";
  }
  //Fake Mana Potion
  if(ingr.includes(67) && ingr.includes(30) && ingr.includes(95) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Q9ycs24/Fake-Mana-Potion.png";
    document.getElementById("potionText").innerHTML = "Fake Mana Potion";
  }
  //Flask From Below
  if(ingr.includes(32) && ingr.includes(75) && ingr.includes(51) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/N1Smbsk/Flask-From-Below.png";
    document.getElementById("potionText").innerHTML = "Flask From Below";
  }
  //Flask Of Betrayal
  if(ingr.includes(78) && ingr.includes(57) && ingr.includes(68) && ingr.includes(22) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/X2fzWD8/Flask-Of-Betrayal.png";
    document.getElementById("potionText").innerHTML = "Flask Of Betrayal";
  }
  //Flask Of Consentration
  if(ingr.includes(27) && ingr.includes(35) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/1JcY7RH/Flask-Of-Concentration.png";
    document.getElementById("potionText").innerHTML = "Flask Of Consentration";
  }
  //Flask Of Greed
  if(ingr.includes(79) && ingr.includes(33) && ingr.includes(56) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/6B3CVZp/Flask-Of-Greed.png";
    document.getElementById("potionText").innerHTML = "Flask Of Greed";
  }
  //Flask Of Growth
  if(ingr.includes(53) && ingr.includes(28) && ingr.includes(68) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/G9jGvQS/Flask-Of-Growth.png";
    document.getElementById("potionText").innerHTML = "Flask Of Growth";
  }
  //Flask Of Rainbows
  if(ingr.includes(90) && ingr.includes(85) && ingr.includes(64) && ingr.includes(20) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/NrLBTKb/Flask-Of-Rainbows.png";
    document.getElementById("potionText").innerHTML = "Flask Of Rainbows";
  }
  //Flask Of The Dimensions
  if(ingr.includes(88) && ingr.includes(41) && ingr.includes(55) && ingr.includes(19) && ingr.includes(69) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/h8rX7DG/Flask-Of-The-Dimensions.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Dimensions";
  }
  //Flask Of The Fire
  if(ingr.includes(70) && ingr.includes(16) && ingr.includes(29) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/MGQbch1/Flask-Of-The-Fire.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Fire";
  }
  //Flask Of The Harvester
  if(ingr.includes(69) && ingr.includes(34) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rp6vVfh/Flask-Of-The-Harvester.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Harvester";
  }
  //Flask Of The Mountain
  if(ingr.includes(94) && ingr.includes(64) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Y7KLFxS/Flask-Of-The-Mountain.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Mountain";
  }
  //Flask Of The Tides
  if(ingr.includes(60) && ingr.includes(67) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/XX7tTph/Flask-Of-The-Tides.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Tides";
  }
  //Flask Of Warmth
  if(ingr.includes(83) && ingr.includes(27) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/9bFZmQK/Flask-Of-Warmth.png";
    document.getElementById("potionText").innerHTML = "Flask Of Warmth";
  }
  //Gift Of The Phoenix
  if(ingr.includes(1) && ingr.includes(93) && ingr.includes(26) && ingr.includes(83) && ingr.includes(73) && ingr.includes(49)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/J29DmrN/Gift-Of-The-Phoenix.png";
    document.getElementById("potionText").innerHTML = "Gift Of The Phoenix";
  }
  //Greater Health Potion
  if(ingr.includes(72) && ingr.includes(14) && ingr.includes(9) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/5rTBQtJ/Greater-Health-Potion.png";
    document.getElementById("potionText").innerHTML = "Greater Health Potion";
  }
  //Greater Mana Potion
  if(ingr.includes(76) && ingr.includes(37) && ingr.includes(36) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/QKxTbg1/Greater-Mana-Potion.png";
    document.getElementById("potionText").innerHTML = "Greater Mana Potion";
  }
  //Greater Stamina Potion
  if(ingr.includes(10) && ingr.includes(61) && ingr.includes(33) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/XxhHxXh/Greater-Stamina-Potion.png";
    document.getElementById("potionText").innerHTML = "Greater Stamina Potion";
  }
  //Health Potion
  if(ingr.includes(63) && ingr.includes(5) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/GHxhJ2Y/Health-Potion.png";
    document.getElementById("potionText").innerHTML = "Health Potion";
  }
  //Love Potion
  if(ingr.includes(45) && ingr.includes(57) && ingr.includes(89) && ingr.includes(4) && ingr.includes(92) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/XWTN66N/Love-Potion.png";
    document.getElementById("potionText").innerHTML = "Love Potion";
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
