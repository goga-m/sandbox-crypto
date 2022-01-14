const AES = require("crypto-js/aes");

const input = process.argv[2];
const password = process.argv[3];

console.log("\nHASH:", input);
console.log("Encrypted =", AES.encrypt(input, password).toString(), "\n");
