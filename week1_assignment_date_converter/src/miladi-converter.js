/**
 * 4 islemi barindiran bir ek modul yazacagiz.
 * Herbir islem icin calculator.js dosyasi icinde bir fonksiyon tanimlayacagiz
 * Tanimladigimiz bu fonksiyonlari eski modül sistemine göre export edip index.js dosyasi icinde require kullanacagiz.
 * Birer örnek ile fonksiyonlarin dogru calisip calismadigini kontrol edecegiz.
 */

// Miladi yili hicri yila cevirme foknksiyonu
function miladiConverter(year) {
  let hicri = Math.floor((year - 621) / 33) + (year - 621);
  return console.log(
    `Miladi ${year} yilinin hicri takvime göre karsiligi ${hicri} yilidir`
  );
}

// eski modul sistemi ile fonksiyonlarimizi export ettik
module.exports = {
  miladiToHicri: miladiConverter,
};
