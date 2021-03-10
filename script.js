var diff_level = parseInt(prompt("Benvenuto in campominato. Scegli il livello di difficoltà: 0 per FACILE, 1 per NORMALE, 2 per DIFFICILE, 3 per IMPOSSIBILE"));
diff_level = numValidator(diff_level);

var counter = 0; //tiene il conto di quanti fiori ha trovato
var max_flowers = 0;
var used_array = [];
var user_choice;
var outcome;
var esito = "Hai perso, ritenta";

/* trasformo l'istanza if in una switch */
switch (diff_level) {
    case 0 :
        diff_level = "FACILE";
        max_flowers = 100;
        break;
    case 1 :
        diff_level = "FACILE";
        max_flowers = 100;
        break;
    case 2 :
        diff_level = "FACILE";
        max_flowers = 100;
        break;
    case 3 :
        diff_level = "FACILE";
        max_flowers = 100;
        break;
    // Non necessario, in quanto dopo il validatore non sono ammessi altri risultati oltre a 0, 1, 2, 3... easter egg !!
    default :
        alert("If you see this you are in danger. Run away from your computer, it's about to explode ");
}
/* // !! 1) Scelgo il livello per la partita
if (diff_level == 0) {
    diff_level = "FACILE";
    max_flowers = 100;
} else if (diff_level == 1) {
    diff_level = "MEDIO";
    max_flowers = 80;
}else if (diff_level == 2) {
    diff_level = "DIFFICILE";
    max_flowers = 50;
}else if (diff_level == 3) {
    diff_level = "IMPOSSIBILE";
    max_flowers = 17;
}  else {
    alert("Il valore inserito non è valido, riprovare");
    // location.reload();
}         */


var min_flowers = max_flowers - 16;

console.log(diff_level, max_flowers);

//!!  2) riempio array con tutti i numero da 1 a 100
var array = [];
for (var i = 1; i <= max_flowers; i++) {
    array.push(i);   
}
console.log(array);

//!! 3) prendo 16 valori random unici e li metto in un altro array (array boombe)
var bombs = get16RandomUnique(1, max_flowers);

//!! 4) salvo il vecchio array nel nuovo array
var flowers =  array.filter(x => !bombs.includes(x));
console.log( "FINALEEEEEE", bombs, flowers);


if (max_flowers == 23) {
    alert("c'è stato un problema nel programma : PRATO FIORITO, la preghiamo di ricaricare e riprovare");
    fail;
}
while (counter < min_flowers) {
    console.log( "STO QUI");
    //!! 5) faccio scegliere un valore all'utente, tra gli elementi del primo array
    user_choice = parseInt(prompt("inserisci un numero tra 1 e " +  max_flowers));
    if (bombs.includes(user_choice)) {
        // !! 6) se l'utente scegli un valore all'interno dell'array bomb perde
        // alert( "HAI PERSO, la posizione " + user_choice + " corrisponde ad una bomba");
        outcome = "HAI PERSO in " + counter + " turni , la posizione " + user_choice + " corrisponde ad una bomba";
        break; //counter = 10000;
    } else if (used_array.includes(user_choice)) {
        // !! 7) se l'utente sceglie un valore più volte, non perde ma ripete    
        alert ("Attenzione, ha già inserito questo valore ! WAKEY WAKEY")
    }  else if (!isNaN(user_choice) && user_choice <= max_flowers) {
        //!! 8) se l'utente trova un fiore, aggiunge il valore all'array used_array
        console.log("Hai inserito l'elemento ", user_choice);
        // alert(user_choice + " non è una bomba !!");
        counter += 1;
        used_array.push(user_choice);
        if (counter == (min_flowers)) {
            // alert ("Hai vinto !")
            console.log("Hai vinto tutto!!!")
            esito = "VITTORIA !! COMPLIMENTI !!" ;
            break;
        }
    } else {
        alert ("Attenzione, questo valore non è valido");
    }
}
// !! 8) se l'utente sceglie TUTTI gli elementi dell'array flowers vince
// document.getElementById("outcome").innerHTML = outcome;
document.getElementById("turni").innerHTML = counter;
document.getElementById("bombs_location").innerHTML = bombs;
document.getElementById("esito").innerHTML = esito;
document.getElementById("flowers").innerHTML = used_array;



function get16RandomUnique(min, max) {
    max = max + 1
    var counter_f = 0;
    array_random = [];
    while (array_random.length <= 15) {
        random_value = Math.floor(Math.random() * (max - min)) + min;
        if (array_random.includes(random_value) == false) {
            array_random.push(random_value);
            console.log("inserito in array_random " + random_value);
        } else {
            console.log ("già ripetuto" + random_value);
            counter_f += 1;
            if (counter_f > 1000){
                alert("controlla la console per POSSIBILE ciclo infinito in corso");
            }
        }
    }
    //ordina l'array in ordine numerico (non alfabetico)
    array_random = array_random.sort((a, b) => a - b);
    console.log("array ordinato", array_random);
    return array_random;   
}

function numValidator ( num ) {
    while(! (!isNaN(num) && num >= 0 && num <= 3)) {
        num  = parseInt(prompt("Inserisci un valore valido" + "\n 0 per FACILE, 1 per NORMALE, 2 per DIFFICILE, 3 per IMPOSSIBILE"));
    }
    return parseInt(num);
}
/*
// ciclo che genera 16 bombe casuali 
for (var i = 1; i <= 16; i++) {
    console.log(i);
    
}
*/