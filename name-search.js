const fs = require('fs');
const csvBank = 'database.csv';
const bank = fs.readFileSync(csvBank, 'utf-8');

const namePattern = /^([A-Za-zÀ-ž]+)(?:\s([A-Za-zÀ-ž]+))+/gm;

const matchName = bank.match(namePattern);
console.log('all names:', matchName);