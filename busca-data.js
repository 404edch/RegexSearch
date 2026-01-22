const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const patternData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm;
const yearBirth = /\d{4}$/gm;
const matchData = banco.match(patternData);
const matchYear = banco.match(yearBirth);
console.log(matchYear);
console.log(matchData);
/* 
28.03.1984 
22111996
13 05 1973
19/11/1964
*/