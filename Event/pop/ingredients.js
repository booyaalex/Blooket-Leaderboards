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
  if (document.getElementById('ing1').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('1st');
    document.getElementById('ing1').src = event.target.src;
    document.getElementById('ing1').alt = event.target.alt;

    //Set Ing Value
    nodeList = document.querySelectorAll('.boxImg');
    console.log(nodeList);
    for (let i = 0; i < 96; i++) {
      if (nodeList[i] == event.target) {
        number = i + 1;
        console.log(i);
      }
    }
    ing1 = number;
    console.log(ing1);
  } else if (document.getElementById('ing2').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('2nd');
    document.getElementById('ing2').src = event.target.src;
    document.getElementById('ing2').alt = event.target.alt;

    //Set Ing Value
    nodeList = document.querySelectorAll('.boxImg');
    console.log(nodeList);
    for (let i = 0; i < 96; i++) {
      if (nodeList[i] == event.target) {
        number = i + 1;
        console.log(i);
      }
    }
    ing2 = number;
    console.log(ing2);
  } else if (document.getElementById('ing3').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('3rd');
    document.getElementById('ing3').src = event.target.src;
    document.getElementById('ing3').alt = event.target.alt;

    //Set Ing Value
    nodeList = document.querySelectorAll('.boxImg');
    console.log(nodeList);
    for (let i = 0; i < 96; i++) {
      if (nodeList[i] == event.target) {
        number = i + 1;
        console.log(i);
      }
    }
    ing3 = number;
    console.log(ing3);
  } else if (document.getElementById('ing4').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('4th');
    document.getElementById('ing4').src = event.target.src;
    document.getElementById('ing4').alt = event.target.alt;

    //Set Ing Value
    nodeList = document.querySelectorAll('.boxImg');
    console.log(nodeList);
    for (let i = 0; i < 96; i++) {
      if (nodeList[i] == event.target) {
        number = i + 1;
        console.log(i);
      }
    }
    ing4 = number;
    console.log(ing4);
  } else if (document.getElementById('ing5').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('5th');
    document.getElementById('ing5').src = event.target.src;
    document.getElementById('ing5').alt = event.target.alt;

    //Set Ing Value
    nodeList = document.querySelectorAll('.boxImg');
    console.log(nodeList);
    for (let i = 0; i < 96; i++) {
      if (nodeList[i] == event.target) {
        number = i + 1;
        console.log(i);
      }
    }
    ing5 = number;
    console.log(ing5);
  } else if (document.getElementById('ing6').src == 'https://i.ibb.co/y0krvHC/Screenshot-2024-03-07-11-10-34-AM.png') {
    console.log('6th');
    document.getElementById('ing6').src = event.target.src;
    document.getElementById('ing6').alt = event.target.alt;

    //Set Ing Value
    nodeList = document.querySelectorAll('.boxImg');
    console.log(nodeList);
    for (let i = 0; i < 96; i++) {
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
  if (ingr.includes(25) && ingr.includes(79) && ingr.includes(44) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/4ML6hs7/Bottle-Of-Expectation.png";
    document.getElementById("potionText").innerHTML = "Bottle Of Expectation";
  }
  //Bottle Of Insanity
  if (ingr.includes(47) && ingr.includes(72) && ingr.includes(50) && ingr.includes(73) && ingr.includes(62) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/vmrN9Ys/Bottle-Of-Insanity.png";
    document.getElementById("potionText").innerHTML = "Bottle Of Insanity";
  }
  //Brew Of Ignorance
  if (ingr.includes(73) && ingr.includes(24) && ingr.includes(35) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ftVp1gt/Brew-Of-Ignorance.png";
    document.getElementById("potionText").innerHTML = "Brew Of Ignorance";
  }
  //Brew Of Lies
  if (ingr.includes(10) && ingr.includes(75) && ingr.includes(7) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ZYQsLW9/Brew-Of-Lies.png";
    document.getElementById("potionText").innerHTML = "Brew Of Lies";
  }
  //Brew Of The Ancients
  if (ingr.includes(89) && ingr.includes(96) && ingr.includes(39) && ingr.includes(38) && ingr.includes(26) && ingr.includes(23)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/3SQjxbn/Brew-Of-The-Ancients.png";
    document.getElementById("potionText").innerHTML = "Brew Of The Ancients";
  }
  //Clutch Of Justice
  if (ingr.includes(1) && ingr.includes(38) && ingr.includes(28) && ingr.includes(15) && ingr.includes(58) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Tc3tNMp/Clutch-Of-Justice.png";
    document.getElementById("potionText").innerHTML = "Clutch Of Justice";
  }
  //Crawler's Grasp
  if (ingr.includes(84) && ingr.includes(19) && ingr.includes(37) && ingr.includes(18) && ingr.includes(13) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/19yBnhH/Crawler-s-Grasp.png";
    document.getElementById("potionText").innerHTML = "Crawler's Grasp";
  }
  //Death's Wish
  if (ingr.includes(62) && ingr.includes(46) && ingr.includes(66) && ingr.includes(85) && ingr.includes(88) && ingr.includes(66)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/wyFPZ5V/Death-s-Wish.png";
    document.getElementById("potionText").innerHTML = "Death's Wish";
  }
  //Draught of Bloodlust
  if (ingr.includes(81) && ingr.includes(44) && ingr.includes(54) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/HY8Cd4D/Draught-Of-Bloohlust.png";
    document.getElementById("potionText").innerHTML = "Draught Of Bloodlust";
  }
  //Draught of Deliriousness
  if (ingr.includes(23) && ingr.includes(82) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/3WLSQHH/Draught-Of-Deliriousness.png";
    document.getElementById("potionText").innerHTML = "Draught Of Deliriousness";
  }
  //Draught of Focus
  if (ingr.includes(76) && ingr.includes(92) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/WVXTxhd/Draught-Of-Focus.png";
    document.getElementById("potionText").innerHTML = "Draught Of Focus";
  }
  //Draught Of Petrification
  if (ingr.includes(16) && ingr.includes(13) && ingr.includes(2) && ingr.includes(42) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ftyW59M/Draught-Of-Petrification.png";
    document.getElementById("potionText").innerHTML = "Draught Of Petrification";
  }
  //Draught Of Petrification
  if (ingr.includes(90) && ingr.includes(40) && ingr.includes(21) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/sVjGxFC/Draught-Of-Spellpower.png";
    document.getElementById("potionText").innerHTML = "Draught Of Spellpower";
  }
  //Draught Of The Titans
  if (ingr.includes(63) && ingr.includes(94) && ingr.includes(61) && ingr.includes(6) && ingr.includes(12) && ingr.includes(86)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/8P88tKx/Draught-Of-The-Titans.png";
    document.getElementById("potionText").innerHTML = "Draught Of The Titans";
  }
  //Elixir Of Darkness
  if (ingr.includes(50) && ingr.includes(52) && ingr.includes(67) && ingr.includes(66) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rcHBk9h/Elixir-Of-Darkness.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Darkness";
  }
  //Elixir Of Illusion
  if (ingr.includes(68) && ingr.includes(14) && ingr.includes(30) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/VQW3JgP/Elixir-Of-Illusion.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Illusion";
  }
  //Elixir Of Stupidity
  if (ingr.includes(5) && ingr.includes(81) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/c3VZV1t/Elixir-Of-Stupidity.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Stupidity";
  }
  //Elixir Of Taste
  if (ingr.includes(19) && ingr.includes(1) && ingr.includes(92) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ZB0WqHK/Elixir-Of-Taste.png";
    document.getElementById("potionText").innerHTML = "Elixir Of Taste";
  }
  //Elixir Of The Berserker
  if (ingr.includes(11) && ingr.includes(24) && ingr.includes(56) && ingr.includes(87) && ingr.includes(1) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rvN2z7q/Elixir-Of-The-Berserker.png";
    document.getElementById("potionText").innerHTML = "Elixir Of The Berserker";
  }
  //Everfall Brew
  if (ingr.includes(19) && ingr.includes(1) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/CWmwhz9/Everfall-Brew.png";
    document.getElementById("potionText").innerHTML = "Everfall Brew";
  }
  //Eyedrops Of Phantoms
  if (ingr.includes(52) && ingr.includes(65) && ingr.includes(50) && ingr.includes(21) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/MPmqyC2/Eyedrops-Of-Phantoms.png";
    document.getElementById("potionText").innerHTML = "Eyedrops Of Phantoms";
  }
  //Fake Health Potion
  if (ingr.includes(63) && ingr.includes(5) && ingr.includes(93) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/72vbPXN/Fake-Health-Potion.png";
    document.getElementById("potionText").innerHTML = "Fake Health Potion";
  }
  //Fake Mana Potion
  if (ingr.includes(67) && ingr.includes(30) && ingr.includes(95) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Q9ycs24/Fake-Mana-Potion.png";
    document.getElementById("potionText").innerHTML = "Fake Mana Potion";
  }
  //Flask From Below
  if (ingr.includes(32) && ingr.includes(75) && ingr.includes(51) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/N1Smbsk/Flask-From-Below.png";
    document.getElementById("potionText").innerHTML = "Flask From Below";
  }
  //Flask Of Betrayal
  if (ingr.includes(78) && ingr.includes(57) && ingr.includes(68) && ingr.includes(22) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/X2fzWD8/Flask-Of-Betrayal.png";
    document.getElementById("potionText").innerHTML = "Flask Of Betrayal";
  }
  //Flask Of Consentration
  if (ingr.includes(27) && ingr.includes(35) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/1JcY7RH/Flask-Of-Concentration.png";
    document.getElementById("potionText").innerHTML = "Flask Of Consentration";
  }
  //Flask Of Greed
  if (ingr.includes(79) && ingr.includes(33) && ingr.includes(56) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/6B3CVZp/Flask-Of-Greed.png";
    document.getElementById("potionText").innerHTML = "Flask Of Greed";
  }
  //Flask Of Growth
  if (ingr.includes(53) && ingr.includes(28) && ingr.includes(68) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/G9jGvQS/Flask-Of-Growth.png";
    document.getElementById("potionText").innerHTML = "Flask Of Growth";
  }
  //Flask Of Rainbows
  if (ingr.includes(90) && ingr.includes(85) && ingr.includes(64) && ingr.includes(20) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/NrLBTKb/Flask-Of-Rainbows.png";
    document.getElementById("potionText").innerHTML = "Flask Of Rainbows";
  }
  //Flask Of The Dimensions
  if (ingr.includes(88) && ingr.includes(41) && ingr.includes(55) && ingr.includes(19) && ingr.includes(69) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/h8rX7DG/Flask-Of-The-Dimensions.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Dimensions";
  }
  //Flask Of The Fire
  if (ingr.includes(70) && ingr.includes(16) && ingr.includes(29) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/MGQbch1/Flask-Of-The-Fire.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Fire";
  }
  //Flask Of The Harvester
  if (ingr.includes(69) && ingr.includes(34) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rp6vVfh/Flask-Of-The-Harvester.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Harvester";
  }
  //Flask Of The Mountain
  if (ingr.includes(94) && ingr.includes(64) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Y7KLFxS/Flask-Of-The-Mountain.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Mountain";
  }
  //Flask Of The Tides
  if (ingr.includes(60) && ingr.includes(67) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/XX7tTph/Flask-Of-The-Tides.png";
    document.getElementById("potionText").innerHTML = "Flask Of The Tides";
  }
  //Flask Of Warmth
  if (ingr.includes(83) && ingr.includes(27) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/9bFZmQK/Flask-Of-Warmth.png";
    document.getElementById("potionText").innerHTML = "Flask Of Warmth";
  }
  //Gift Of The Phoenix
  if (ingr.includes(1) && ingr.includes(93) && ingr.includes(26) && ingr.includes(83) && ingr.includes(73) && ingr.includes(49)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/J29DmrN/Gift-Of-The-Phoenix.png";
    document.getElementById("potionText").innerHTML = "Gift Of The Phoenix";
  }
  //Greater Health Potion
  if (ingr.includes(72) && ingr.includes(14) && ingr.includes(9) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/5rTBQtJ/Greater-Health-Potion.png";
    document.getElementById("potionText").innerHTML = "Greater Health Potion";
  }
  //Greater Mana Potion
  if (ingr.includes(76) && ingr.includes(37) && ingr.includes(36) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/QKxTbg1/Greater-Mana-Potion.png";
    document.getElementById("potionText").innerHTML = "Greater Mana Potion";
  }
  //Greater Stamina Potion
  if (ingr.includes(10) && ingr.includes(61) && ingr.includes(33) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/XxhHxXh/Greater-Stamina-Potion.png";
    document.getElementById("potionText").innerHTML = "Greater Stamina Potion";
  }
  //Health Potion
  if (ingr.includes(63) && ingr.includes(5) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/GHxhJ2Y/Health-Potion.png";
    document.getElementById("potionText").innerHTML = "Health Potion";
  }
  //Love Potion
  if (ingr.includes(45) && ingr.includes(57) && ingr.includes(89) && ingr.includes(4) && ingr.includes(92) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/XWTN66N/Love-Potion.png";
    document.getElementById("potionText").innerHTML = "Love Potion";
  }
  //Mana Potion
  if (ingr.includes(67) && ingr.includes(30) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/GMMY2TC/Mana-Potion.png";
    document.getElementById("potionText").innerHTML = "Mana Potion";
  }
  //Ommanoa
  if (ingr.includes(47) && ingr.includes(81) && ingr.includes(53) && ingr.includes(91) && ingr.includes(39) && ingr.includes(48)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/pv5YG24/Oomanoa.png";
    document.getElementById("potionText").innerHTML = "Ommanoa";
  }
  //Phial Of The Archer
  if (ingr.includes(72) && ingr.includes(30) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/LCHfVKS/Phial-Of-The-Archer.png";
    document.getElementById("potionText").innerHTML = "Phial Of The Archer";
  }
  //Phial Of Trust
  if (ingr.includes(38) && ingr.includes(26) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/MDtfvjq/Phial-Of-Trust.png";
    document.getElementById("potionText").innerHTML = "Phial Of Trust";
  }
  //Philter Of Camoflauge
  if (ingr.includes(68) && ingr.includes(95) && ingr.includes(42) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/wCT4mv4/Philter-Of-Camoflage.png";
    document.getElementById("potionText").innerHTML = "Philter Of Camoflauge";
  }
  //Philter Of Hatred
  if (ingr.includes(71) && ingr.includes(80) && ingr.includes(55) && ingr.includes(54) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ZMDfnFc/Philter-Of-Hatred.png";
    document.getElementById("potionText").innerHTML = "Philter Of Hatred";
  }
  //Philter Of Influence
  if (ingr.includes(56) && ingr.includes(51) && ingr.includes(27) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/FDhtyKG/Philter-Of-Influence.png";
    document.getElementById("potionText").innerHTML = "Philter Of Influence";
  }
  //Philter Of Reversed Time
  if (ingr.includes(38) && ingr.includes(96) && ingr.includes(86) && ingr.includes(42) && ingr.includes(28) && ingr.includes(23)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/3FbwDvV/Philter-Of-Reversed-Time.png";
    document.getElementById("potionText").innerHTML = "Philter Of Reversed Time";
  }
  //Philter Of The Paragon
  if (ingr.includes(76) && ingr.includes(74) && ingr.includes(91) && ingr.includes(37) && ingr.includes(11) && ingr.includes(24)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/0qg04Tc/Philter-Of-The-Paragon.png";
    document.getElementById("potionText").innerHTML = "Philter Of The Paragon";
  }
  //Philter Of Thunder
  if (ingr.includes(29) && ingr.includes(93) && ingr.includes(31) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Gc4KkVh/Philter-Of-Thunder.png";
    document.getElementById("potionText").innerHTML = "Philter Of Thunder";
  }
  //Philter Of Victory
  if (ingr.includes(77) && ingr.includes(49) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/LgD5vcL/Philter-Of-Victory.png";
    document.getElementById("potionText").innerHTML = "Philter Of Victory";
  }
  //Potion Of Arcane Enhancement
  if (ingr.includes(65) && ingr.includes(12) && ingr.includes(34) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/BLwPDnx/Potion-Of-Arcane-Enhancement.png";
    document.getElementById("potionText").innerHTML = "Potion Of Arcane Enhancement";
  }
  //Potion Of Clairvoyance
  if (ingr.includes(11) && ingr.includes(6) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/bBj2x8P/Potion-Of-Clairvoyance.png";
    document.getElementById("potionText").innerHTML = "Potion Of Clairvoyance";
  }
  //Potion Of Damage Enhancement
  if (ingr.includes(83) && ingr.includes(69) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/QPhbpYy/Potion-Of-Damage-Enhancement.png";
    document.getElementById("potionText").innerHTML = "Potion Of Damage Enhancement";
  }
  //Potion Of Determination
  if (ingr.includes(63) && ingr.includes(70) && ingr.includes(32) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/92Gp7dc/Potion-Of-Determination.png";
    document.getElementById("potionText").innerHTML = "Potion Of Determination";
  }
  //Potion Of Evasion
  if (ingr.includes(68) && ingr.includes(43) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/pX8w78q/Potion-Of-Evasion.png";
    document.getElementById("potionText").innerHTML = "Potion Of Evasion";
  }
  //Potion Of Everlasting Breath
  if (ingr.includes(67) && ingr.includes(17) && ingr.includes(16) && ingr.includes(59) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/KLJzPzG/Potion-Of-Everlasting-Breath.png";
    document.getElementById("potionText").innerHTML = "Potion Of Everlasting Breath";
  }
  //Potion Of Farsight
  if (ingr.includes(1) && ingr.includes(22) && ingr.includes(18) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/cDZwxjv/Potion-Of-Farsight.png";
    document.getElementById("potionText").innerHTML = "Potion Of Farsight";
  }
  //Potion Of Fortification
  if (ingr.includes(80) && ingr.includes(20) && ingr.includes(43) && ingr.includes(65) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/pzsDxr2/Potion-Of-Fortification.png";
    document.getElementById("potionText").innerHTML = "Potion Of Fortification";
  }
  //Potion Of Imbalance
  if (ingr.includes(4) && ingr.includes(81) && ingr.includes(63) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/ByYRM1Z/Potion-Of-Imbalance.png";
    document.getElementById("potionText").innerHTML = "Potion Of Imbalance";
  }
  //Potion Of Imperfection
  if (ingr.includes(16) && ingr.includes(84) && ingr.includes(25) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/gwNTyDt/Potion-Of-Imperfection.png";
    document.getElementById("potionText").innerHTML = "Potion Of Imperfection";
  }
  //Potion Of Jealousy
  if (ingr.includes(45) && ingr.includes(17) && ingr.includes(11) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/4dDygCr/Potion-Of-Jealousy.png";
    document.getElementById("potionText").innerHTML = "Potion Of Jealousy";
  }
  //Potion Of Lava Walking
  if (ingr.includes(18) && ingr.includes(19) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/KX0fTwd/Potion-Of-Lava-Walking.png";
    document.getElementById("potionText").innerHTML = "Potion Of Lava Walking";
  }
  //Potion Of Levitation
  if (ingr.includes(1) && ingr.includes(75) && ingr.includes(78) && ingr.includes(94) && ingr.includes(44) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/nBjpZKh/Potion-Of-Levitation.png";
    document.getElementById("potionText").innerHTML = "Potion Of Levitation";
  }
  //Potion Of Masking
  if (ingr.includes(74) && ingr.includes(90) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/r7g6B4x/Potion-Of-Masking.png"; document.getElementById("potionText").innerHTML = "Potion Of Masking";
  }
  //Potion Of Professionns
  if (ingr.includes(58) && ingr.includes(15) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/TvKz4NF/Potion-Of-Professions.png";
    document.getElementById("potionText").innerHTML = "Potion Of Professionns";
  }
  //Potion Of Purification
  if (ingr.includes(51) && ingr.includes(35) && ingr.includes(49) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/gTB9FPq/Potion-Of-Purification.png";
    document.getElementById("potionText").innerHTML = "Potion Of Purification";
  }
  //Potion Of Regeneration
  if (ingr.includes(57) && ingr.includes(22) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/cXmM8Xf/Potion-Of-Regeneration.png";
    document.getElementById("potionText").innerHTML = "Potion Of Regeneration";
  }
  //Potion Of Resistance
  if (ingr.includes(3) && ingr.includes(92) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/gD688bj/Potion-Of-Resistance.png";
    document.getElementById("potionText").innerHTML = "Potion Of Resistancce";
  }
  //Potion Of Restriction
  if (ingr.includes(3) && ingr.includes(21) && ingr.includes(46) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/bX5P9Fq/Potion-Of-Restriction.png";
    document.getElementById("potionText").innerHTML = "Potion Of Restriction";
  }
  //Potion Of Stealth
  if (ingr.includes(63) && ingr.includes(64) && ingr.includes(78) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/W26rsQ4/Potion-Of-Stealth.png";
    document.getElementById("potionText").innerHTML = "Potion Of Stealth";
  }
  //Potion Of Summoning
  if (ingr.includes(61) && ingr.includes(91) && ingr.includes(50) && ingr.includes(42) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/5FSPsgD/Potion-Of-Summoning.png";
    document.getElementById("potionText").innerHTML = "Potion Of Summoning";
  }
  //Potion Of The Beginning
  if (ingr.includes(41) && ingr.includes(40) && ingr.includes(79) && ingr.includes(89) && ingr.includes(92) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/6Dpjvkd/Potion-Of-The-Beginning.png";
    document.getElementById("potionText").innerHTML = "Potion Of The Beginning";
  }
  //Potion Of Water Walking
  if (ingr.includes(30) && ingr.includes(36) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/61BH5st/Potion-Of-Water-Walking.png";
    document.getElementById("potionText").innerHTML = "Potion Of Water Walking";
  }
  //Stamina Potion
  if (ingr.includes(92) && ingr.includes(5) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/wpZ7pdJ/Stamina-Potion.png"; document.getElementById("potionText").innerHTML = "Stamina Potion";
  }
  //The Needle
  if (ingr.includes(66) && ingr.includes(71) && ingr.includes(14) && ingr.includes(20) && ingr.includes(56) && ingr.includes(89)) {
    document.getElementById("potionBox").src = "https://i.ibb.co/SQcnbTQ/The-Needle.png";
    document.getElementById("potionText").innerHTML = "The Needle";
  }
  //Tonic Of Joy
  if (ingr.includes(41) && ingr.includes(9) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/0qjwmTg/Tonic-Of-Joy.png"; document.getElementById("potionText").innerHTML = "Tonic Of Joy";
  }
  //Tonic Of Poison Resistance
  if (ingr.includes(65) && ingr.includes(8) && ingr.includes(72) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/YbYdKr2/Tonic-Of-Poison-Resistance.png";
    document.getElementById("potionText").innerHTML = "Tonic Of Poison Resistance";
  }
  //Tonic Of Wind
  if (ingr.includes(8) && ingr.includes(68) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/PN81mxV/Tonic-Of-Wind.png"; document.getElementById("potionText").innerHTML = "Tonic Of Wind";
  }
  //Urn Of Excitement
  if (ingr.includes(87) && ingr.includes(62) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/KmjJg5X/Urn-Of-Excitement.png"; document.getElementById("potionText").innerHTML = "Urn Of Excitement";
  }
  //Vial Of Clarity
  if (ingr.includes(27) && ingr.includes(39) && ingr.includes(33) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/HhR59DH/Vial-Of-Clarity.png";
    document.getElementById("potionText").innerHTML = "Vial Of Clarity";
  }
  //Vial Of Depressions
  if (ingr.includes(3) && ingr.includes(7) && ingr.includes(74) && ingr.includes(82) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/J5KBx94/Vial-Of-Depressions.png";
    document.getElementById("potionText").innerHTML = "Vial Of Depressions";
  }
  //Vial Of Disabling
  if (ingr.includes(44) && ingr.includes(31) && ingr.includes(73) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Lrcd8zV/Vial-Of-Disabling.png";
    document.getElementById("potionText").innerHTML = "Vial Of Disabling";
  }
  //Vial Of Experimentation
  if (ingr.includes(6) && ingr.includes(22) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/z2rMzZz/Vial-Of-Experimentation.png"; document.getElementById("potionText").innerHTML = "Vial Of Experimentation";
  }
  //Vial Of Feather Weight
  if (ingr.includes(24) && ingr.includes(40) && ingr.includes(49) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Yf1xBKG/Vial-Of-Feater-Weight.png";
    document.getElementById("potionText").innerHTML = "Vial Of Feather Weight";
  }
  //Vial Of Haste
  if (ingr.includes(80) && ingr.includes(13) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/RCy3S22/Vial-Of-Haste.png"; document.getElementById("potionText").innerHTML = "Vial Of Haste";
  }
  //Vial Of Knowledge
  if (ingr.includes(17) && ingr.includes(74) && ingr.includes(76) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/K2h418T/Vial-Of-Knowledge.png";
    document.getElementById("potionText").innerHTML = "Vial Of Knowledge";
  }
  //Vial Of Luck
  if (ingr.includes(3) && ingr.includes(2) && ingr.includes(35) && ingr.includes(59) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/M975hhh/Vial-Of-Luck.png";
    document.getElementById("potionText").innerHTML = "Vial Of Luck";
  }
  //Vial Of Neglect
  if (ingr.includes(26) && ingr.includes(57) && ingr.includes(88) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/5Fc8nYV/Vial-Of-Neglect.png";
    document.getElementById("potionText").innerHTML = "Vial Of Neglect";
  }
  //Vial Of Shielding
  if (ingr.includes(48) && ingr.includes(94) && ingr.includes(16) && zeroCount == 3) {
    document.getElementById("potionBox").src = "https://i.ibb.co/S3rTndJ/Vial-Of-Shielding.png";
    document.getElementById("potionText").innerHTML = "Vial Of Shielding";
  }
  //Vial Of Sleep
  if (ingr.includes(10) && ingr.includes(95) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/DRLrKs3/Vial-Of-Sleep.png"; document.getElementById("potionText").innerHTML = "Vial Of Sleep";
  }
  //Vial Of Speed
  if (ingr.includes(56) && ingr.includes(92) && zeroCount == 4) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rQScqhy/Vial-Of-Speed.png"; document.getElementById("potionText").innerHTML = "Vial Of Speed";
  }
  //Vial Of Spores
  if (ingr.includes(77) && ingr.includes(34) && ingr.includes(83) && ingr.includes(53) && zeroCount == 2) {
    document.getElementById("potionBox").src = "https://i.ibb.co/Q84Th9W/Vial-Of-Spores.png";
    document.getElementById("potionText").innerHTML = "Vial Of Spores";
  }
  //Vial Of The Seer
  if (ingr.includes(35) && ingr.includes(38) && ingr.includes(52) && ingr.includes(53) && ingr.includes(55) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/rkzn0pS/Vial-Of-The-Seer.png";
    document.getElementById("potionText").innerHTML = "Vial Of The Seer";
  }
  //Witch's Tangle
  if (ingr.includes(96) && ingr.includes(85) && ingr.includes(60) && ingr.includes(61) && ingr.includes(41) && zeroCount == 1) {
    document.getElementById("potionBox").src = "https://i.ibb.co/xSj4NcK/Witch-s-Tangle.png";
    document.getElementById("potionText").innerHTML = "Witch's Tangle";
  }
}
function countZero() {
  zeroCount = 0;
  for (let a = 0; a < ingr.length; a++) {
    if (ingr[a] == 0) {
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
