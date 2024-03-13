//console test
console.log('TEST');

//funzione
function ciloResto (a,b) {
    a = a + 1;
    return a % b;

}


//stampare i numeri da 1 a 100
//se il numero è multiplo di 3, stampare fizz
//se il numeor è multiplo di 5, stampare buzz
//se il numero è multoplo sia di 5 che di 3, stampare fizzbuzz
//altrimenti stampa il numero senza modifiche


// for(let i = 0; i<100; i++) {
//     if (((i + 1) % 3 == 0) && ((i + 1) % 5 == 0)) {
//          console.log('FizzBuzz   ' , i + 1);
//      } else if ((i + 1) % 5 == 0) {
//         console.log ('Buzz   ' , i + 1);
//     } else if ((i + 1) % 3 == 0) {
//         console.log('Fizz   ' , i + 1);
//      }else {console.log(i + 1)};
    
// }


for(let i = 0; i < 100; i ++) {
    let restoTre = ciloResto (i , 3);
    let restoCinque = ciloResto (i , 5);
    let numero = i + 1

    if(restoTre == 0 && restoCinque == 0) {
        console.log('FuzzBizz   ' , numero);
    } else if(restoTre == 0) {
        console.log('Fuzz   ', numero);
    } else if(restoCinque == 0) {
        console.log('Buzz   ', numero);
    } else {console.log(i + 1)};
}

console.log('END');

// L'esercizio l'ho svolto con un normale ciclo if/elseif. Per maggior ordine mentale ho usato una funzione che mi calcolasse il resto, così da non avere troppi numeri e condizioni in giro per il codice. Spero non sia un problema.
//lascio comunque il codice commentato dell'esercizio senza funzione. 