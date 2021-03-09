var diff_level = parseInt(prompt("Benvenuto in campominato. Scegli il livello di difficoltà: 0 per FACILE, 1 per NORMALE, 2 per DIFFICILE, 3 per IMPOSSIBILE"));
var esito; // diventa 23 quando si trova una bomba, ed esce dal ciclo while
var counter = 0; //tiene il conto di quanti fiori ha trovato
var max_flowers = 0;
var used_array = [];
var user_choice;

// !! 1) Scelgo il livello per la partita
if (diff_level == 0) {
    diff_level = "FACILE";
    max_flowers = 100;
} else if (diff_level == 1) {
    diff_level = "MEDIO";
    max_flowers = 80;
}else if (diff_level == 2) {
    diff_level = "DIFFICILE";
    max_flowers = 17;
}  else {
    alert("Il valore inserito non è valido, riprovare");
    location.reload();
}
// else if (diff_level == 3) {
//     diff_level = "IMPOSSIBILE"
//     max_flowers = 100;
// }
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
console.log( "FINALEEEEEE", bombs, flowers)


while (counter != (max_flowers - 16)) {
    //!! 5) faccio scegliere un valore all'utente, tra gli elementi del primo array
    user_choice = prompt("inserisci un numero tra 1 e " +  max_flowers);
    if (bombs.includes(user_choice)) {
        // !! 6) se l'utente scegli un valore all'interno dell'array bomb perde
        alert( "HAI PERSO la posizione " + user_choice + "corrisponde ad una bomba");
        esito = 23;
    } else if (used_array.includes(user_choice)) {
        // !! 7) se l'utente sceglie un valore più volte, non perde ma ripete    
        alert ("Attenzione, ha già inserito questo valore ! WAKEY WAKEY")
    }  else {
        //!! 8) se l'utente trova un fiore, aggiunge il valore all'array used_array
        alert(user_choice + " non è una bomba !!");
        counter += 1;
        used_array.push(user_choice);
        if (counter == (max_flowers - 16)) {
            alert ("Hai vinto !")
        }
    }
}
// !! 8) se l'utente sceglie TUTTI gli elementi dell'array flowers vince



function get16RandomUnique(min, max) {
    array_random = [];
    while (array_random.length <= 15) {
        random_value = Math.floor(Math.random() * (max - min)) + min;

        if (array_random.includes(random_value) == false) {
            array_random.push(random_value);
            console.log(random_value, array_random);
        } else {
            console.log (random_value);
        }
    }
    array_random = array_random.sort((a, b) => a - b);
    console.log("array ordinato", array_random);
    return array_random;   
}

/*
// ciclo che genera 16 bombe casuali 
for (var i = 1; i <= 16; i++) {
    console.log(i);
    
}
*/