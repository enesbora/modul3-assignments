/**
 * Week5 fishfarm ödevinde amac verilen data yapisini state kullanarak web sayfasina yazdirmak.
 * Bize verilen datayi(fishFarm.js) import edecegiz
 * Import edilen data kaydedilip olusturacagimiz list item komponentine aktariliacak
 * map ile gezip datayi render edecegiz
 */


import {useState} from 'react'
import FishList from './components/fishList'
import dbFishList from './data/fishFarm'
const App = () => {

  const [fishList] = useState(dbFishList);
// degisebilecek datalara müdahele edebilmek icin datalari state'e alip kullaniyoruz
  return (
    <div className="App">
        <FishList fishList ={fishList}/>
    </div>
  );
}

export default App;
