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
                        playerScore.scores[25],
                        "mostCash7",
                        0,
                        "mostCash60",
                        0,
                        "millionCash",
                        0,
                        "billionCash",
                        0,
                        "trillionCash",
                        0,
                        "snowNormal",
                        0,
                        "snowNormalItem",
                        0,
                        "snowNormalHit",
                        0,
                        "clockNormal",
                        0,
                        "clockNormalItem",
                        0,
                        "clockNormalHit",
                        0,
                        "snowChallenge",
                        0,
                        "snowChallengeItem",
                        0,
                        "snowChallengeHit",
                        0,
                        "clockChallenge",
                        0,
                        "clockChallengeItem",
                        0,
                        "clockChallengeHit",
                        0,
                        "mostWeight7",
                        0,
                        "mostWeight15",
                        0,
                        "mostWeight30",
                        0,
                        "oneMillion",
                        0,
                        "tenMillion",
                        0,
                        "hundredThousand",
                        0,
                        "onlyChick",
                        0,
                        "onlySquirrel",
                        0,
                        "onlyOwl",
                        0,
                        "onlyFish",
                        0,
                        "onlyElf",
                        0,
                        "onlyPig",
                        0,
                        "onlyDragon",
                        0,
                        "onlyUnicorn",
                        0,
                        "onlyWizard",
                        0,
                        "sunnyMeadowHighest",
                        0,
                        "lostDesertHighest",
                        0,
                        "abandonedMineHighest",
                        0,
                        "sunnyMeadowSpeed",
                        0,
                        "lostDesertSpeed",
                        0,
                        "abandonedMineSpeed",
                        0,
                        "mostDamage",
                        0,
                        "totalDamage",
                        0,
                        "totalRounds",
                        0,
                        "sunnyMeadowEasy",
                        0,
                        "lostDesertEasy",
                        0,
                        "abandonedMineEasy",
                        0,
                        "crossroadsEasy",
                        0,
                        "fracturedFactoryEasy",
                        0,
                        "sunnyMeadowNormal",
                        0,
                        "lostDesertNormal",
                        0,
                        "abandonedMineNormal",
                        0,
                        "crossroadsNormal",
                        0,
                        "fracturedFactoryNormal",
                        0,
                        "sunnyMeadowHard",
                        0,
                        "lostDesertHard",
                        0,
                        "abandonedMineHard",
                        0,
                        "crossroadsHard",
                        0,
                        "fracturedFactoryHard",
                        0,
                        "highestDay",
                        0,
                        "totalCafeCash",
                        0,
                        "totalFoodServed",
                        0,
                        "maxToast",
                        0,
                        "maxUpgrades",
                        0,
                        "day10",
                        0,
                        "day50",
                        0,
                        "allFood",
                        0,
                        "maxFood",
                        0,
                        "maxPeople",
                        0,
                        "maxHappiness",
                        0,
                        "maxMaterials",
                        0,
                        "maxGold",
                        0,
                        "mostPeople",
                        0,
                        "fastestDeath",
                        0,
                        "flappyBlook",
                        0
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
                    0,
                    "mostCash7",
                    0,
                    "mostCash60",
                    0,
                    "millionCash",
                    0,
                    "billionCash",
                    0,
                    "trillionCash",
                    0,
                    "snowNormal",
                    0,
                    "snowNormalItem",
                    0,
                    "snowNormalHit",
                    0,
                    "clockNormal",
                    0,
                    "clockNormalItem",
                    0,
                    "clockNormalHit",
                    0,
                    "snowChallenge",
                    0,
                    "snowChallengeItem",
                    0,
                    "snowChallengeHit",
                    0,
                    "clockChallenge",
                    0,
                    "clockChallengeItem",
                    0,
                    "clockChallengeHit",
                    0,
                    "mostWeight7",
                    0,
                    "mostWeight15",
                    0,
                    "mostWeight30",
                    0,
                    "oneMillion",
                    0,
                    "tenMillion",
                    0,
                    "hundredThousand",
                    0,
                    "onlyChick",
                    0,
                    "onlySquirrel",
                    0,
                    "onlyOwl",
                    0,
                    "onlyFish",
                    0,
                    "onlyElf",
                    0,
                    "onlyPig",
                    0,
                    "onlyDragon",
                    0,
                    "onlyUnicorn",
                    0,
                    "onlyWizard",
                    0,
                    "sunnyMeadowHighest",
                    0,
                    "lostDesertHighest",
                    0,
                    "abandonedMineHighest",
                    0,
                    "sunnyMeadowSpeed",
                    0,
                    "lostDesertSpeed",
                    0,
                    "abandonedMineSpeed",
                    0,
                    "mostDamage",
                    0,
                    "totalDamage",
                    0,
                    "totalRounds",
                    0,
                    "sunnyMeadowEasy",
                    0,
                    "lostDesertEasy",
                    0,
                    "abandonedMineEasy",
                    0,
                    "crossroadsEasy",
                    0,
                    "fracturedFactoryEasy",
                    0,
                    "sunnyMeadowNormal",
                    0,
                    "lostDesertNormal",
                    0,
                    "abandonedMineNormal",
                    0,
                    "crossroadsNormal",
                    0,
                    "fracturedFactoryNormal",
                    0,
                    "sunnyMeadowHard",
                    0,
                    "lostDesertHard",
                    0,
                    "abandonedMineHard",
                    0,
                    "crossroadsHard",
                    0,
                    "fracturedFactoryHard",
                    0,
                    "highestDay",
                    0,
                    "totalCafeCash",
                    0,
                    "totalFoodServed",
                    0,
                    "maxToast",
                    0,
                    "maxUpgrades",
                    0,
                    "day10",
                    0,
                    "day50",
                    0,
                    "allFood",
                    0,
                    "maxFood",
                    0,
                    "maxPeople",
                    0,
                    "maxHappiness",
                    0,
                    "maxMaterials",
                    0,
                    "maxGold",
                    0,
                    "mostPeople",
                    0,
                    "fastestDeath",
                    0,
                    "flappyBlook",
                    0
                ],
                "contact": contactInfo
            });
            alert("Your stats have been submitted. YIPPEE!!");
        }
    }
}

getDemStats();