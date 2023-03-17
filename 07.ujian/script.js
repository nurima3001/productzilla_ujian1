function bandingkan(angka1, angka2) {
    if (angka1 > angka2) {
      return angka1;
    } else if (angka1 < angka2) {
      return angka2;
    } else {
      return "Kedua bilangan sama besar";
    }
  }
  
  // contoh pemanggilan fungsi
  console.log(bandingkan(10, 5)); // Output: 10
  console.log(bandingkan(7, 12)); // Output: 12
  console.log(bandingkan(8, 8)); // Output: Kedua bilangan sama besar
  