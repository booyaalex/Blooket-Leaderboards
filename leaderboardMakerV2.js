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


function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("mainBoard").innerHTML = "<div class='YO_Container'><div class='YO_Text'> Rankings </div></div><br><br>";
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
        //Declare const's to ame getting data easier.
        let displayName,
        userName,
        displayBlook;
        let stats = [];

        childKey = childSnapshot.key;
          console.log("User - " + childKey);

          displayName = childSnapshot.val().name;
        });
    });
}

  getData();