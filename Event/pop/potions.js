let popUp = false;

function openUp() {
    console.log(event.target);
  //Get All Box Elements
  nodeList = document.querySelectorAll(".box");
  //Compare Box Elements
  compareBox();
  //Activate PopUp
  showPopUp();
}

function showPopUp() {
  if (popUp == 0) {
    //Stop Scrolling
    document.body.style.overflowY = "hidden";
    //Visibility
    document.getElementById("popUp").style.visibility = "visible";
    //Ingridients
    for (let a = 0; a < ingredients.length; a++) {
      ingImg = document.createElement("img");
      ingImg.src = "../../Images/popIng/" + ingredients[a] + ".png";
      ingImg.className = "ingrImg";
      document.getElementById("ingList").appendChild(ingImg);
    }
    //Ing Names
    for (let b = 0; b < ingredients.length; b++) {
      ingText = document.createElement("p");
      ingText.innerHTML = ingredients[b];
      ingText.className = "ingrText";
      document.getElementById("ingName").appendChild(ingText);
    }
    //Other Stuff
    document.getElementById("potionName").innerHTML = potion;
    document.getElementById("goldCount").innerHTML = gold;
    document.getElementById("potionImg").src = img;
    popUp = 1;

    //Shading
    document.body.style.backgroundColor = "#281c1c";
    document.body.style.opacity = "0.9";
    document.getElementById("main").style.opacity = "0.7";
  }
}

async function makePotions() {
  let potionList = [];
  const response = await fetch(
    "https://blooket.games/Event/pop/potionRecipes.json"
  );
  const JSON = await response.json();

  //Get a List of Potion Names
  let i = 0;
  Object.keys(JSON).forEach(function (key) {
    potionList[i] = key;
    i++;
  });
  console.log(potionList.length);

  let a = 0;
  const MAIN_DIV = document.getElementById("main");
  for (let i = 0; i < potionList.length / 3; i++) {
    const ROW = document.createElement("div");
    ROW.className = "row";
    makeBox(potionList[a], ROW);
    makeBox(potionList[a], ROW);
    makeBox(potionList[a], ROW);
    MAIN_DIV.appendChild(ROW);
  }

  function makeBox(potionName, row) {
    const potion = JSON[`${potionName}`];

    const BOX = document.createElement("div");
    BOX.id = potionName;
    BOX.className = "boxes";
    BOX.setAttribute("onclick", "makePopUp(this)");

    const POTION_IMG = document.createElement("img");
    POTION_IMG.src = `../../Images/popPot/${removeSpaces(potionName)}.png`;
    POTION_IMG.className = "boxImg";
    POTION_IMG.alt = potionName;
    console.log(POTION_IMG.src);
    BOX.appendChild(POTION_IMG);

    const POTION_NAME = document.createElement("p");
    POTION_NAME.className = "boxText";
    POTION_NAME.innerHTML = potionName;
    BOX.appendChild(POTION_NAME);

    const POTION_GOLD = document.createElement("p");
    POTION_GOLD.className = "boxText";
    let textnode = document.createTextNode(`${potion.price}`);
    const GOLD_ICON = document.createElement("img");
    GOLD_ICON.className = "goldIcon";
    GOLD_ICON.src = "https://i.ibb.co/MfTLP2t/gold.png";
    GOLD_ICON.alt = "Gold Icon";
    POTION_GOLD.appendChild(textnode);
    POTION_GOLD.appendChild(GOLD_ICON);
    BOX.appendChild(POTION_GOLD);

    row.appendChild(BOX);
    a++;
  }
  function removeSpaces(name) {
    const str = name.replace(/\s/g, "");
    return str;
  }
}

async function makePopUp(box) {
  const response = await fetch(
    "https://blooket.games/Event/pop/potionRecipes.json"
  );
  const JSON = await response.json();
  console.log(box);

  if(!popUp) {
    document.body.style.overflowY = "hidden";
    const POPUP = document.getElementById("popUp");
    const IMG = document.getElementById("selectedImg");
    const NAME = document.getElementById("selectedName");
    const GOLD = document.getElementById("selectedGold");
    const potionName = box.id;
    const potion = JSON[`${potionName}`];
    const INGREDIENT_LIST = document.getElementById("ingredientList");
    
    POPUP.style.visibility = "visible";
    IMG.src = `../../Images/popPot/${removeSpaces(potionName)}.png`;
    IMG.alt = potionName;
    NAME.innerHTML = potionName;
    GOLD.innerHTML = "";
    let textnode = document.createTextNode(potion.price);
    const GOLD_ICON = document.createElement("img");
    GOLD_ICON.className = "goldIcon";
    GOLD_ICON.src = "https://i.ibb.co/MfTLP2t/gold.png";
    GOLD_ICON.alt = "Gold Icon";
    GOLD.appendChild(textnode);
    GOLD.appendChild(GOLD_ICON);

    INGREDIENT_LIST.innerHTML = "";
    const INGREDIENTS = potion.ingredients;
    for(let i = 0; i < INGREDIENTS.length; i++) {
      const DIV = document.createElement("div");
      DIV.className = "ingredient";

      const IMG = document.createElement("img");
      IMG.className = "boxImg";
      IMG.src = `../../Images/popIng/${INGREDIENTS[i]}.png`;
      IMG.alt = `${INGREDIENTS[i]}`;
      DIV.appendChild(IMG);

      const P = document.createElement("p");
      P.className = "boxText";
      P.innerHTML = `${INGREDIENTS[i]}`;
      DIV.appendChild(P);

      INGREDIENT_LIST.appendChild(DIV);
    }
    

    popUp = true;

    function removeSpaces(name) {
      const str = name.replace(/\s/g, "");
      return str;
    }
  }
}

function closeUp() {
  if (popUp) {
    popUp = false;
    document.body.style.overflowY = "visible";
    document.getElementById("popUp").style.visibility = "hidden";
  }
}

makePotions();
