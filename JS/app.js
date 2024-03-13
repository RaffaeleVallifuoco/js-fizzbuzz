//console test
console.log('TEST');

//stampare i numeri da 1 a 100
//se il numero è multiplo di 3, stampare fizz
//se il numeor è multiplo di 5, stampare buzz
//se il numero è multoplo sia di 5 che di 3, stampare fizzbuzz
//altrimenti stampa il numero senza modifiche

for(let i = 0; i<100; i++) {
    if (((i + 1) % 3 == 0) && ((i + 1) % 5 == 0)) {
         console.log('FizzBuzz   ' , i + 1);
     } else if ((i + 1) % 5 == 0) {
        console.log ('Buzz   ' , i + 1);
    } else if ((i + 1) % 3 == 0) {
        console.log('Fizz   ' , i + 1);
     }else {console.log(i + 1)};
    
}
console.log('END');