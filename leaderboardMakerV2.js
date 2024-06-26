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

const playerMap = new Map();
let SCORES = [];

let LEADERBOARD;


function getData() {
  LEADERBOARD = localStorage.getItem("leaderboard");
  let headerDisplay;
  if (LEADERBOARD == 12) {
      headerDisplay = "YYYY/MM/DD";
  } else if (LEADERBOARD == 49 || LEADERBOARD == 50 || LEADERBOARD == 51) { //TD
      headerDisplay = "Time";
  } else if (LEADERBOARD == 16 || LEADERBOARD == 17 || LEADERBOARD == 18) { //Factory
      headerDisplay = "Time";
  } else if (LEADERBOARD > 72 && LEADERBOARD < 79) { //Cafe
      headerDisplay = "Time";
  } else if (LEADERBOARD > 18 && LEADERBOARD < 31) { //MB
      headerDisplay = "Time";
  } else if (LEADERBOARD > 36 && LEADERBOARD < 49) { //TD
      headerDisplay = "Round";
  } else if (LEADERBOARD > 54 && LEADERBOARD < 70) { //TD2
      headerDisplay = "Round";
  } else if (LEADERBOARD > 78 && LEADERBOARD < 83 || LEADERBOARD == 84) { //Kingdom
      headerDisplay = "Time";
  } else if (LEADERBOARD == 34 || LEADERBOARD == 35 || LEADERBOARD == 36) { //Fishing
      headerDisplay = "Time";
  } else {
      headerDisplay = "Score";
  }
  firebase.database().ref("/Users").on('value', function (snapshot) {
      document.getElementById("TABLE").innerHTML = "<tr><td><div class='statsBoxLB'><div class='statTitleLB'>Ranking</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>Blook</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>Person</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>" + headerDisplay + "</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>Blooket Username</div></div></td></tr>";
      let a = 0;
      snapshot.forEach(function (childSnapshot) {
          //Declare const's to make getting data easier.
          let displayName,
              userName,
              displayBlook;

          let LOG;


          //Get Dem Data
          childKey = childSnapshot.key;
          console.log("User - " + childKey);

          displayName = childSnapshot.val().name;
          console.log("displayName - " + displayName);
          userName = childSnapshot.val().username;
          console.log("userName - " + userName);
          displayBlook = childSnapshot.val().blook;
          console.log("displayBlook - " + displayBlook);
          SCORES[a] = childSnapshot.val().test[LEADERBOARD * 2 - 1];
          if (headerDisplay == "Time") { 
              if (SCORES[a] != "0") {
                  let temp = SCORES[a];
                  temp = temp.replace(/:/gi, "");
                  SCORES[a] = temp;
                  console.log("SCORES[a] - " + SCORES[a]);
                  console.log("temp - " + temp);
              }
          } else if (LEADERBOARD != 12) {
              let temp = SCORES[a];
              temp = temp + (0.0001 * a);
              SCORES[a] = temp;
              console.log("SCORES[a] - " + SCORES[a]);
              console.log("temp - " + temp);
          } else if (LEADERBOARD == 12) { //Date LB
              let temp = SCORES[a].substring(0, 10);
              temp = temp.replace(/-/gi, "");
              temp = temp + (0.0001 * a);
              SCORES[a] = temp;
              console.log("SCORES[a] - " + SCORES[a]);
              console.log("temp - " + temp);
          }
          if (SCORES[a] == null) {
              SCORES.splice(a, 1);
          } else {
              console.log(SCORES[a]);
              playerMap.set(SCORES[a], { name: displayName, user: userName, blook: displayBlook });
              LOG = playerMap.get(SCORES[a]);
              console.log("LOG.name - " + LOG.name);
          }

          a++;
      });

      console.log("SCORES.length - " + SCORES.length);

      //Sorts Scores either alphabetically or GTL depending on type of LB
      let SORTED_SCORE;
      console.log(headerDisplay);
      if (headerDisplay == "YYYY/MM/DD" || headerDisplay == "Time") {
          SORTED_SCORE = SCORES.sort(function (a, b) { return a - b });
      } else {
          SORTED_SCORE = SCORES.sort(function (a, b) { return b - a });
      }
      //Don't ask me what this does
      SORTED_SCORE = SORTED_SCORE.filter(elm => elm);
      //Ruturns values that are greater than or equal to one.
      SORTED_SCORE = SORTED_SCORE.filter(function (x) {
          return x >= 1;
      }); 

      console.log("SORTED_SCORE - " + SORTED_SCORE);

      for (let i = 0; i < SORTED_SCORE.length; i++) {
          console.log(SORTED_SCORE);
          console.log(i);
          let MAP = playerMap.get(SORTED_SCORE[i]);
          console.log(MAP.name);

          //Make Table Stuff
          let tr = document.createElement("tr");
          const MAPNAME = MAP.name;
          tr.id = MAPNAME.replace(/\s/g, '');

          for (let a = 0; a < 5; a++) {
              let td = document.createElement("td");

              //Make Div
              let DIV = document.createElement("div");
              if (a == 1) {
                  DIV.className = "statImgLB";
              } else {
                  DIV.className = "statTitleLB";
              }


              //Make Content
              if (a == 0) {
                  let textnode = document.createTextNode("#" + (i + 1) + ".");

                  DIV.appendChild(textnode);
              }
              if (a == 1) {
                  let IMG = document.createElement("img");
                  IMG.className = "statImgLB";
                  if (MAP.blook == "elite") {
                      IMG.src = "https://i.ibb.co/vP0WW4B/Y-Elite.png";
                  } else if (MAP.blook == "ylm") {
                      IMG.src = "https://i.ibb.co/9TdzQVS/scuba.webp";
                  } else {
                      IMG.src = "https://ac.blooket.com/marketassets/blooks/" + MAP.blook + ".svg";
                  }
                  console.log(IMG.src);
                  IMG.alt = MAP.blook + " blook";
                  IMG.width = 75;

                  DIV.appendChild(IMG);
              }
              if (a == 2) {
                  let NAME = document.createTextNode(MAP.name);
                  if (MAP.name == "Blooket Elite") {
                      DIV.classList.add("rainbow");
                  }
                  DIV.appendChild(NAME);
              }
              if (a == 3) {
                  let SCORE1;
                  let SCORE2;
                  if (LEADERBOARD == 12) {
                      SCORE1 = Math.trunc(SORTED_SCORE[i]).toString();
                      let temp = SCORE1.slice(0, 4) + "-" + SCORE1.slice(4, 6) + "-" + SCORE1.slice(6);
                      SCORE2 = document.createTextNode(temp.substring(0, temp.length - 1));
                  } else if (headerDisplay == "Time") {
                      const zeroPad = (num, places) => String(num).padStart(places, '0');
                      SCORE1 = Math.trunc(SORTED_SCORE[i]).toString();
                      let temp = zeroPad(SCORE1, 8);
                      console.log(temp);
                      SCORE2 = document.createTextNode(temp.slice(0, 2) + ":" + temp.slice(2, 4) + ":" + temp.slice(4, 6) + "." + temp.slice(6));
                  } else {
                      SCORE1 = Math.trunc(SORTED_SCORE[i]);
                      SCORE1 = SCORE1.toLocaleString();
                      SCORE2 = document.createTextNode(SCORE1);
                      console.log(SCORE1);
                  }
                  console.log(SCORE2);

                  DIV.appendChild(SCORE2);
              }
              if (a == 4) {
                  let USER = document.createTextNode(MAP.user);

                  DIV.appendChild(USER);
              }

              td.appendChild(DIV);
              tr.appendChild(td);
          }


          console.log(tr);
          const temp = document.getElementsByTagName("table");
          temp[0].appendChild(tr);
      }
  });
}