/* - Creare un oggetto che descriva uno studente con le seguenti 
proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà. */

var studente = {
    'nome': 'Alessandro',
    'cognome': 'Gennaccari',
    'eta': 25
};

for (var key in studente){
    console.log(studente[key]);
}

// *-----------------------------------------------------------------


/* - Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome */

var studenti = [
    {
        'nome': 'Alessandro',
        'cognome': 'Gennaccari',
        'eta': 25
    },
    {
        'nome': 'Pippo',
        'cognome': 'Super',
        'eta': 88
    },
    {
        'nome': 'Paolino',
        'cognome': 'Paperino',
        'eta': 86
    },{
        'nome': 'Pluto',
        'cognome': 'Verdi',
        'eta': 89
    },{
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 'molti'
    },
];

for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}

// *-----------------------------------------------------------------


/* - Dare la possibilità all’utente attraverso 3 prompt di aggiungere
un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('inserisci il tuo cognome');
var eta = parseInt(prompt('Inserisci la tua età'))

var nuovoStudente = {

};