// Hicri yili miladi yila cevirme fonksiyonu
function hicriConverter(year) {
  let miladi = year - Math.floor(year / 33) + 622;
  return console.log(
    `Hicri ${year} yilinin miladi takvime göre karsiligi ${miladi} yilidir`
  );
}


module.exports = hicriConverter;
