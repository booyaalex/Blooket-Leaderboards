var potion = "";
var ele = "";
var nodeList = "";
var number = "";
var ingredients = "";
var gold = "";
var ingImg = "";
var ingText = "";
var img = "";
let popUp = 0;

function openUp() {
  //Get Box Element
  getBox();
  //Get All Box Elements
  nodeList = document.querySelectorAll('.box');
  //Compare Box Elements
  compareBox();
  //Get Potion
  getPotion();
  //Activate PopUp 
  showPopUp();
}

function getBox() {
  ele = "";
  let box = event.target;
  let box_0 = event.target.className;
  let box_1 = event.target.parentElement;
  let box_2 = event.target.parentElement.parentElement;
  if(box_0 == "spacingBoxLeft" || box_0 == "spacingBoxRight") {
    ele = box_1;
  } 
  if(box_0 == "box") {
    ele = box;
  } 
  if(box_0 == "boxText" || box_0 == "boxTextGold" || box_0 == "boxImg"){
    ele = box_2;
  }
}

function compareBox() {
  for(let i = 1; i < 98; i++) {
    if (nodeList[i] == ele) {
      number = i;
      console.log(i);
    }
  }
}

function getPotion() {
  if(number == 1) {
    potion = "Bottle Of Expectation";
    ingredients = ["Fetty", "Theddium", "Krelgac"];
    gold = "450";
    img = "https://i.ibb.co/4ML6hs7/Bottle-Of-Expectation.png";
  } else if(number == 2) {
      potion = "Bottle Of Insanity";
      ingredients = ["Milkweed", "Sleet", "Plubead", "Nocries", "Slorn"];
      gold = "1,500";
      img = "https://i.ibb.co/vmrN9Ys/Bottle-Of-Insanity.png";
  } else if(number == 3) {
      potion = "Brew Of Ignorance";
      ingredients = ["Slorn", "Iafloss", "Evlosmoot"];
      gold = "150";
      img = "https://i.ibb.co/ftVp1gt/Brew-Of-Ignorance.png";
  } else if(number == 4) {
      potion = "Brew Of Lies";
      ingredients = ["Chorkorn", "Bianna", "Smine"];
      gold = "300";
      img = "https://i.ibb.co/ZYQsLW9/Brew-Of-Lies.png";
  } else if(number == 5) {
      potion = "Brew Of The Ancients";
      ingredients = ["Vletta", "Zeflia", "Ishina", "Iriwood", "Fleplore", "Epruthoo"];
      gold = "2,000";
      img = "https://i.ibb.co/3SQjxbn/Brew-Of-The-Ancients.png";
  } else if(number == 6) {
      potion = "Clutch Of Justice";
      ingredients = ["Ovliros", "Fyoom", "Crislolla", "Aatrender", "Iriwood"];
      gold = "1,400";
      img = "https://i.ibb.co/Tc3tNMp/Clutch-Of-Justice.png";
  } else if(number == 7) {
      potion = "Crawler's Grasp";
      ingredients = ["Uslard", "Ikros", "Clampire", "Drunow", "Edrip"];
      gold = "1,300";
      img = "https://i.ibb.co/19yBnhH/Crawler-s-Grasp.png";
  } else if(number == 8) {
      potion = "Death's Wish";
      ingredients = ["ShadePepper", "Vigip", "Uzemmium", "Plubead", "Milfoil", "Lover'sLeaf"];
      gold = "2,400";
      img = "https://i.ibb.co/wyFPZ5V/Death-s-Wish.png";
  } else if(number == 9) {
      potion = "Draught Of Bloodlust";
      ingredients = ["Todgotus", "Ooslade", "Krelgac"];
      gold = "450";
      img = "https://i.ibb.co/HY8Cd4D/Draught-Of-Bloohlust.png";
  } else if(number == 10) {
      potion = "Draught Of Deliriousness";
      ingredients = ["Epruthoo", "Tremmort"];
      gold = "80";
      img = "https://i.ibb.co/3WLSQHH/Draught-Of-Deliriousness.png";
  } else if(number == 11) {
      potion = "Draught Of Focus";
      ingredients = ["Snowdrop", "Waire"];
      gold = "50";
      img = "https://i.ibb.co/WVXTxhd/Draught-Of-Focus.png";
  } else if(number == 12) {
      potion = "Draught Of Petrification";
      ingredients = ["Aayizet", "Kless", "Drament", "Clampire"];
      gold = "700";
      img = "https://i.ibb.co/ftyW59M/Draught-Of-Petrification.png";
  } else if(number == 13) {
      potion = "Draught Of Spellpower";
      ingredients = ["Eiklorn", "Vlolla", "Iteek"];
      gold = "350";
      img = "https://i.ibb.co/sVjGxFC/Draught-Of-Spellpower.png";
  } else if(number == 14) {
      potion = "Draught Of The Titans";
      ingredients = ["Woundwort", "Vebore", "Plomegon", "Prow", "Clakdush", "Azoom"];
      gold = "1,800";
      img = "https://i.ibb.co/8P88tKx/Draught-Of-The-Titans.png";
  } else if(number == 15) {
      potion = "Elixir Of Darkness";
      ingredients = ["ShadePepper", "Shilnum", "Nocries", "Odosie"];
      gold = "900";
      img = "https://i.ibb.co/rcHBk9h/Elixir-Of-Darkness.png";
  } else if(number == 16) {
      potion = "Elixir Of Illusion";
      ingredients = ["Shore", "Garget", "Crille"];
      gold = "200";
      img = "https://i.ibb.co/VQW3JgP/Elixir-Of-Illusion.png";
  } else if(number == 17) {
      potion = "Elixir Of Stupidity";
      ingredients = ["Axow", "Todgotus"];
      gold = "50";
      img = "https://i.ibb.co/c3VZV1t/Elixir-Of-Stupidity.png";
  } else if(number == 18) {
      potion = "Elixir Of Taste";
      ingredients = ["Aatrender", "Waire", "Edrip"];
      gold = "150";
      img = "https://i.ibb.co/ZB0WqHK/Elixir-Of-Taste.png";
  } else if(number == 19) {
      potion = "Elixir Of The Berserker";
      ingredients = ["Ostrush", "Evlosmoot", "Chroil", "Veet", "Aatrender"];
      gold = "1,200";
      img = "https://i.ibb.co/rvN2z7q/Elixir-Of-The-Berserker.png";
  } else if(number == 20) {
      potion = "Everfall Brew";
      ingredients = ["Edrip", "Aatrender"];
      gold = "50";
      img = "https://i.ibb.co/CWmwhz9/Everfall-Brew.png";
  } else if(number == 21) {
      potion = "Eyedrops Of Phantoms";
      ingredients = ["Nocries", "Odosie", "Eiklorn", "Scanor"];
      gold = "1,000";
      img = "https://i.ibb.co/MPmqyC2/Eyedrops-Of-Phantoms.png";
  } else if(number == 22) {
      potion = "Fake Health Potion";
      ingredients = ["Prow", "Axow", "Wivitte"];
      gold = "200";
      img = "https://i.ibb.co/72vbPXN/Fake-Health-Potion.png";
  } else if(number == 23) {
      potion = "Fake Mana Potion";
      ingredients = ["Garget", "Shilnum", "Zedil"];
      gold = "200";
      img = "https://i.ibb.co/Q9ycs24/Fake-Mana-Potion.png";
  } else if(number == 24) {
      potion = "Flask From Below";
      ingredients = ["Smine", "Oblax", "Glusmard"];
      gold = "500";
      img = "https://i.ibb.co/N1Smbsk/Flask-From-Below.png";
  } else if(number == 25) {
      potion = "Flask Of Betrayal";
      ingredients = ["Otrolla", "Shore", "Tansy", "Ekretta"];
      gold = "800";
      img = "https://i.ibb.co/X2fzWD8/Flask-Of-Betrayal.png";
  } else if(number == 26) {
      potion = "Flask Of Concentration";
      ingredients = ["Iafloss", "Friyow"];
      gold = "40";
      img = "https://i.ibb.co/1JcY7RH/Flask-Of-Concentration.png";
  } else if(number == 27) {
      potion = "Flask Of Greed";
      ingredients = ["Theddium", "Heaf", "Ostrush"];
      gold = "150";
      img = "https://i.ibb.co/6B3CVZp/Flask-Of-Greed.png";
  } else if(number == 28) {
      potion = "Flask Of Growth";
      ingredients = ["Shore", "Ooknove", "Fyoom"];
      gold = "200";
      img = "https://i.ibb.co/G9jGvQS/Flask-Of-Growth.png";
  } else if(number == 29) {
      potion = "Flask Of Rainbows";
      ingredients = ["Roo", "Vlolla", "Efanium", "Uzemmium"];
      gold = "800";
      img = "https://i.ibb.co/NrLBTKb/Flask-Of-Rainbows.png";
  } else if(number == 30) {
      potion = "Flask Of The Dimensions";
      ingredients = ["Vigip", "Itrozlel", "Osloblover", "Shredfoil", "Edrip"];
      gold = "1,500";
      img = "https://i.ibb.co/h8rX7DG/Flask-Of-The-Dimensions.png";
  } else if(number == 31) {
      potion = "Flask Of The Fire";
      ingredients = ["Shret", "Gallberry", "Drament"];
      gold = "400";
      img = "https://i.ibb.co/MGQbch1/Flask-Of-The-Fire.png";
  } else if(number == 32) {
      potion = "Flask Of The Harvester";
      ingredients = ["Shredfoil", "Hogweed"];
      gold = "70";
      img = "https://i.ibb.co/rp6vVfh/Flask-Of-The-Harvester.png";
  } else if(number == 33) {
      potion = "Flask Of The Mountain";
      ingredients = ["Woundwort", "Roo"];
      gold = "70";
      img = "https://i.ibb.co/Y7KLFxS/Flask-Of-The-Mountain.png";
  } else if(number == 34) {
      potion = "Flask Of The Tides";
      ingredients = ["Pachrite", "Shilnum"];
      gold = "60";
      img = "https://i.ibb.co/XX7tTph/Flask-Of-The-Tides.png";
  } else if(number == 35) {
      potion = "Flask Of Warmth";
        ingredients = ["Uplard", "Friyow"];
      gold = "40";
      img = "https://i.ibb.co/9bFZmQK/Flask-Of-Warmth.png";
  } else if(number == 36) {
      potion = "Gift Of The Phoenix";
      ingredients = ["Fleplore", "Aatrender", "Wivitte", "Uplard", "Slorn", "Namire"];
      gold = "2,200";
      img = "https://i.ibb.co/J29DmrN/Gift-Of-The-Phoenix.png";
  } else if(number == 37) {
      potion = "Greater Health Potion";
      ingredients = ["Blershary", "Sleet", "Crille"];
      gold = "300";
      img = "https://i.ibb.co/5rTBQtJ/Greater-Health-Potion.png";
  } else if(number == 38) {
      potion = "Greater Mana Potion";
      ingredients = ["Snowdrop", "Ikros", "Iknover"];
      gold = "300";
      img = "https://i.ibb.co/QKxTbg1/Greater-Mana-Potion.png";
  } else if(number == 39) {
      potion = "Greater Stamina Potion";
      ingredients = ["Heaf", "Chorkorn", "Plomegon"];
      gold = "300";
      img = "https://i.ibb.co/XxhHxXh/Greater-Stamina-Potion.png";
  } else if(number == 40) {
      potion = "Health Potion";
      ingredients = ["Prow", "Axow"];
      gold = "50";
      img = "https://i.ibb.co/GHxhJ2Y/Health-Potion.png";
  } else if(number == 41) {
      potion = "Love Potion";
      ingredients = ["Lover'sLeaf", "Vletta", "Waire", "Akroncower", "Otrolla"];
      gold = "1,500";
      img = "https://i.ibb.co/XWTN66N/Love-Potion.png";
  } else if(number == 42) {
      potion = "Mana Potion";
      ingredients = ["Garget", "Shilnum"];
      gold = "50";
      img = "https://i.ibb.co/GMMY2TC/Mana-Potion.png";
  } else if(number == 43) {
      potion = "Oomanoa";
      ingredients = ["Milkweed", "WailingNettle", "Todgotus", "Ooknove", "Ishina", "Mogdoot"];
      gold = "2,500";
      img = "https://i.ibb.co/pv5YG24/Oomanoa.png";
  } else if(number == 44) {
      potion = "Phial Of The Archer";
      ingredients = ["Sleet", "Garget"];
      gold = "60";
      img = "https://i.ibb.co/LCHfVKS/Phial-Of-The-Archer.png";
  } else if(number == 45) {
      potion = "Phial Of Trust";
      ingredients = ["Iriwood", "Fleplore"];
      gold = "70";
      img = "https://i.ibb.co/MDtfvjq/Phial-Of-Trust.png";
  } else if(number == 46) {
      potion = "Philter Of Camoflage";
      ingredients = ["Zedil", "Shore", "Kless"];
      gold = "200";
      img = "https://i.ibb.co/wCT4mv4/Philter-Of-Camoflage.png";
  } else if(number == 47) {
      potion = "Philter Of Hatred";
      ingredients = ["Osloblover", "Ooslade", "Thriper", "Shrivline"];
      gold = "600";
      img = "https://i.ibb.co/ZMDfnFc/Philter-Of-Hatred.png";
  } else if(number == 48) {
      potion = "Philter Of Influence";
      ingredients = ["Ostrush", "Oblax", "Friyow"];
      gold = "200";
      img = "https://i.ibb.co/FDhtyKG/Philter-Of-Influence.png";
  } else if(number == 49) {
      potion = "Philter Of Reversed Time";
      ingredients = ["Zeflia", "Iriwood", "Vebore", "Epruthoo", "Kless", "Fyoom"];
      gold = "2,300";
      img = "https://i.ibb.co/3FbwDvV/Philter-Of-Reversed-Time.png";
  } else if(number == 50) {
      potion = "Philter Of The Paragon";
      ingredients = ["Snowdrop", "Smequin", "WailingNettle", "Chroil", "Evlosmoot", "Ikros"];
      gold = "1,800";
      img = "https://i.ibb.co/0qg04Tc/Philter-Of-The-Paragon.png";
  } else if(number == 51) {
      potion = "Philter Of Thunder";
      ingredients = ["Wivitte", "Gallberry", "Glaisy"];
      gold = "300";
      img = "https://i.ibb.co/Gc4KkVh/Philter-Of-Thunder.png";
  } else if(number == 52) {
      potion = "Philter Of Victory";
      ingredients = ["Stammerwort", "Namire"];
      gold = "60";
      img = "https://i.ibb.co/LgD5vcL/Philter-Of-Victory.png";
  } else if(number == 53) {
      potion = "Potion Of Arcane Enhancement";
      ingredients = ["Scanor", "Hogweed", "Clakdush"];
      gold = "400";
      img = "https://i.ibb.co/BLwPDnx/Potion-Of-Arcane-Enhancement.png";
  } else if(number == 54) {
      potion = "Potion Of Clairvoyance";
      ingredients = ["Chroil", "Azoom"];
      gold = "80";
      img = "https://i.ibb.co/bBj2x8P/Potion-Of-Clairvoyance.png";
  } else if(number == 55) {
      potion = "Potion Of Damage Enhancement";
      ingredients = ["Uplard", "Shredfoil"];
      gold = "40";
      img = "https://i.ibb.co/QPhbpYy/Potion-Of-Damage-Enhancement.png";
  } else if(number == 56) {
      potion = "Potion Of Determination";
      ingredients = ["Glusmard", "Prow", "Shret"];
      gold = "100";
      img = "https://i.ibb.co/92Gp7dc/Potion-Of-Determination.png";
  } else if(number == 57) {
      potion = "Potion Of Evasion";
      ingredients = ["Shore", "Knoot"];
      gold = "60";
      img = "https://i.ibb.co/pX8w78q/Potion-Of-Evasion.png";
  } else if(number == 58) {
      potion = "Potion Of Everlasting Breath";
      ingredients = ["Shilnum", "Drament", "Dripedil", "Ozeed"];
      gold = "700";
      img = "https://i.ibb.co/KLJzPzG/Potion-Of-Everlasting-Breath.png";
  } else if(number == 59) {
      potion = "Potion Of Farsight";
      ingredients = ["Drunow", "Ekretta", "Aayizet"];
      gold = "300";
      img = "https://i.ibb.co/cDZwxjv/Potion-Of-Farsight.png";
  } else if(number == 60) {
      potion = "Potion Of Fortification";
      ingredients = ["Thriper", "Efanium", "Scanor", "Knoot"];
      gold = "500";
      img = "https://i.ibb.co/pzsDxr2/Potion-Of-Fortification.png";
  } else if(number == 61) {
      potion = "Potion Of Imbalance";
      ingredients = ["Todgotus", "Prow", "Akroncower"];
      gold = "400";
      img = "https://i.ibb.co/ByYRM1Z/Potion-Of-Imbalance.png";
  } else if(number == 62) {
      potion = "Potion Of Imperfection";
      ingredients = ["Fetty", "Drament", "Uslard"];
      gold = "300";
      img = "https://i.ibb.co/gwNTyDt/Potion-Of-Imperfection.png";
  } else if(number == 63) {
      potion = "Potion Of Jealousy";
      ingredients = ["Lover'sLeaf", "Chroil", "Dripedil"];
      gold = "200";
      img = "https://i.ibb.co/4dDygCr/Potion-Of-Jealousy.png";
  } else if(number == 64) {
      potion = "Potion Of Lava Walking";
      ingredients = ["Drunow", "Edrip"];
      gold = "50";
      img = "https://i.ibb.co/KX0fTwd/Potion-Of-Lava-Walking.png";
  } else if(number == 65) {
      potion = "Potion Of Levitation";
      ingredients = ["Aatrender", "Smine", "Tansy", "Krelgac", "Woundwort"];
      gold = "1,100";
      img = "https://i.ibb.co/nBjpZKh/Potion-Of-Levitation.png";
  } else if(number == 66) {
      potion = "Potion Of Masking";
      ingredients = ["Vlolla", "Smequin"];
      gold = "70";
      img = "https://i.ibb.co/r7g6B4x/Potion-Of-Masking.png";
  } else if(number == 67) {
      potion = "Potion Of Professions";
      ingredients = ["Ovliros", "Crislolla"];
      gold = "40";
      img = "https://i.ibb.co/TvKz4NF/Potion-Of-Professions.png"
  } else if(number == 68) {
      potion = "Potion Of Purification";
      ingredients = ["Iafloss", "Oblax", "Namire"];
      gold = "200";
      img = "https://i.ibb.co/gTB9FPq/Potion-Of-Purification.png";
  } else if(number == 69) {
      potion = "Potion Of Regeneration";
      ingredients = ["Otrolla", "Ekretta"];
      gold = "70";
      img = "https://i.ibb.co/cXmM8Xf/Potion-Of-Regeneration.png";
  } else if(number == 70) {
      potion = "Potion Of Resistance";
      ingredients = ["Waire", "Aconite"];
      gold = "60";
      img = "https://i.ibb.co/gD688bj/Potion-Of-Resistance.png";
  } else if(number == 71) {
      potion = "Potion Of Restriction";
      ingredients = ["Aconite", "Milfoil", "Eiklorn"];
      gold = "100";
      img = "https://i.ibb.co/bX5P9Fq/Potion-Of-Restriction.png";
  } else if(number == 72) {
      potion = "Potion Of Stealth";
      ingredients = ["Roo", "Prow", "Tansy"];
      gold = "130";
      img = "https://i.ibb.co/W26rsQ4/Potion-Of-Stealth.png";
  } else if(number == 73) {
      potion = "Potion Of Summoning";
      ingredients = ["WailingNettle", "Plomegon", "Nocries", "Kless"];
      gold = "660";
      img = "https://i.ibb.co/5FSPsgD/Potion-Of-Summoning.png";
  } else if(number == 74) {
      potion = "Potion Of The Beginning";
      ingredients = ["Itrozlel", "Iteek", "Theddium", "Waire", "Vletta"];
      gold = "1,400";
      img = "https://i.ibb.co/6Dpjvkd/Potion-Of-The-Beginning.png";
  } else if(number == 75) {
      potion = "Potion Of Water Walking";
      ingredients = ["Iknover", "Garget"];
      gold = "70";
      img = "https://i.ibb.co/61BH5st/Potion-Of-Water-Walking.png";
  } else if(number == 76) {
      potion = "Stamina Potion";
      ingredients = ["Waire", "Axow"];
      gold = "60";
      img = "https://i.ibb.co/wpZ7pdJ/Stamina-Potion.png";
  } else if(number == 77) {
      potion = "The Needle";
      ingredients = ["ShadePepper", "Shrivline", "Vletta", "Crille", "Efanium", "Ostrush"];
      gold = "2,500";
      img = "https://i.ibb.co/SQcnbTQ/The-Needle.png";
  } else if(number == 78) {
      potion = "Tonic Of Joy";
      ingredients = ["Blershary", "Itrozlel"];
      gold = "50";
      img = "https://i.ibb.co/0qjwmTg/Tonic-Of-Joy.png";
  } else if(number == 79) {
      potion = "Tonic Of Poison Resistance";
      ingredients = ["Scanor", "Blakmel", "Sleet"];
      gold = "200";
      img = "https://i.ibb.co/YbYdKr2/Tonic-Of-Poison-Resistance.png";
  } else if(number == 80) {
      potion = "Tonic Of Wind";
      ingredients = ["Blakmel", "Shore"];
      gold = "40";
      img = "https://i.ibb.co/PN81mxV/Tonic-Of-Wind.png";
  } else if(number == 81) {
      potion = "Urn Of Excitement";
      ingredients = ["Veet", "Plubead"];
      gold = "60";
      img = "https://i.ibb.co/KmjJg5X/Urn-Of-Excitement.png";
  } else if(number == 82) {
      potion = "Vial Of Clarity";
      ingredients = ["Heaf", "Ishina", "Friyow"];
      gold = "200";
      img = "https://i.ibb.co/HhR59DH/Vial-Of-Clarity.png";
  } else if(number == 83) {
      potion = "Vial Of Depressions";
      ingredients = ["Bianna", "Aconite", "Smequin", "Tremmort"];
      gold = "900";
      img = "https://i.ibb.co/J5KBx94/Vial-Of-Depressions.png";
  } else if(number == 84) {
      potion = "Vial Of Disabling";
      ingredients = ["Slorn", "Krelgac", "Glaisy"];
      gold = "200";
      img = "https://i.ibb.co/Lrcd8zV/Vial-Of-Disabling.png";
  } else if(number == 85) {
      potion = "Vial Of Experimentation";
      ingredients = ["Ekretta", "Azoom"];
      gold = "70";
      img = "https://i.ibb.co/z2rMzZz/Vial-Of-Experimentation.png";
  } else if(number == 86) {
      potion = "Vial Of Feather Weight";
      ingredients = ["Iteek", "Evlosmoot", "Namire"];
      gold = "300";
      img = "https://i.ibb.co/Yf1xBKG/Vial-Of-Feater-Weight.png";
  } else if(number == 87) {
      potion = "Vial Of Haste";
      ingredients = ["Clampire", "Thriper"];
      gold = "70";
      img = "https://i.ibb.co/RCy3S22/Vial-Of-Haste.png";
  } else if(number == 88) {
      potion = "Vial Of Knowledge";
      ingredients = ["Snowdrop", "Dripedil", "Smequin"];
      gold = "200";
      img = "https://i.ibb.co/K2h418T/Vial-Of-Knowledge.png";
  } else if(number == 89) {
      potion = "Vial Of Luck";
      ingredients = ["Iafloss", "Aconite", "Aayizet", "Ozeed"];
      gold = "600";
      img = "https://i.ibb.co/M975hhh/Vial-Of-Luck.png";
  } else if(number == 90) {
      potion = "Vial Of Neglect";
      ingredients = ["Vigip", "Otrolla", "Fleplore"];
      gold = "200";
      img = "https://i.ibb.co/5Fc8nYV/Vial-Of-Neglect.png";
  } else if(number == 91) {
      potion = "Vial Of Shielding";
      ingredients = ["Mogdoot", "Woundwort", "Drament"];
      gold = "300";
      img = "https://i.ibb.co/S3rTndJ/Vial-Of-Shielding.png";
  } else if(number == 92) {
      potion = "Vial Of Sleep";
      ingredients = ["Zedil", "Chorkorn"];
      gold = "60";
      img = "https://i.ibb.co/DRLrKs3/Vial-Of-Sleep.png";
  } else if(number == 93) {
      potion = "Vial Of Speed";
      ingredients = ["Waire", "Ostrush"];
      gold = "60";
      img = "https://i.ibb.co/rQScqhy/Vial-Of-Speed.png";
  } else if(number == 94) {
      potion = "Vial Of Spores";
      ingredients = ["Ooknove", "Stammerwort", "Hogweed", "Uplard"];
      gold = "1,000";
      img = "https://i.ibb.co/Q84Th9W/Vial-Of-Spores.png";
  } else if(number == 95) {
      potion = "Vial Of The Seer";
      ingredients = ["Iafloss", "Iriwood", "Ooknove", "Osloblover", "Odosie"];
      gold = "1,400";
      img = "https://i.ibb.co/rkzn0pS/Vial-Of-The-Seer.png";
  } else if(number == 96) {
      potion = "Witch's Tangle";
      ingredients = ["Zeflia", "Uzemmium", "Plomegon", "Pachrite", "Itrozlel"];
      gold = "1,500";
      img = "https://i.ibb.co/xSj4NcK/Witch-s-Tangle.png";
  }
}
function closeUp() {
  if(popUp == 1){
  popUp = 0;
  //Stop Scrolling
  document.body.style.overflowY = "visible";
  //Visibility
  document.getElementById('popUp').style.visibility = "hidden";
  //Shading
  document.body.style.backgroundColor = "rgba(255,255,255,0.6)";
    document.body.style.opacity = "1";
    document.getElementById('main').style.opacity = "1";
  }
}

