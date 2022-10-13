// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
// Buon lavoro a tutte e a tutti!!

// DATI
// Lista della spesa
const shoppingList = ["Banane", "Mele", "Avogado", "Litchi", "KakiMela", "Giuggiole", "Latte", "Fagioli tipo Borlotti", "Ceci", "Uova", "Sardine"]
console.log(shoppingList, shoppingList.length)
// Let che conterrà gli elementi <li>
let liList = "";
// Const che si occuperà di mostrare il tutto
const displayText = document.querySelector("body");
// Let contatore
let i = 0;

// ELABORAZIONE DATI
// Ciclo while che riempie liList di tutti gli elementi html
while (i < shoppingList.length) {
    const thisItem = shoppingList[i];
    liList += `<li>${thisItem}</li>`;
    i++;
}

// OUTPUT
// Intestazione della pagina
// Scrittura sulla pagine della lista ul
displayText.innerHTML =  
    `<h1>Lista della spesa</h1>
    <ul>${liList}<ul>`;