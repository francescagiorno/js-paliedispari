var choiceNumber = parseInt(prompt ("Scegli un numero da 1 a 5"));
var choiseEvenOdd = prompt("pari o dispari?");


// funzione numero number
function randomNumber(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//somma numero scleto dall'utente e numero casuale
 var somma = choiceNumber + randomNumber (1, 5);
document.getElementById("somma").innerHTML = "il totale è : " + somma;

//pari o dispari
function evenOrOdd(){
  if (somma % 2 == 0 && choiceNumber == 2){
    document.getElementById('endNumber').innerHTML = "hai vinto!!!";
  } else if (somma % 2 == 0 &&  choiceNumber == 1){
    document.getElementById('endNumber').innerHTML = "Hai perso!";
  } else if (somma % 2 ==1 && choiceNumber == 1) {
    document.getElementById('endNumber').innerHTML ="hai perso!";
  }else {
    document.getElementById('endNumber').innerHTML ="hai vinto!!!";
  }
}

evenOrOdd();
