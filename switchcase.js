const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, resolve);
    });
}

async function main() {

    let totalBelanja = 0;
    let pesanan = [];

    console.log("========================================");
    console.log("         PROGRAM HITUNG DISKON");
    console.log("========================================");

    // Minimal 3 barang
    for (let i = 1; i <= 3; i++) {

        console.log("\nBarang ke-" + i);
        console.log("----------------------------------------");
        console.log("1. Buku");
        console.log("2. Pulpen");
        console.log("3. Tas");
        console.log("4. Sepatu");
        console.log("5. Laptop");

        let pilihan = await tanya("Pilih barang (1-5): ");

        let namaBarang = "";

        // SWITCH CASE untuk memilih barang
        switch (pilihan) {
            case "1":
                namaBarang = "Buku";
                break;

            case "2":
                namaBarang = "Pulpen";
                break;

            case "3":
                namaBarang = "Tas";
                break;

            case "4":
                namaBarang = "Sepatu";
                break;

            case "5":
                namaBarang = "Laptop";
                break;

            default:
                console.log("Pilihan tidak tersedia!");
                i--;
                continue;
        }

        // Harga dimasukkan oleh pengguna
        let harga = Number(
            await tanya("Masukkan harga " + namaBarang + " : Rp")
        );

        let jumlah = Number(
            await tanya("Masukkan jumlah " + namaBarang + " : ")
        );

        // Operasi aritmatika
        let subtotal = harga * jumlah;

        totalBelanja = totalBelanja + subtotal;

        pesanan.push({
            nama: namaBarang,
            harga: harga,
            jumlah: jumlah,
            subtotal: subtotal
        });
    }

    // Menentukan diskon
    let totalDiskon = 0;
    let persenDiskon = 0;

    if (totalBelanja >= 300000) {
        persenDiskon = 10;
        totalDiskon = totalBelanja * 10 / 100;

    } else if (totalBelanja >= 100000) {
        persenDiskon = 5;
        totalDiskon = totalBelanja * 5 / 100;

    } else if (totalBelanja >= 50000) {
        persenDiskon = 3;
        totalDiskon = totalBelanja * 3 / 100;
    }

    // Total bayar
    let totalBayar = totalBelanja - totalDiskon;

    // Output
    console.log("\n========================================");
    console.log("             HASIL PEMBELIAN");
    console.log("========================================");

    for (let i = 0; i < pesanan.length; i++) {
        console.log(
            (i + 1) + ". " +
            pesanan[i].nama +
            " x" + pesanan[i].jumlah +
            " = Rp" + pesanan[i].subtotal
        );
    }

    console.log("----------------------------------------");
    console.log("Total Belanja : Rp" + totalBelanja);

    if (totalDiskon > 0) {

        console.log("Diskon        : " + persenDiskon + "%");
        console.log("Total Diskon  : Rp" + totalDiskon);
        console.log("Total Bayar   : Rp" + totalBayar);

    } else {

        console.log(
            "Anda tidak mendapat diskon karena tidak mencapai"
        );
        console.log("minimum pembelanjaan.");
        console.log("Total Bayar   : Rp" + totalBayar);
    }

    console.log("========================================");

    rl.close();
}

main();