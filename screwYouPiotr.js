const DIV = document.getElementsByTagName("div");
const DIV_LENGTH = DIV.length;
console.log(DIV);
console.log(DIV_LENGTH);

console.log(DIV[DIV_LENGTH - 2]);
DIV[DIV_LENGTH - 1].innerHTML = "";