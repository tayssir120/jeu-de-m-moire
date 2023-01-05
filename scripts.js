
const cards = document.querySelectorAll('.carte-mémoire');

let carte_retournée = false;
let verrouillage = false;
let carte1, carte2;

function retourner_carte() {
  if (verrouillage) return;
  if (this === carte1) return;

  this.classList.add('flip');

  if (!carte_retournée) {
    carte_retournée = true;
    carte1 = this;

    return;
  }

  carte2 = this;
  var x=document.getElementsByClassName('flip');
    if(x.length>=12){
  setTimeout(win,3000);
  }
  checkForMatch();
}

function checkForMatch() {
  let isMatch = carte1.dataset.id === carte2.dataset.id;

  isMatch ? disableCards() : tourner_carte();
}

function disableCards() {
  carte1.removeEventListener('click', retourner_carte);
  carte2.removeEventListener('click', retourner_carte);

  resetBoard();
}

function tourner_carte() {
  verrouillage = true;

  setTimeout(() => {
    carte1.classList.remove('flip');
    carte2.classList.remove('flip');
   
    
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [carte_retournée, verrouillage] = [false, false];
  [carte1, carte2] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', retourner_carte));

var modal = document.getElementById("myModal");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
 
}
 function win(){
 modal.style.display = "block";
    document.getElementById("police").classList.add('police');
  }
  function refresh(){
location.reload();
}