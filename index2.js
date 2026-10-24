const os = require('os');

// Mengganti output nama user secara manual menjadi Handika
console.log("Nama User:", "Handika");
console.log("Platform:", os.platform());
console.log("Total Memori:", os.totalmem());

const url = require('url');
let alamat = 'https://www.example.com/search?keyword=nodejs';
let parsed = url.parse(alamat, true);
console.log("Kata kunci pencarian:", parsed.query.keyword);