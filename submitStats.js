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

function getDemStats() {
    let OI = [];
    OI = [JSON.parse(document.getElementById("epic_stats").value)];
    console.log(OI);

    console.log(OI[0]._id);

    const displayName = document.getElementById("display_name").value;
    console.log(displayName);
    let temp = OI[0].blook;
    const temp2 = temp.toLowerCase();
    const displayBlook = temp2.replace(/\s/g, '');

    const totalWins = OI[0].wins;
    const totalAnswers = OI[0].correctAnswers;
    const fishingWeight = OI[0].totalFishWeight;
    const totalPoints = OI[0].totalPoints;
    const showdownWins = OI[0].showdownWins;
    const factoryUpgrades = OI[0].upgrades;
    const boxesOpened = OI[0].boxesOpened;
    const playersDefeated = OI[0].playersDefeated;
    const gamesPlayed = OI[0].gamesPlayed;
    const totalTokens = OI[0].totalTokens;
    const dateCreated = OI[0].dateCreated;

    const test = OI[0].unlocks;
    console.log(test);
    const totalBlooks = Object.keys(test).length;
    
    const contactInfo = document.getElementById("contact_info").value;

    firebase.database().ref("/").child(displayName).update({
        "blook" : displayBlook,
        "name" : displayName,
        "username" : OI[0].name,
        "test" : [
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
            dateCreated
        ],
        "contact" : contactInfo
    });
}
