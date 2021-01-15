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
    console.log('Object ' + i);
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}

// *-----------------------------------------------------------------


/* - Dare la possibilità all’utente attraverso 3 prompt di aggiungere
un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

var nome, cognome;

do {
    nome = prompt('Inserisci il tuo NOME');
} while (nome == "" || nome == "undefined" || !isNaN(nome));

do {
    cognome = prompt('Inserisci il tuo COGNOME');
} while (cognome == "" || cognome == "undefined" || !isNaN(cognome));

do {
    var eta = parseInt(prompt('Inserisci la tua età'))
} while (isNaN(eta) || eta <= 0);

nome = nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
cognome = cognome.charAt(0).toUpperCase() + cognome.substring(1).toLowerCase();


var nuovoStudente = {
    'nome': nome,
    'cognome': cognome,
    'eta': eta
};

studenti.push(nuovoStudente);
console.log(nuovoStudente);
console.log(studenti);