
function getDiscount(harga, persenDiskon) {
    const diskon = harga * persenDiskon / 100;
    const totalBayar = harga - diskon;

    return {
        harga: harga,
        diskon: diskon,
        totalBayar: totalBayar
    };
}

module.exports = getDiscount;
