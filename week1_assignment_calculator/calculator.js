// Toplama fonksiynu
function addition(a, b) {
  if (a + b) return console.log(parseInt(a + b));
}

// Cikarma fonksiyonu
function subtraction(a, b) {
  if (a - b) return console.log(parseInt(a - b));
}

// carpma fonksiyonu
function multiplication(a, b) {
  if (a * b) return console.log(parseInt(a * b));
}

// bölme fonksiyonu
function division(a, b) {
  if (a / b) return console.log(parseInt(a / b));
}

// eski modul sistemi ile fonksiyonlarimizi export ettik
module.exports = {
  add: addition,
  subtract: subtraction,
  multiply: multiplication,
  divide: division,
};
