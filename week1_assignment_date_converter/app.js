/**
 * Miladi yili hicriye, hicri yili da miladiye cevirebilen bir modul yazacagiz.
 * src klasörümüz icindeki iki ayri js dosyamizda fonksiyonlari tanimlayacagiz
 * Tanimladigimiz bu fonksiyonlari eski modül sistemine göre export edip app.js dosyasi icinde require kullanacagiz.
 * Birer örnek ile fonksiyonlarin dogru calisip calismadigini kontrol edecegiz.
 */

// src'deki fonksiyonlarimizi kullanabilmemiz icin hicri-converter.js ve miladi-converter.js'nin gerekli oldugunu require ile ifade ettik
const {
  hicriToMiladi,
  miladiToHicri,
} = require("src/miladi-converter", "src/hicri-converter");
const converter = require("src/miladi-converter", "src/hicri-converter");

// birer örnekle fonksiyonlarimizi cagirdik ve dogru calistiklarini gözlemledik
converter.hicriToMiladi(3);
converter.miladiToHicri(1984);

hicriToMiladi();
miladiToHicri();
