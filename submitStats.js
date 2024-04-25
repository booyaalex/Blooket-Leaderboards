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
const nameMap = [];
let SCORES = [];

scoreMap = new Map();
let playerScores;

function getStuff() {
    firebase.database().ref("/").on('value', function (snapshot) {
        let a = 0;
        snapshot.forEach(function (childSnapshot) {
            //Declare const's to make getting data easier.
            let displayName,
                userName,
                displayBlook,
                ID,
                scores;

            let LOG;


            //Get Dem Data
            childKey = childSnapshot.key;

            displayName = childSnapshot.val().name;
            userName = childSnapshot.val().username;
            displayBlook = childSnapshot.val().blook;
            ID = childSnapshot.val().userID;

            scores = childSnapshot.val().test;
            scoreMap.set(displayName, { scores: scores });
            playerScores = scoreMap.get(displayName);

            SCORES[a] = childSnapshot.val().test[1 * 2 - 1];
            let temp = SCORES[a];
            temp = temp + (0.0001 * a);
            SCORES[a] = temp;
            if (SCORES[a] == null) {
                SCORES.splice(a, 1);
            } else {
                playerMap.set(SCORES[a], { name: displayName, user: userName, blook: displayBlook, Id: ID });
                LOG = playerMap.get(SCORES[a]);
                nameMap[a] = (LOG.name);
            }

            a++;
        });
    });
}

