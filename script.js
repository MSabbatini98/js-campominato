var diff_level = parseInt(prompt("Benvenuto in campominato. Scegli il livello di difficoltà: 0 per FACILE, 1 per NORMALE, 2 per DIFFICILE, 3 per IMPOSSIBILE"));

// !! 1) Scelgo il livello per la partita

if (diff_level == 0) {
    diff_level = "FACILE";
    max_flowers = 100;
} else if (diff_level == 0) {
    diff_level = "FACILE";
    max_flowers = 80;
}else if (diff_level == 2) {
    diff_level = "DIFFICILE";
    max_flowers = 50;
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
console.log(array);

//!! 4) salvo il vecchio array nel nuovo array
//!! 5) faccio scegliere un valore all'utente, tra gli elementi del primo array
//!! 6) ad ogni scelta di un elemento rimuovo l'elemento dall'array, e faccio andare a buon fine un tentativo solo se l'elemento (il numero) è allinterno dell'array da 1 a max
// !! 7) se l'utente scegli un valore all'interno dell'array bomb perde
// !! 8) se l'utente sceglie TUTTI gli elementi dell'array flowers vince

console.log(array);


var flowers = []; //posizioni delle non bombe
var max_flowers = 0;


else {
    alert("Il valore inserito non è valido, riprovare");
    location.reload();
}
console.log(diff_level)

// ciclo che genera 16 bombe casuali 
for (var i = 1; i <= 16; i++) {
    console.log(i);
    
}

function get16RandomUnique(min, max) {
    array_random = [];
    while (array_random.length <= 16) {
        random_value = Math.floor(Math.random() * (max - min)) + min;

        if (array_random.includes(random_value) == false) {
            array_random.push(random_value);
        } else {
            console.log (random_value)
        }
    }
    return array_random    
}
