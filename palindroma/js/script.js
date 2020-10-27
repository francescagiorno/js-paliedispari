//prompt per chiedere una parola
var parolaUtente = prompt("Scrivi una parola");

//function per invertire la parola parola
function invertoParola (inputString){
  var wordReverse = inputString.split("");
  var parolaInversa = wordReverse.reverse();
  return parolaInversa.join("");
}

//seconda funzione per capire se la parol è palindroma;
 function isPalindroma(parolaUtente){
   var palindroma = false;

   if (parolaUtente == invertoParola(inputString)){
    var palindroma = true;
     alert("La parola è palindroma");
     console.log("La parola è palindroma");
   }
   return palindroma
 }
