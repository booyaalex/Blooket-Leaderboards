const namesArray = [];
const idArray = [];
let OI = [];

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
    getStorage,
    ref,
    uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

const secFirebaseConfig = {
    apiKey: "AIzaSyBepZFDy6U3GQaJyTib-uItZOqLuW_Cv_o",
    authDomain: "blooketleaderboardserver.firebaseapp.com",
    databaseURL: "https://blooketleaderboardserver-default-rtdb.firebaseio.com/",
    projectId: "blooketleaderboardserver",
    storageBucket: "blooketleaderboardserver.appspot.com",
    messagingSenderId: "145605729271",
    appId: "1:145605729271:web:f02924e11bfb1472256cf2"
};
const app = initializeApp(secFirebaseConfig);
const storage = getStorage(app);

let storageRef;
async function uploadImage() {
    OI = [JSON.parse(document.getElementById("statsInput").value)];
    console.log(OI[0]);
    let displayName = document.getElementById("displayNameInput").value;
    let leaderboard = document.getElementById("lbSubmit").value;
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const NUMBER = namesArray.indexOf(displayName);
    if (OI[0]._id == idArray[NUMBER]) {
        if (leaderboard == null) {
            alert("You need to pick a category for your run!");
        } else {
            if (displayName == null) {
                alert('Please enter your display name in the "Display Name" box.');
            } else {
                console.log("wowie!!");
                if (file) {
                    alert("Stay on this page until you are instructed to do so. Press ok to confirm.");
                    storageRef = ref(storage, `${displayName}/${leaderboard}`); //I assume something to get the file and set its name
                    await uploadBytes(storageRef, file); //Uploads File
                    console.log("In the database!");
                    alert("You may now leave the webpage!");
                }
            }
        }
    } else {
        alert("It looks like no one in the database has your ID. Try using a different account for your stats or repaste your account stats!");
    }
}
const submitButton = document.getElementById("videoSubmit");
submitButton.addEventListener('click', uploadImage);

/*const firebaseConfigThree = {
    apiKey: "AIzaSyBepZFDy6U3GQaJyTib-uItZOqLuW_Cv_o",
    authDomain: "blooketleaderboardserver.firebaseapp.com",
    databaseURL: "https://blooketleaderboardserver-default-rtdb.firebaseio.com",
    projectId: "blooketleaderboardserver",
    storageBucket: "blooketleaderboardserver.appspot.com",
    messagingSenderId: "145605729271",
    appId: "1:145605729271:web:f02924e11bfb1472256cf2"
};
firebase.initializeApp(firebaseConfigThree);*/

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        let a = 0;
        snapshot.forEach(function (childSnapshot) {
            namesArray[a] = childSnapshot.val().name;
            idArray[a] = childSnapshot.val().userID;
            a++;
        });
        console.log(namesArray[0]);
        console.log(idArray[0]);
    });
}
getData();