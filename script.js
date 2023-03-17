
var nama = "Productzilla";

function gantiNama() {
  var nama = "Academy";
  console.log(nama);
}

gantiNama(); // Academy

console.log(nama); // Productzilla

function checkPositiveNegative(a, b) {
    if (a === 0 || b === 0) {
        return false;
    } else {
        return true;
    }
}
