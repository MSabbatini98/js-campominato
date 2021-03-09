var diff_level = parseInt(prompt("Benvenuto in campominato. Scegli il livello di difficoltà: 0 per FACILE, 1 per NORMALE, 2 per DIFFICILE, 3 per IMPOSSIBILE"));

var array = [];
// 1 riempio array con tutti i numero da 1 a 100
for (var i = 1; i <= 100; i++) {
    array.push(i);   
}
console.log(array);

var bombs = []; //posizioni delle bombe
var flowers = []; //posizioni delle non bombe
var max_flowers = 0;


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
/*  
else if (diff_level == 3) {
    diff_level = "IMPOSSIBILE"
    max_flowers = 100;
}
*/
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
    
        if (array_random.includes(random_value) ) 
        array_random.push(random_value);
        return array_random
    }
    
}
