// Esercizi aggiuntivi (facoltativi) per D4

//ES 10 script.js

const giveMeRandom = function (n) {
  const randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
  }
  return randomArray;
};

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
console.log("ESERCIZIO 01");

const checkArray = function (randomArray1) {
  let sumArray = null;
  for (i = 0; i < randomArray1.length; i++) {
    if (randomArray1[i] >= 5) {
      console.log(randomArray1[i]);
      sumArray += randomArray1[i];
    }
  }
  console.log("La somma di tutti i valori maggiori di 5 è", sumArray);
};

checkArray(giveMeRandom(10));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
console.log("ESERCIZIO 02");

const shoppingCart = [
  {
    price: 90,
    name: "Gioele",
    id: "01",
    quantity: 3,
  },
  {
    price: 40,
    name: "Adele",
    id: "02",
    quantity: 1,
  },
  {
    price: 120,
    name: "Ema",
    id: "03",
    quantity: 5,
  },
];

const shoppingCartTotal = function (shoppingCart) {
  let totalPrice1 = null;
  let totalPrice2 = null;
  for (let i = 0; i < shoppingCart.length; i++) {
    const carrello = shoppingCart[i];
    totalPrice1 = carrello.price * carrello.quantity;
    totalPrice2 += carrello.price * carrello.quantity;
    console.log("Totale di ogni persona:", totalPrice1);
  }
  console.log("Totale dovuto al negozio:", totalPrice2);
};

shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
console.log("ESERCIZIO 03");

const newObj = {
  price: 80,
  name: "Andreea",
  id: "04",
  quantity: 2,
};

const addToShoppingCart = function (newItem) {
  shoppingCart.push(newItem);
  return shoppingCart.length;
};
console.log("Nuovo totale elementi nel carrello", addToShoppingCart(newObj));
console.log("Contenuto del carrello aggiornato:", shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
console.log("ESERCIZIO 04");

const maxShoppingCart = function (arrayCart) {
  let finalValor = null;
  for (let i = 0; i < arrayCart.length; i++) {
    const cart = arrayCart[i];
    if (cart.price > finalValor) {
      finalValor = cart.price;
    }
  }
  return finalValor;
};

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
console.log("ESERCIZIO 05");

const latestShoppingCart = function (newArray) {
  const arrayPippo = [];
  for (let i = 0; i < newArray.length; i++) {
    arrayPippo.push(newArray[i].quantity);
  }
  return arrayPippo;
};
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
console.log("ESERCIZIO 06");

let num1 = 5;

const loopUntil = function (x) {
  let count = 0;
  while (count < 3) {
    let casualNum = Math.floor(Math.random() * 10);
    if (casualNum > x) {
      count++;
      console.log(
        `Il numero ${casualNum} è il ${count} ad essere stato generato`
      );
    } else {
      count = 0;
    }
    console.log(casualNum);
  }
};

if (num1 >= 0 && num1 <= 9) {
  loopUntil(num1);
} else {
  console.log("Il numero", num1, "non è compreso tra 0 e 9");
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
