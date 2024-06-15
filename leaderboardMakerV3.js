const firebaseConfig = {
  apiKey: "AIzaSyBepZFDy6U3GQaJyTib-uItZOqLuW_Cv_o",
  authDomain: "blooketleaderboardserver.firebaseapp.com",
  databaseURL: "https://blooketleaderboardserver-default-rtdb.firebaseio.com",
  projectId: "blooketleaderboardserver",
  storageBucket: "blooketleaderboardserver.appspot.com",
  messagingSenderId: "145605729271",
  appId: "1:145605729271:web:f02924e11bfb1472256cf2"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

let LEADERBOARD,
  TYPE,
  textnode;

const TABLE = document.getElementById("lb_table");
const THEAD = document.getElementById("lb_head");
const TBODY = document.getElementById("lb_body");
function getData() {
  //Get what leaderboard to display
  LEADERBOARD = localStorage.getItem("leaderboard");

  //Set the type of leaderboard to display
  if (LEADERBOARD == 12) {
    TYPE = "YYYY/MM/DD";
  } else if (LEADERBOARD >= 16 && LEADERBOARD <= 18) { //Factory
    TYPE = "Time";
  } else if (LEADERBOARD >= 19 && LEADERBOARD <= 30) { //Monster
    TYPE = "Time";
  } else if (LEADERBOARD >= 34 && LEADERBOARD <= 36) { //Fishing
    TYPE = "Time";
  } else if (LEADERBOARD >= 49 && LEADERBOARD <= 51) { //Tower 1
    TYPE = "Time";
  } else if (LEADERBOARD >= 73 && LEADERBOARD <= 78) { //Cafe
    TYPE = "Time";
  } else if (LEADERBOARD >= 79 && LEADERBOARD <= 82 || LEADERBOARD == 84) { //Kingdom
    TYPE = "Time";
  } else if (LEADERBOARD >= 37 && LEADERBOARD <= 48) { //Tower 1
    TYPE = "Round";
  } else if (LEADERBOARD >= 55 && LEADERBOARD <= 69) { //Tower 2
    TYPE = "Round";
  } else {
    TYPE = "Score";
  }

  //Add scores to da leaderboard
  db.ref("/").on('value', function (snapshot) {
    //Make thead
    makeHeader(TYPE);

    //Make tbody

  });
}

function makeHeader(a) {
  const TR = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    const TD = document.createElement("td");

    const BOX = document.createElement("div");
    BOX.classList.add("lb_box");

    const TITLE = document.createElement("div");
    TITLE.classList.add("lb_title");
    TITLE.classList.add("title");
    
    if (i == 0) {
      textnode = document.createTextNode("Rank");
    } else if (i == 1) {
      textnode = document.createTextNode("Person");
    } else if (i == 2) {
      textnode = document.createTextNode(a);
    } else if (i == 3) {
      textnode = document.createTextNode("Blooket Username");
    }
    TITLE.appendChild(textnode);
    BOX.appendChild(TITLE);
    TD.appendChild(BOX);
    TR.appendChild(TD);
    console.log(TR);
  }
  console.log(TR);
  THEAD.appendChild("TR");
}