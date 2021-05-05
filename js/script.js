/*
Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po' scocciante :occhiolino:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :linguaccia:
*/

// SCRIPT
var bombArray = [];
var attemptArray = [];

var bombMax = 16;
var attemptMax = 100 - bombMax;

// Numeri "Bomba"
while (bombArray.length < bombMax) {

    var bombNumber = randomNumber (1,100);
    
    if (isInArray (bombArray, bombNumber) == false) {
        bombArray.push(bombNumber);
    }

}
console.log("NUMERI BOMBA",bombArray);

// Gioco
var gameOver = false;

while (attemptArray.length < attemptMax && gameOver == false) {

    var attemptNumber;

    do {
        attemptNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
    } while (isNaN(attemptNumber) || attemptNumber < 1 || attemptNumber > 100 || isInArray(attemptArray, attemptNumber));

    if (isInArray(bombArray, attemptNumber) == false) {
        attemptArray.push(attemptNumber);
    } else if (isInArray(bombArray, attemptNumber) == true) {
        gameOver = true;
        alert ("HAI PERSO\nHai totalizzato " + attemptArray.length + " punti!");
    }
    console.log("NUMERI SELEZIONATI", attemptNumber);
}
console.log(attemptArray);

if (attemptArray.length == attemptMax) {
    alert ("HAI VINTO\nHai totalizzato " + attemptArray.length + " punti!")
}



// FUNCTIONS

// funzione random number
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione "è nell'array"?
function isInArray (array, element) {

    for (var i = 0; i < array.length ; i++) {
       
        if (array[i] == element) {
            return true;
        }
    }
    return false;
}