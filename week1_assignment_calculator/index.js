/**
 * 4 islemi barindiran bir ek modul yazacagiz.
 * Herbir islem icin calculator.js dosyasi icinde bir fonksiyon tanimlayacagiz
 * Tanimladigimiz bu fonksiyonlari eski modül sistemine göre export edip index.js dosyasi icinde require kullanacagiz.
 * Birer örnek ile fonksiyonlarin dogru calisip calismadigini kontrol edecegiz.
 */


// calculator.js'deki fonksiyonlarimizi kullanabilmemiz icin calculator.js'in gerekli oldugunu require ile ifade ettik
const { add, subtract, multiply, divide } = require("./calculator");
const calculator = require("./calculator");

// birer örnekle fonksiyonlarimizi cagirdik ve dogru calistiklarini gözlemledik
calculator.add(5, 6);
calculator.subtract(13, 5);
calculator.multiply(7, 6);
calculator.divide(10, 5);

add();
subtract();
multiply();
divide();
