var options = document.querySelectorAll("p");
var button = document.getElementById("botao1");
var buttons = document.getElementsByTagName("button");
var sections = document.getElementsByTagName("section");

// Ao clicar, reseta a aparência de todas as opções de respostas e destaca a escolhida.
for(i=0; i < options.length; i++) {
  options[i].addEventListener('click', changeOption);
  options[i].addEventListener('click', includeResult);
}

function changeOption() {
  var sectionOptions = this.parentElement.getElementsByTagName("p");
  for(j=0; j<sectionOptions.length; j++) {
    sectionOptions[j].style.backgroundColor = "#eee";
    sectionOptions[j].style.color = "black";
  }
  this.style.backgroundColor = "#3a3aff";
  this.style.color = "#fff";
  // var choose = this.getAttribute("data-option");
  var buttonSection = this.parentElement.getElementsByTagName("button");
  buttonSection[0].disabled = false;
}

// Barra de Progresso do Quiz
var barLoading = document.getElementById("load");
var asideWidth = document.getElementById("aside").offsetWidth; // OK
var documentHeight = document.body.scrollHeight; // OK
window.onscroll = function(){
  var windowScroll = window.scrollY;
  barLoading.style.width = (parseInt(asideWidth) / (parseInt(documentHeight) - window.innerHeight)) * windowScroll + "px";
}

// Rolagem da tela para a próxima seção
function nextSection() {
  var nextSectionDistance  = this.parentElement.nextSibling.offsetTop;
  window.scrollTo({
    top: nextSectionDistance,
    behavior: 'smooth'
  });
}

for(a = 0; a < buttons.length; a++) {
  buttons[a].addEventListener('click', nextSection);
}

// Criação do Array de Resultados baseado no número de questões
var listaResultados = [];
for(i=0; i<sections.length; i++) {
  listaResultados.push(null);
}


function includeResult() {
  var choose = this.getAttribute("data-option");
  for(i=0; i<sections.length; i++) {
   if(this.parentNode == sections[i]) {
     listaResultados[i] = parseInt(choose);
     console.log(listaResultados);
   } 
  }
}


// Resultado
function showResult() {
  // Soma os valores de todos os itens do array
  var resultTotal = listaResultados.reduce(function(anterior, atual) {
    return anterior + atual;
  });

  switch(resultTotal) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      var message = "Sua pontuação é de " + resultTotal + " e seu curso é de APP";
      modal(message);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      var message = "Sua pontuação é de " + resultTotal + " e seu curso é de VMK";
      modal(message);
      break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      var message = "Sua pontuação é de " + resultTotal + " e seu curso é de INF";
      modal(message);
      break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
      var message = "Sua pontuação é de " + resultTotal + " e seu curso é de ROB";
      modal(message);
      break;
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
      var message = "Sua pontuação é de " + resultTotal + " e seu curso é de CGM";
      modal(message);
      break;
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
      var message = "Sua pontuação é de " + resultTotal + " e seu curso é de MCC";
      modal(message);
      break;
  }
}

botao6.addEventListener('click', showResult);

// Resultado
function modal (message) {
  var bg   = document.createElement("div");
  var text = document.createTextNode(message);
  bg.setAttribute("id", "bg-modal");
  bg.appendChild(text);
  document.body.appendChild(bg);
  setTimeout(function(){
    document.body.removeChild(bg);
  }, 5000);
}