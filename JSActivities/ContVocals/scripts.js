let value;

value = prompt();
console.log(value);

// Counters
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
let z = 0;

for (let char of value) {
    switch (char) {
        case 'a':
            a++;
            break;
        case 'e':
            e++;
            break;
        case 'i':
            i++;
            break;
        case 'o':
            o++;
            break;
        case 'u':
            u++;
            break;
        default:
            z++;
            break;
    }
}

if (z == value.length) {
    console.log('No hi ha vocals');
} else {
    console.log('Numero de "a": ' + a);
    console.log('Numero de "e": ' + e);
    console.log('Numero de "i": ' + i);
    console.log('Numero de "o": ' + o);
    console.log('Numero de "u": ' + u);
    console.log('Numero de "u": ' + u);
}
console.log('Longitud de la frase: ' + value.length);  