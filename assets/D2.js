/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 */
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 5;
let b = 10;
if (a < b) {
  console.log("a è minore di b");
} else if (a > b) {
  console.log("a è maggiore di b");
} else {
  console.log("i numeri sono uguali");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 1;
if (c !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let d = 10;
if (d % 5 === 0) {
  console.log(`divisibile per 5`);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let e = 12;
let f = 4;
if (e === 8 || f === 8 || e + f === 8 || e - f === 8) {
  console.log(`verificato`);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 51;
let spedizione = 10;
let totToPay = totalShoppingCart;
if (totalShoppingCart < 50) {
  totToPay += spedizione;
}
console.log("totale da pagare:" + totToPay);

/* ESERCIZIO 6
Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 100;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let spedizione2 = 10;
let totToPay2 = totalShoppingCart2;
if (totalShoppingCart2 < 50) {
  totToPay2 += spedizione2;
}
console.log("totale da pagare:" + totToPay2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let aa = 40;
let bb = 50;
let cc = 60;
if (aa >= bb) {
  if (cc >= aa) {
    console.log(cc, aa, bb);
  } else {
    if (cc >= bb) {
      console.log(aa, cc, bb);
    } else {
      console.log(aa, bb, cc);
    }
  }
} else {
  if (aa >= cc) {
    console.log(bb, aa, cc);
  } else {
    if (cc >= bb) {
      console.log(cc, bb, aa);
    } else {
      console.log(aa, cc, bb);
    }
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let verifica = "ciao";

if (typeof verifica === "number") {
  console.log("E' un numero");
} else {
  console.log("Non è un numero!");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numbEven = 12;
if (numbEven % 2 === 0) {
  console.log("è pari");
} else console.log("è dispari");

/* ESERCIZIO 10
Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
  */

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);
/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const unArray = [];
unArray.push(1);
unArray.push(2);
unArray.push(3);
unArray.push(4);
unArray.push(5);
unArray.push(6);
unArray.push(7);
unArray.push(8);
unArray.push(9);
unArray.push(10);
console.log(unArray);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
// const lastIndex = unArray.length - 1;
// unArray.splice(lastIndex, 1, 100);
/* SCRIVI QUI LA TUA RISPOSTA */
unArray[9] = 50;
console.log(unArray);
