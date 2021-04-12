/**
 *  Bu ödevimizde json formatindaki verileri kullanarak bir word-quiz hazirlayacagiz.
 *  Ekrana random olarak Almanca bir kelime ve 4 tane secenek gelecek. 
 * (Seceneklerden biri Almanca kelimenin dogru Türkce karsiligidir). 
 * Sorularin cevaplanmasiyla diger soruya gecilecek ve her soruya gecildiginde skor güncellenecek.
 * 
 * 1) Öncelikle bir json dosyasi olsuturulur. Olsuturulan dosyada sorulacak kelime ve cevaplar yer alir.
 * 2) QuizApp.js adinda oyunun caliscagi bir komponent olsuturulur. Burada oyun oynandigi zaman verilen cevaplarin dogru olup olmadigi state ile tutulur.
 * 3) Oyunun tamamlanip tamalanmadigi ilk olarak degerlendirilir.Eger oyunda Sorularin uzunluguna ulasilmasisa oyun devam eder (baslagic sorusu degeri ilk olarak satatüs ile 0 olarak tanimlandi.)
 * 4) Soru sayisi 10'a ulasirsa oyun sona erer ve skor ekrana yansitilir.
 */

import QuizApp from "./components/QuizApp";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <main>
      <Header />
      <QuizApp />
    </main>
  );
};

export default App;
