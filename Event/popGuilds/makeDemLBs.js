const GUILD = localStorage.getItem("guild") - 1;

async function makeLB() {
    const response = await fetch("popLeaderboard.json");
    const JSON = await response.json();
    for(let i = 0; i < JSON[GUILD].numMembers; i++) {
        //Table
        let BOX = document.createElement("div");
        BOX.className = "box";


        //Name
        let name = document.createElement("div");
        name.classList.add("boxSec");

        let nameText = document.createElement("p");
        nameText.className = "boxTxt";
        let textnode1 = document.createTextNode(JSON[GUILD].members[i].name);
        nameText.appendChild(textnode1);
        
        name.appendChild(nameText);


        //User
        let user = document.createElement("div");
        user.classList.add("boxSec");
        user.classList.add("user");

        let userText = document.createElement("p");
        userText.classList.add("boxTxt");
        userText.classList.add("user");

        let textnode2 = document.createTextNode("Blooket: " + JSON[GUILD].members[i].blooketName);
        userText.appendChild(textnode2);

        user.appendChild(userText);


        //Gold
        let gold = document.createElement("div");
        gold.classList.add("boxSec");
        gold.classList.add("gold");

        let goldText = document.createElement("p");
        gold.classList.add("boxTxt");
        let temp = JSON[GUILD].members[i].gold;
        let textnode3 = document.createTextNode(temp.toLocaleString());
        goldText.appendChild(textnode3);
        gold.appendChild(goldText);

        let IMG = document.createElement("img");
        IMG.src = "https://i.ibb.co/MfTLP2t/gold.png";
        IMG.alt = "Gold Icon";
        gold.appendChild(IMG);


        BOX.appendChild(name);
        BOX.appendChild(user);
        BOX.appendChild(gold);

        document.getElementById("main").append(BOX);
        let BR = document.createElement("br");
        document.getElementById("main").append(BR);
    }   
}

makeLB();