const firebaseConfig = {
    apiKey: "AIzaSyAE9gU2G-fE6LKikDDIz8s2Jf6M_FEs7A8",
    authDomain: "blooketleaderboardserver.firebaseapp.com",
    databaseURL: "https://blooketleaderboardserver-default-rtdb.firebaseio.com",
    projectId: "blooketleaderboardserver",
    storageBucket: "blooketleaderboardserver.appspot.com",
    messagingSenderId: "145605729271",
    appId: "1:145605729271:web:f02924e11bfb1472256cf2"
};
firebase.initializeApp(firebaseConfig);

const playerMap = new Map();

function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("mainBoard").innerHTML = "<div class='YO_Container'><div class='YO_Text'> Rankings </div></div><br><br><table id='TABLE' style='justify-content: space-evenly;  margin-left: auto; margin-right: auto;'><tr><td><div class='statsBoxLB'><div class='statTitleLB'>Ranking</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>Blook</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>Person</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>Time</div></div></td><td><div class='statsBoxLB'><div class='statTitleLB'>Blooket Username</div></div></td></tr></table>";
    let i = 0;
    snapshot.forEach(function(childSnapshot) { 
        //Declare const's to ame getting data easier.
        let displayName,
        userName,
        displayBlook;
        let stats = [];

        childKey = childSnapshot.key;
          console.log("User - " + childKey);

          displayName = childSnapshot.val().name;
          console.log("displayName - " + displayName);
          userName = childSnapshot.val().username;
          console.log("userName - " + userName);
          displayBlook = childSnapshot.val().blook;
          console.log("displayBlook - " + displayBlook);
          stats[i] = childSnapshot.val().test[(i + 1) * 2];
            console.log(stats);

          i++;
        });
    });
}

  getData();