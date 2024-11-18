const prompt = require('prompt-sync')({ sigint: true });

function hitungAkarPangkatDua(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
}

const input = prompt('Masukkan sebuah bilangan: ');
const angka = parseFloat(input); // Konversi input menjadi angka

if (isNaN(angka)) {
    console.log("Input harus berupa angka!");
} else {
    const hasil = hitungAkarPangkatDua(angka);
    console.log(hasil);
}