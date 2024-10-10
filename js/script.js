/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("ESERCIZIO 1");

const area = function (l1, l2) {
  return l1 * l2;
};
console.log("L'area del rettangolo è:", area(2, 4));

//Metodo funzione void
// const area = function (l1, l2) {
//     console.log("L'area del rettangolo è:", l1 * l2);
//   };
//   area(2, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("ESERCIZIO 2");

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return console.log(
      "La somma tra i numeri",
      num1,
      "e",
      num2,
      "moltiplicati per 3 è:",
      (num1 + num2) * 3
    );
  } else {
    return console.log(
      "La somma tra i numeri",
      num1,
      "e",
      num2,
      "è:",
      num1 + num2
    );
  }
};

crazySum(3, 3);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("ESERCIZIO 3");

const crazyDiff = function (num1) {
  if (num1 > 19) {
    return console.log(
      "La differenza assoluta moltiplicata per 3 è:",
      Math.abs((num1 - 19) * 3)
    );
  } else {
    return console.log(
      "La differenza assoluta moltiplicata per 3 è:",
      Math.abs(num1 - 19)
    );
  }
};

crazyDiff(20);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("ESERCIZIO 4");

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("ESERCIZIO 5");

// const epify = function (stringParam) {
//     if (stringParam.toUpperCase().startsWith("EPICODE")) { //Utilizzando il metodo startsWith
//       return stringParam;
//     } else {
//       return "EPICODE " + stringParam;
//     }
//   };

const epify = function (stringParam) {
  if (stringParam.slice(0, 7) === "EPICODE") {
    return stringParam;
  } else {
    return "EPICODE " + stringParam;
  }
};
console.log(epify("EPICODE Test stringa da passare come input"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("ESERCIZIO 6");

const check3and7 = function (posNum) {
  if (posNum % 3 === 0 || posNum % 7 === 0) {
    return console.log("Il numero immesso è multiplo di 3 o 7");
  } else {
    return console.log("Il numero immesso non è multiplo di 3 o 7");
  }
};

check3and7(Math.abs(-21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("ESERCIZIO 7");

const reverseString = function (stringParam) {
  const letters = stringParam.split("");
  const reverseLetters = [];
  for (let i = 0; i < stringParam.length; i++) {
    reverseLetters.unshift(letters[i]);
  }
  return reverseLetters.join("");
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("ESERCIZIO 8");

const upperFirst = function (stringParam) {
  const phrase = stringParam.split(" ");

  for (let i = 0; i < phrase.length; i++) {
    phrase[i] = phrase[i].toUpperCase().charAt(0) + phrase[i].slice(1);
  }
  return phrase.join(" ");
};

console.log(upperFirst("EPICODE is an awesome school"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("ESERCIZIO 9");

const cutString = function (stringParam) {
  const letters = stringParam.split("");

  //   delete letters[0];
  //   delete letters[letters.length - 1];
  letters.splice(0, 1);
  letters.splice(letters.length - 1, 1);
  return letters.join("");
};

console.log(cutString("EPICODE is an awesome school"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("ESERCIZIO 10");

const giveMeRandom = function (n) {
  for (let i = 0; i < n; i++) {
    console.log(Math.floor(Math.random() * 10));
  }
};

giveMeRandom(10);
