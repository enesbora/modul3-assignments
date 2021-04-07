/**
 * Week5 fishfarm ödevinde amac verilen data yapisini state kullanarak web sayfasina yazdirmak.
 * Bize verilen datayi(fishFarm.js) import edecegiz
 * Import edilen data kaydedilip olusturacagimiz list item komponentine aktariliacak
 * map ile gezip datayi render edecegiz
 */



import FishList from './components/fishList'
import fishList from './data/fishFarm'
const App = () => {
  return (
    <div className="App">
        <FishList fishList ={fishList}/>
    </div>
  );
}

export default App;
