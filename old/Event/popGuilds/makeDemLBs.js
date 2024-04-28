const GUILD = localStorage.getItem("guild") - 1;

async function makeLB() {
    const response = await fetch("popLeaderboard.json");
    const JSON = await response.json();
    for(let i = 0; i < JSON[GUILD].numMembers; i++) {
        //Table
        let table = document.createElement("table");
        table.className = "box";


        //TR
        let tr = document.createElement("tr");


        //Name
        let name = document.createElement("td");

        let nameSpan = document.createElement("span");
        nameSpan.className = "boxText";
        let textnode1 = document.createTextNode(JSON[GUILD].members[i].name);
        nameSpan.appendChild(textnode1);
        
        name.appendChild(nameSpan);


        //User
        let user = document.createElement("td");
        user.className = "tdUser";

        let userSpan = document.createElement("span");
        userSpan.className = "boxTextUser";
        userSpan.style.float = "right";

        let textnode2 = document.createTextNode("Blooket: " + JSON[GUILD].members[i].blooketName);
        userSpan.appendChild(textnode2);

        user.appendChild(userSpan);


        //Gold
        let gold = document.createElement("td");
        gold.className = "tdGold";

        let DIV = document.createElement("div");
        DIV.className = "spacingBoxRight";

        let goldSpan = document.createElement("span");
        goldSpan.className = "boxTextGold";
        let textnode3 = document.createTextNode(JSON[GUILD].members[i].gold);
        goldSpan.appendChild(textnode3);
        DIV.appendChild(goldSpan);

        let IMG = document.createElement("img");
        IMG.src = "https://i.ibb.co/MfTLP2t/gold.png";
        IMG.alt = "Gold Icon";
        IMG.style.width = "25px";
        IMG.style.height = "25px";
        DIV.appendChild(IMG);

        gold.appendChild(DIV);


        tr.appendChild(name);
        tr.appendChild(user);
        tr.appendChild(gold);


        table.appendChild(tr);

        document.getElementById("main").append(table);
        let BR = document.createElement("br");
        document.getElementById("main").append(BR);
    }   
}

makeLB();