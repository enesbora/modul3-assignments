/**
 * Ikinci haftaki "kücük" ödevimiz node.js tarafından sağlanan bir kütüphaneyi kullanarak
 * bir dosya okumak olacaktir.
 * Ödevimizde örnek bir dosyanin okunup içeriğinin ekrana yazdirilmasi gerekmektedir.
 */

// readFile metodunu kullanabilmemiz icin nodeJS tarafindan saglanan fs(file stream) gerekli oldugunu require ile ifade ettik
let fs = require("fs");

// data.txt dosyasini okumak icin readFile metodunu kullaniyoruz.

fs.readFile("OrnekDosya.txt", function (error, data) {
  if (error) {
    throw error;
  }
  //toString() metodu ile okudugumuz data'yi stringe cevirdik ve console.log() ile consola yazdik
  console.log(data.toString());
});



//Yukaridaki stringe cevirme islemini asagidaki gibi readFile metoduna utf8 formainda veri istedigimizi belirterek de yapabiliriz
// fs.readFile("dosya.txt", "utf8", function (error, data) {
//     if (error) {
//       throw error;
//     }
//     //toString() metodu ile okudugumuz data'yi stringe cevirdik ve console.log() ile consola yazdik
//     console.log(data);
//   });

