//prompt per chiedere una parola
var parolaUtente = prompt("Scrivi una parola");

//function per invertire la parola parola
function invertoParola (inputString){
  var wordReverse = inputString.split("");
  var parolaInversa = wordReverse.reverse();
  return parolaInversa.join("");
}

//seconda funzione per capire se la parol è palindroma;
 function isPalindroma(parola){
   var palindroma = false;

   if (parola == invertoParola(parola)){
    var palindroma = true;

   }

   return palindroma

 }

 if ( isPalindroma (parolaUtente)){
   alert("La parola è palindroma");
   console.log("La parola è palindroma");
 } else {
   alert("La parola non è palindroma");
 }
