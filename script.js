let changeBackground = document.getElementById("content");
changeBackground.style.backgroundColor = "rgba(65, 185, 131, 1)";

let changeBackground2 = document.getElementById("output");
changeBackground2.style.backgroundColor = "rgba(0, 212, 255, 1)";

let changeTitleOne = document.querySelector("h2");
changeTitleOne.innerHTML = "Testando Manipulação de DOM com querySelector";

let changeTitleTwo = document.getElementById("secondh2");
changeTitleTwo.innerHTML = "Testando Manipulação de DOM com getElementyByID";

let changeLogo = document.querySelector("header");
changeLogo.style.backgroundColor = "gray";

let changeTagP = document.querySelector("p");
changeTagP.innerText =
  "Estou tentando mudar o que ja foi definido no HTML, utilizando o JS";
changeTagP.style.color = "blue";

let changeButton = document.querySelector("button");
changeButton.textContent = "Mudando botão DOM";
changeButton.style.backgroundColor = "green";

let changeDivUpload = document.querySelector(".upload");
changeDivUpload.style.backgroundColor = "green";

let changeSecondP = document.querySelector(".secondp");
changeSecondP.innerHTML =
  "Usei esse projeto como exemplo para treinar manipulação de DOM, consegui escrever isso pelo JS!!Uhuul!";

let changeOutputTratado = document.querySelector(".output-tratado");
changeOutputTratado.style.backgroundColor = "red";

let changeSecondButton = document.getElementById("baixar-arquivos");
changeSecondButton.style.backgroundColor = "blue";
changeSecondButton.innerHTML = "Alterando com JS";
