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

const displayNameInput = document.getElementById("video_display_name");
const accountStatsInput = document.getElementById("video_account_stats");
const leaderboardInput = document.getElementById("video_leaderboard");
const ageCheckbox = document.getElementById("video_age");
const privacyCheckbox = document.getElementById("video_privacy");
const submitButton = document.getElementById("video_submit");

let storageRef;
async function uploadImage() {
  if (
    !ageCheckbox.checked ||
    !privacyCheckbox.checked
  ) {
    alert('Please agree to the Privacy Policy and be over the age of 13!');
  } else {
    OI = [JSON.parse(accountStatsInput.value)];
    console.log(OI[0]);
    let temp = displayNameInput.value;
    let displayName = profanityCleaner.clean(temp);
    let leaderboard = leaderboardInput.value;
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    console.log(file.name);
    const NUMBER = namesArray.indexOf(displayName);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    if (OI[0]._id == idArray[NUMBER]) {
      if (leaderboard == null) {
        alert("You need to pick a category for your run!");
      } else {
        if (displayName == null) {
          alert('Please enter your display name in the "Display Name" box.');
        } else {
          console.log("wowie!!");
          if (file) {
            if (fileType(file.name) == "mp4" || fileType(file.name) == "webm" || fileType(file.name) == "MOV" || fileType(file.name) == "mkv") {
              alert("Stay on this page until you are instructed to do so. Press ok to confirm.");

              storageRef = ref(storage, `${displayName}/${file.name}`); //I assume something to get the file and set its name
              await uploadBytes(storageRef, file); //Uploads File

              
              firebase.database().ref("/Runs").on('value', function (snapshot) {
                let runCount = 0;
                snapshot.forEach(function (run) {
                  runCount++;
                });
                localStorage.setItem("runCount", runCount);
              });

              const number = Number(localStorage.getItem("runCount")) + 1;
              console.log(number);

              firebase.database().ref("/Runs").child(`run_${number}`).set({
                date: today,
                runType: leaderboard,
                score: null,
                user: displayName,
                verified: false
              });

              console.log("In the database!");
              alert("You may now leave the webpage!");
            } else {
              alert("Please provide a video file with a proper extension (.mp4, .webm, .MOV, .mkv)")
            }
          } else {
            alert("Please provide a video file!");
          }
        }
      }
    } else {
      alert("It looks like no one in the database has your ID. Try using a different account for your stats or repaste your account stats!");
    }
  }
}

submitButton.addEventListener('click', uploadImage);

function getData() {
  firebase.database().ref("/Users").on('value', function (snapshot) {
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

function getRunCount() {

  return count;
}
function fileType(filename) {
  return filename.split('.').pop();
}