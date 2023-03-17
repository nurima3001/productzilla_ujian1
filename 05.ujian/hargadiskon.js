// deklarasi variabel untuk harga barang
var hargaBaju = 75000;
var hargaCelana = 120000;
var hargaTas = 250000;

// deklarasi variabel untuk jumlah barang
var jumlahBaju = 3;
var jumlahCelana = 2;
var jumlahTas = 1;

// hitung total harga belanjaan
var totalHarga = (hargaBaju * jumlahBaju) + (hargaCelana * jumlahCelana) + (hargaTas * jumlahTas);

// cek apakah total harga melebihi 500.000 rupiah
if (totalHarga > 500000) {
    // hitung harga setelah diberikan diskon 10%
    var hargaSetelahDiskon = totalHarga * 0.9;
    console.log("Selamat, Anda mendapatkan diskon 10%!");
    console.log("Total harga belanjaan sebelum diskon: " + totalHarga + " rupiah");
    console.log("Total harga belanjaan setelah diskon: " + hargaSetelahDiskon + " rupiah");
} else {
    console.log("Total harga belanjaan: " + totalHarga + " rupiah");
}
