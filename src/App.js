import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button id="menu" type="button">
          MENÜ
        </button>
        <div className="cover">
          <img
            className="main-pic"
            src="images/agozoli_1.jpg"
            alt="agozoli_1"
          />
          <div className="pic-text">
            <h2>
              Már nagyon várjuk, hogy mind ott legyünk Á-tól Z-ig az esküvőnkön!
            </h2>
          </div>
        </div>
      </header>
      <section className="Content-holder">
        <div className="Greet">
          <h1>HELLO ÁGNES!</h1>
          <h2>
            Friday, June 23, 2023 Budapest, Magyarország 228 Days 0 Hrs 42 Mins
          </h2>
          <hr />
          <h4>
            Miután meggyőződtünk arról, hogy nekünk együtt a legjobb, a sikeres
            folytatás érdekében 2023. Június 23-án összeházasodunk. Reméljük,
            hogy velünk osztozol e nagy nap örömeiben és megtisztelsz minket
            jelenléteddel a ceremónián, majd az azt követő dínom-dánomon.
          </h4>
          <hr />
        </div>
        <div className="content">
          <h2>Program</h2>
          <ul>
            <li>Vendégvárás 16:00 órától a Hangár Bisztóban</li>
            <li> Polgári esküvő: 17:00-kor a Gückler Károly kilátónál</li>
          </ul>
          <hr />
        </div>
        <div className="content">
          <h2>Dátum</h2>
          <p>-2023. Június 23-</p>
          <hr />
        </div>
        <div className="content">
          <h2>Helyszín</h2>
          <p>
            Hangár Bisztró (megközelítés: autóval vagy a Kolosy tértől közösen
            busszal)
          </p>
          <hr />
        </div>
        <div className="content">
          <h2>Menü</h2>
          <p>-TBD-</p>
        </div>
        <hr />
        <div className="content">
          <h2>Dress code</h2>
          <p>-Formal-</p>
        </div>
        <hr />
        <div className="content">
          <h2>Nászajándék</h2>
          <p>-Pénzeket adjatok-</p>
        </div>
        <hr />
        <div className="content">
          <h2>Szállás</h2>
          <p>-Rotter Lajos Turistaház-</p>
        </div>
        <hr />
        <div className="content">
          <h2>Visszajelzés</h2>
          <p>
            Kérünk téged, hogy legkésőbb május 23-ig jelezz vissza az alábbi
            űrlapon
          </p>
          <a href="https://forms.gle/3UHTZsSs8zeiToa69">
            https://forms.gle/3UHTZsSs8zeiToa69
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
