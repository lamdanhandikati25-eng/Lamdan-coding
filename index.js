
const getDiscount = require('./getDiscount');

const hasil = getDiscount(100000, 10);

console.log("Harga Barang : Rp" + hasil.harga);
console.log("Diskon       : Rp" + hasil.diskon);
console.log("Total Bayar  : Rp" + hasil.totalBayar);
