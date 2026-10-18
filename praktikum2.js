const toko = {
    produk: [
        {   id: 1, 
            nama: "Mouse Wireless", 
            harga: 150000, 
            stok: 3},
        {   id: 2, 
            nama: "Keyboard Mekanik", 
            harga: 300000, 
            stok: 2},
        {   id: 3, 
            nama: "Headset Gaming", 
            harga: 250000, 
            stok: 1},
    ],

    diskon : 0.1,
    
  cariProduk: function (id) {
    return this.produk.find((p) => p.id === id);
  },

  tampilSemua: function () {
    for (let i = 0; i < this.produk.length; i++) {
      const p = this.produk[i];
      console.log(p.nama);
      console.log("Harga: Rp" + p.harga);
      console.log("Stok tersedia: " + p.stok);
      console.log("------------------------------");
    }
  },

  hargaDiskon: function (id) {
    const p = this.cariProduk(id);
    if (!p) {
      console.log("Produk tidak ditemukan!");
      console.log("------------------------------");
      return;
    }

    const hasil = p.harga - (p.harga * this.diskon);
    console.log(p.nama + " setelah diskon " + (this.diskon * 100) + "%: Rp" + hasil);
    console.log("------------------------------");
  },

  beli: function (id, jumlah) {
    const p = this.cariProduk(id);

    if (!p) {
      console.log("Produk tidak ditemukan!");
    } else if (p.stok <= 0) {
      console.log("Maaf, stok " + p.nama + " sudah habis!");
    } else if (jumlah > p.stok) {
      console.log("Stok " + p.nama + " tidak cukup, sisa stok: " + p.stok);
    } else {
      p.stok -= jumlah;
      console.log("Pembelian berhasil! Anda membeli " + jumlah + " " + p.nama + ".");
      console.log("Sisa stok sekarang: " + p.stok);

      if (p.stok <= 0) {
        console.log("Stok " + p.nama + " kini habis, segera restock!");
      }
    }

    console.log("------------------------------");
  },
};

// Menampilkan semua produk
toko.tampilSemua();

// Menampilkan harga setelah diskon
toko.hargaDiskon(1);
toko.hargaDiskon(2);
toko.hargaDiskon(3);

toko.beli(1, 1); // Mouse sisa 2
toko.beli(1, 2); // Mouse habis
toko.beli(1, 1); // Mouse sudah habis
toko.beli(2, 1); // Keyboard sisa 1
toko.beli(3, 1); // Headset habis
toko.beli(9, 1); // Produk tidak ada