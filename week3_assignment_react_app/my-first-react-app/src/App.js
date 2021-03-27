import "./App.css";

// sayfamizin html'inde yer almasini istedigimiz icerigi App() ismini verdigimiz fonksiyonun return kismina yazdik, yani bu fonksiyon bize yazdigimiz 
// icerigi döndürecek ve biz de bu icerigi reactDom'un render() metodu ile render edecegiz.
function App() {
  return (
    <div className="App">
      <h3>Input Format</h3>
      <p>
        First line contain{" "}
        <strong>
          <em class="timesnewromans">N.N</em>
        </strong>{" "}
        lines follow, each having a PAN nummer.
      </p>
      <h3>Constrains</h3>
      <ul>
        <li>1 ≤ N ≤ 10</li>
        <li>
          Each char is an uppercase letter, i.e.,{" "}
          <strong class="timesnewromans">
            <em>char</em>
          </strong>{" "}
          ∈ [
          <strong class="timesnewromans">
            <em>′A′,′Z′</em>
          </strong>
          ].{" "}
        </li>
        <li>
          Each digit lies between 0 and 9, i.e.,{" "}
          <strong class="timesnewromans">
            <em>digit</em>
          </strong>{" "}
          ∈ [<strong class="timesnewromans">0,9</strong>].
        </li>
        <li>
          The length of the PAN number is always 10, i.e.,{" "}
          <strong class="timesnewromans">
            <em>length</em>(<em>PAN</em>)
          </strong>
          =<strong>10</strong>
        </li>
        <li>
          Every character in PAN is either char or digit satisfying the above
          constraints.
        </li>
      </ul>
      <h3>Output Format</h3>
      <p>
        For every PAN number listed, print YES if it is valid and NO if it
        isn't.
      </p>
    </div>
  );
}

// App.js dosyamizi index.js icinde import etmek icin burada export ettik
export default App;
