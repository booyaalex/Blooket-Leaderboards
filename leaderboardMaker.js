let LEADERBOARD;

async function createLeaderboard() {
    localStorage.setItem("leaderboard", 1);

    LEADERBOARD = localStorage.getItem("leaderboard");

    const response = await fetch("https://blooket.games/players.json");
    const JSON = await response.json();

    const LENGTH = JSON.length;
    const SCORES = [];
    const playerMap = new Map();
    let LOG;

    for (let i = 0; i < LENGTH; i++) {
        //Get Data
        console.log(i);
        SCORES[i] = JSON[i].stats[LEADERBOARD * 2 - 1];
        console.log(SCORES[i]);
        if (SCORES[i] == null) { 
           SCORES.splice(i, 1);
        } else {
            console.log(SCORES[i]);
            playerMap.set(SCORES[i], {name: JSON[i].name, user: JSON[i].userName, blook: JSON[i].blook});
            LOG = playerMap.get(SCORES[i]);
            console.log(LOG.name);
        }
    }
    console.log("SCORES: " + SCORES);
    console.log("SCORES.length: " + SCORES.length);
    let SORTED_SCORE = SCORES.sort( function(a, b) {return b-a} );
    SORTED_SCORE = SORTED_SCORE.filter(elm => elm);
    console.log("SORTED_SCORE: " + SORTED_SCORE);

    for(let i = 0; i < SORTED_SCORE.length; i++){
        console.log(SORTED_SCORE);
        console.log(i);
        let MAP = playerMap.get(SORTED_SCORE[i]);
        console.log(MAP.name);

        //Make Table Stuff
        let tr = document.createElement("tr");
        for(let a = 0; a < 5; a++) {
            let td = document.createElement("td");

            //Make Div
            let DIV = document.createElement("div");
            if(a == 1) {
                DIV.className = "statImgLB";
            } else {
                DIV.className = "statTitleLB";
            }

            //Make Content
            if(a == 0) {
                let textnode = document.createTextNode("#" + (i + 1) + ".");

                DIV.appendChild(textnode);
            }
            if(a == 1) {
                 let IMG = document.createElement("img");
                 IMG.className = "statImgLB";
                 if(MAP.blook == "elite"){
                    IMG.src = "https://i.ibb.co/vP0WW4B/Y-Elite.png";
                 } else if(MAP.blook == "ylm"){
                    IMG.src = "https://i.ibb.co/9TdzQVS/scuba.webp";
                 } else {
                    IMG.src = "https://ac.blooket.com/marketassets/blooks/" + MAP.blook + ".svg";
                 }
                console.log(IMG.src);
                IMG.alt = MAP.blook + " blook";
                IMG.width = 75;

                DIV.appendChild(IMG);
            }
            if(a == 2) {
                let NAME = document.createTextNode(MAP.name);

                DIV.appendChild(NAME);
            }
            if(a == 3) {
                let SCORE = document.createTextNode(SORTED_SCORE[i]);
                console.log(SCORE);

                DIV.appendChild(SCORE);
            }
            if(a == 4) {
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
}

createLeaderboard();


/*
1) "totalWins"
2) "totalAnswers"
3) "totalBlooks"
4) "fishingWeight": ,
5) "totalPoints": ,
6) "showdownWins": ,
7) "factoryUpgrades": ,
8) "boxesOpened": ,
9) "playersDefeated": ,
10) "gamesPlayed": ,
11) "totalTokens": ,
12) "dateCreated": ,
13) "mostCash1": ,
14) "mostCash7": ,
15) "mostCash60": ,
16) "millionCash": ,
17) "billionCash": ,
18) "trillionCash": ,
19) "snowNormal": ,
20) "snowNormalItem": ,
21) "snowNormalHit": ,
22) "clockNormal": ,
23) "clockNormalItem": ,
24) "clockNormalHit": ,
25) "snowChallenge": ,
26) "snowChallengeItem": ,
27) "snowChallengeHit": ,
28) "clockChallenge": ,
29) "clockChallengeItem": ,
30) "clockChallengeHit": ,
31) "mostWeight7": ,
32) "mostWeight15": ,
33) "mostWeight30": ,
34) "oneMillion": ,
35) "tenMillion": ,
36) "hundredThousand": ,
37) "onlyChick": ,
38) "onlySquirrel": ,
39) "onlyOwl": ,
40) "onlyFish": ,
41) "onlyElf": ,
42) "onlyPig": ,
43) "onlyDragon": ,
44) "onlyUnicorn": ,
45) "onlyWizard": ,
46) "sunnyMeadowHighest": ,
47) "lostDesertHighest": ,
48) "abandonedMineHighest": ,
49) "sunnyMeadowSpeed": ,
50) "lostDesertSpeed": ,
51) "abandonedMineSpeed": ,
52) "mostDamage": ,
53) "totalDamage": ,
54) "totalRounds": ,
55) "sunnyMeadowEasy": ,
56) "lostDesertEasy": ,
57) "abandonedMineEasy": ,
58) "crossroadsEasy": ,
59) "fracturedFactoryEasy": ,
60) "sunnyMeadowNormal": ,
61) "lostDesertNormal": ,
62) "abandonedMineNormal": ,
63) "crossroadsNormal": ,
64) "fracturedFactoryNormal": ,
65) "sunnyMeadowHard": ,
66) "lostDesertHard": ,
67) "abandonedMineHard": ,
68) "crossroadsHard": ,
69) "fracturedFactoryHard": ,
70) "highestDay": ,
71) "totalCafeCash": ,
72) "totalFoodServed": ,
73) "maxToast": ,
74) "maxUpgrades": ,
75) "day10": ,
76) "day50": ,
77) "allFood": ,
78) "maxFood": ,
79) "maxPeople": ,
80) "maxHappiness": ,
81) "maxMaterials": ,
82) "maxGold": ,
83) "mostPeople": ,
84) "fastestDeath": ,
85) "flappyBlook": 
*/