getStuff();
function getDemStats() {
    let OI = [];
    OI = [JSON.parse(document.getElementById("epic_stats").value)];

    const displayName = document.getElementById("display_name").value;
    let temp = OI[0].blook;
    const temp2 = temp.toLowerCase();
    const displayBlook = temp2.replace(/\s/g, '');

    const totalWins = OI[0].wins;
    const totalAnswers = OI[0].correctAnswers;
    const fishingWeight = OI[0].totalFishWeight;
    const totalPoints = OI[0].classicPoints;
    const showdownWins = OI[0].showdownWins;
    const factoryUpgrades = OI[0].upgrades;
    const boxesOpened = OI[0].boxesOpened;
    const playersDefeated = OI[0].playersDefeated;
    const gamesPlayed = OI[0].gamesPlayed;
    const totalTokens = OI[0].totalTokens;
    const dateCreated = OI[0].dateCreated;

    const totalBlooks = OI[0].numUnlocks;

    const contactInfo = document.getElementById("contact_info").value;

    const ID = OI[0]._id;
    if (contactInfo == null) {
        alert("Fill in the contact info bozo!");
    } else {
        if (nameMap.includes(displayName) == true) {
            console.log("You may be doing a hack, that's not okie-dokie!");
            const NUMBER = nameMap.indexOf(displayName);
            const CHECK_ID = playerMap.get(SCORES[NUMBER]);
            if (OI[0]._id == CHECK_ID.Id) {
                console.log("Okie everything is good");
                playerScore = scoreMap.get(displayName);
                console.log(playerScore.scores[25]);
                firebase.database().ref("/").child(displayName).update({
                    "blook": displayBlook,
                    "name": displayName,
                    "username": OI[0].name,
                    "userID": ID,
                    "test": [
                        "totalWins",
                        totalWins,
                        "totalAnswers",
                        totalAnswers,
                        "totalBlooks",
                        totalBlooks,
                        "fishingWeight",
                        fishingWeight,
                        "totalPoints",
                        totalPoints,
                        "showdownWins",
                        showdownWins,
                        "factoryUpgrades",
                        factoryUpgrades,
                        "boxesOpened",
                        boxesOpened,
                        "playersDefeated",
                        playersDefeated,
                        "gamesPlayed",
                        gamesPlayed,
                        "totalTokens",
                        totalTokens,
                        "dateCreated",
                        dateCreated,
                        "mostCash1",
                        playerScore.scores[25]
                    ],
                    "contact": contactInfo
                });
                alert("Your stats have been submitted. YIPPEE!!");
            }
        } else if (nameMap.includes(displayName) == false) {
            firebase.database().ref("/").child(displayName).update({
                "blook": displayBlook,
                "name": displayName,
                "username": OI[0].name,
                "userID": ID,
                "test": [
                    "totalWins",
                    totalWins,
                    "totalAnswers",
                    totalAnswers,
                    "totalBlooks",
                    totalBlooks,
                    "fishingWeight",
                    fishingWeight,
                    "totalPoints",
                    totalPoints,
                    "showdownWins",
                    showdownWins,
                    "factoryUpgrades",
                    factoryUpgrades,
                    "boxesOpened",
                    boxesOpened,
                    "playersDefeated",
                    playersDefeated,
                    "gamesPlayed",
                    gamesPlayed,
                    "totalTokens",
                    totalTokens,
                    "dateCreated",
                    dateCreated,
                    "mostCash1",
                    null,
                    "mostCash7",
                    null,
                    "mostCash60",
                    null,
                    "millionCash",
                    null,
                    "billionCash",
                    null,
                    "trillionCash",
                    null,
                    "snowNormal",
                    null,
                    "snowNormalItem",
                    null,
                    "snowNormalHit",
                    null,
                    "clockNormal",
                    null,
                    "clockNormalItem",
                    null,
                    "clockNormalHit",
                    null,
                    "snowChallenge",
                    null,
                    "snowChallengeItem",
                    null,
                    "snowChallengeHit",
                    null,
                    "clockChallenge",
                    null,
                    "clockChallengeItem",
                    null,
                    "clockChallengeHit",
                    null,
                    "mostWeight7",
                    null,
                    "mostWeight15",
                    null,
                    "mostWeight30",
                    null,
                    "oneMillion",
                    null,
                    "tenMillion",
                    null,
                    "hundredThousand",
                    null,
                    "onlyChick",
                    null,
                    "onlySquirrel",
                    null,
                    "onlyOwl",
                    null,
                    "onlyFish",
                    null,
                    "onlyElf",
                    null,
                    "onlyPig",
                    null,
                    "onlyDragon",
                    null,
                    "onlyUnicorn",
                    null,
                    "onlyWizard",
                    null,
                    "sunnyMeadowHighest",
                    null,
                    "lostDesertHighest",
                    null,
                    "abandonedMineHighest",
                    null,
                    "sunnyMeadowSpeed",
                    null,
                    "lostDesertSpeed",
                    null,
                    "abandonedMineSpeed",
                    null,
                    "mostDamage",
                    null,
                    "totalDamage",
                    null,
                    "totalRounds",
                    null,
                    "sunnyMeadowEasy",
                    null,
                    "lostDesertEasy",
                    null,
                    "abandonedMineEasy",
                    null,
                    "crossroadsEasy",
                    null,
                    "fracturedFactoryEasy",
                    null,
                    "sunnyMeadowNormal",
                    null,
                    "lostDesertNormal",
                    null,
                    "abandonedMineNormal",
                    null,
                    "crossroadsNormal",
                    null,
                    "fracturedFactoryNormal",
                    null,
                    "sunnyMeadowHard",
                    null,
                    "lostDesertHard",
                    null,
                    "abandonedMineHard",
                    null,
                    "crossroadsHard",
                    null,
                    "fracturedFactoryHard",
                    null,
                    "highestDay",
                    null,
                    "totalCafeCash",
                    null,
                    "totalFoodServed",
                    null,
                    "maxToast",
                    null,
                    "maxUpgrades",
                    null,
                    "day10",
                    null,
                    "day50",
                    null,
                    "allFood",
                    null,
                    "maxFood",
                    null,
                    "maxPeople",
                    null,
                    "maxHappiness",
                    null,
                    "maxMaterials",
                    null,
                    "maxGold",
                    null,
                    "mostPeople",
                    null,
                    "fastestDeath",
                    null,
                    "flappyBlook",
                    null
                ],
                "contact": contactInfo
            });
            alert("Your stats have been submitted. YIPPEE!!");
        }
    }
}

getDemStats();