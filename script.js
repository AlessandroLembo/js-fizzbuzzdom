console.log(" JS OK ");

/*
TRACCIA:
♠
Consegna:
 Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
 per i multipli di 3 stampi “Fizz” al posto del numero
 per i multipli di 5 stampi “Buzz” al posto del numero.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
*/

/*
ANALISI
1 - Prendo gli elementi dalla pagina
2 - Preparo variabili di appoggio
3 - Apro un ciclo che mi ripeta un'operazione per 100 volte
4 - All'interno del ciclo mi chiedo se ogni numero stampato sia multiplo di 3 e/o 5
5 - Valuto se il numero è un multiplo di 3 e/o 5, e stampo in console il valore richiesto.
6 - (BONUS 1) Creo un contenitore nel DOM HTML e ci stampo gli elementi
7 - (BONUS 2) Assegno uno stile per ognuno dei 4 tipi di elementi stampati in pagina (numero, buzz, fizz, fizzbuzz)
*/

// 1 - Prendo gli elementi dalla pagina
const blackboardElement = document.getElementById("blackboard");
// console.log(blackboardElement);


// 2 - Preparo delle variabili di appoggio
let printBlackboard = '';
// let result = '';


/* 3/4/5 - Apro un ciclo che ripeta un'operazione per 100 volte
           All'interno del ciclo mi chiedo se ogni numero stampato sia multiplo di 3 e/o 5
           Valuto se il numero è un multiplo di 3 e/o 5, e stampo in console il valore richiesto.*/

for (let i = 1; i <= 100; i++) {
  
  let content = i;

  if ((i % 3 === 0) && (i % 5 === 0)) {
     content = 'FizzBuzz';
   } else if (i % 5 === 0) {
     content = 'buzz';
   } else if (i % 3 === 0) {
     content = 'Fizz';
   }
  
  console.log(content);
  printBlackboard += "<li>" + content + "</li>";
 
}
   

// 6 - (BONUS 1) Stampa elementi in pagina HTML
blackboard.innerHTML = printBlackboard;

