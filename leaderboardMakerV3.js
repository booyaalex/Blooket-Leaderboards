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

const playerMap = new Map();
let SCORES = [];

const TABLE = document.getElementById("lb_table");
const THEAD = document.getElementById("lb_head");
const TBODY = document.getElementById("lb_body");
function getData() {
  //Get what leaderboard to display
  LEADERBOARD = localStorage.getItem("leaderboard");

  //Set the type of leaderboard to display
  if (LEADERBOARD == 12) {
    TYPE = "Date";
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
    //Clear old HTML
    THEAD.innerHTML = "";
    TBODY.innerHTML = "";

    //Make thead
    makeHeader(TYPE);

    //Make tbody
    let count = 0;
    snapshot.forEach(function (childSnapshot) {
      //Add each persons score to a list
      SCORES[count] = childSnapshot.val().test[LEADERBOARD * 2 - 1];

      //Change formatting of each score depending on the type to sort it
      if (TYPE == "Date") {
        let temp = SCORES[count].substring(0, 10);
        temp = temp.replace(/-/gi, "");
        temp = temp + (0.0001 * count);
        SCORES[count] = temp;
      } else if (TYPE == "Time") {
        if (SCORES[count] != "0") {
          let temp = SCORES[count];
          temp = temp.replace(/:/gi, "");
          SCORES[count] = temp;
        }
      } else if (TYPE == "Score" || TYPE == "Round") {
        let temp = SCORES[count];
        temp = temp + (0.0001 * count);
        SCORES[count] = temp;
      }

      //Delete scores that don't exist, and map the ones that do
      if (SCORES[count] == null) {
        SCORES.splice(count, 1);
      } else {
        console.log(`${childSnapshot.key} - ${SCORES[count]}`);
        playerMap.set(SCORES[count], { name: childSnapshot.val().name, user: childSnapshot.val().username, blook: childSnapshot.val().blook });
      }

      //Increase Count
      count++;
    });

    console.log(SCORES);

    //Sort the scores based on type
    let SORTED_SCORE;
    if (TYPE == "Date" || TYPE == "Time") {
      SORTED_SCORE = SCORES.sort(function (a, b) { return a - b });
    } else {
      SORTED_SCORE = SCORES.sort(function (a, b) { return b - a });
    }

    //Returns values that are greater than or equal to one.
    SORTED_SCORE = SORTED_SCORE.filter(function (a) {
      return a >= 1;
    });

    console.log(SORTED_SCORE);

    //Time to make shi- appear
    count = 0;
    SORTED_SCORE.forEach(function (child) {
      const MAP = playerMap.get(child);

      const TR = document.createElement("tr");
      TR.id = `${MAP.name}`.replace(/\s/g, '');

      for (let i = 0; i < 4; i++) {
        const TD = document.createElement("td");

        if (i == 0) {
          const TITLE = document.createElement("div");
          TITLE.classList.add("lb_title");
          TITLE.classList.add("title");
          textnode = document.createTextNode(`${count + 1}.`);
          TITLE.appendChild(textnode);

          TD.appendChild(TITLE);
        } else if (i == 1) {
          TD.classList.add("sticky");
          TD.classList.add("left");

          const DIV = document.createElement("div");
          DIV.classList.add("lb_person_div");
          DIV.classList.add("flex");

          const IMG = document.createElement("img");
          if (MAP.blook == "elite") {
            IMG.src = "https://i.ibb.co/vP0WW4B/Y-Elite.png";
          } else {
            IMG.src = `https://ac.blooket.com/marketassets/blooks/${MAP.blook}.svg`;
          }
          IMG.alt = `${MAP.blook} blook`;
          DIV.appendChild(IMG);

          const TITLE = document.createElement("div");
          TITLE.classList.add("lb_title");
          textnode = document.createTextNode(MAP.name);
          TITLE.appendChild(textnode);
          DIV.appendChild(TITLE);

          TD.appendChild(DIV);
        } else if (i == 2) {
          if (TYPE == "Date") {
            const TITLE = document.createElement("div");
            TITLE.classList.add("lb_title");

            let temp = Math.trunc(SORTED_SCORE[count]).toString();
            temp = temp.slice(0, 4) + "-" + temp.slice(4, 6) + "-" + temp.slice(6);
            textnode = document.createTextNode(temp.substring(0, temp.length - 1));

            TITLE.appendChild(textnode);
            TD.appendChild(TITLE);
          } else if (TYPE == "Time") {
            const TITLE = document.createElement("div");
            TITLE.classList.add("lb_title");

            const zeroPad = (num, places) => String(num).padStart(places, '0');
            let temp = zeroPad(Math.trunc(SORTED_SCORE[count]).toString(), 8);
            console.log(`temp - ${temp}`);
            textnode = document.createTextNode(temp.slice(0, 2) + ":" + temp.slice(2, 4) + ":" + temp.slice(4, 6) + "." + temp.slice(6));
            
            TITLE.appendChild(textnode);
            TD.appendChild(TITLE);
          } else {
            const TITLE = document.createElement("div");
            TITLE.classList.add("lb_title");
            
            let temp = Math.trunc(SORTED_SCORE[count]);
            temp = temp.toLocaleString();
            textnode = document.createTextNode(temp);

            TITLE.appendChild(textnode);
            TD.appendChild(TITLE);
          }
        } else if (i == 3) {
          const TITLE = document.createElement("div");
          TITLE.classList.add("lb_title");
          textnode = document.createTextNode(MAP.user);
          TITLE.appendChild(textnode);
          TD.appendChild(TITLE);
        }

        TR.appendChild(TD);
      }

      TBODY.appendChild(TR);
      count++;
    });
  });
}

function makeHeader(a) {
  const TR = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    const TD = document.createElement("td");

    const TITLE = document.createElement("div");
    TITLE.classList.add("lb_title");
    TITLE.classList.add("title");

    if (i == 0) {
      textnode = document.createTextNode("#");
      TD.style = "border-top-left-radius: 10px;";
    } else if (i == 1) {
      textnode = document.createTextNode("Person");
      TD.classList.add("sticky");
      TD.classList.add("left");
    } else if (i == 2) {
      textnode = document.createTextNode(a);
      if (a == "Date") {
        TD.setAttribute("title", "YYYY/MM/DD");
      }
    } else if (i == 3) {
      textnode = document.createTextNode("Username");
      TD.style = "border-top-right-radius: 10px;";
    }
    TITLE.appendChild(textnode);
    TD.appendChild(TITLE);
    TR.appendChild(TD);
  }
  THEAD.appendChild(TR);
}