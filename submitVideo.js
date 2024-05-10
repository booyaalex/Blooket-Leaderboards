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
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const NUMBER = namesArray.indexOf(displayName);
    if (OI[0]._id == idArray[NUMBER]) {
        console.log("wowie!!");
        if (file) {
            storageRef = ref(storage, `${displayName}/${file.name}`); //I assume something to get the file and set its name
            await uploadBytes(storageRef, file); //Uploads File
            console.log("test");
        }
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