function showPopUp() {
  if(popUp == 0){
    //Stop Scrolling
    document.body.style.overflowY = "hidden";
    //Clear Previous PopUp
    document.getElementById('popUp').innerHTML = "<div class='spacingBoxLeft'><span></span><img id='potionImg' class='boxImg' src='' alt='Selected Potion'><span class='boxText' id='potionName'>  </span></div><div class='spacingBoxRight'><span class='boxTextGold' id='goldCount'>  </span><img src='https://i.ibb.co/MfTLP2t/gold.png' alt='goldIcon' width='25px' height='25px'></div><div id='ingList'></div><div id='ingName'></div>";
   //Visibility
   document.getElementById('popUp').style.visibility = "visible";
   //Ingridients
   for (let a = 0; a < ingredients.length; a++) {
    ingImg = document.createElement("img");
    ingImg.src = "../../Images/popIng/" + ingredients[a] + ".png";
     ingImg.className = "ingrImg";
     document.getElementById('ingList').appendChild(ingImg);
   }
   //Ing Names 
    for (let b = 0; b < ingredients.length; b++) {
      ingText = document.createElement("p");
      ingText.innerHTML = ingredients[b];
      ingText.className = "ingrText";
      document.getElementById('ingName').appendChild(ingText);
   }
   //Other Stuff
    document.getElementById('potionName').innerHTML = potion;
    document.getElementById('goldCount').innerHTML = gold;
    document.getElementById('potionImg').src = img;
    popUp = 1;
    
    //Shading
    document.body.style.backgroundColor = "rgba(0,0,0, 0.6)";
    document.body.style.opacity = "0.9";
    document.getElementById('main').style.opacity = "0.7";
  }
}

async function makePotions() {
    let potionList = [];
    const response = await fetch("potionRecipes.json");
    const JSON = await response.json();
    

    //Get a List of Potion Names
    let i = 0;
    Object.keys(JSON).forEach(function(key){
        potionList[i] = key;
        i++;
    });
    console.log(potionList.length);

    for(let i = 0; i < potionList.length; i++) {
        makeBox(potionList[i]);
    }


    function makeBox(potionName) {
        console.log([ `${potionName}` ]);
    }
}

