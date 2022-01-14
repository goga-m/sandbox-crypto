const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

const hash = process.argv[2];
const password = process.argv[3];

console.log("\nHASH:", hash);
console.log("Decrypted =", AES.decrypt(hash, password).toString(Utf8), "\n");
