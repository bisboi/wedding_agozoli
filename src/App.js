import './App.css';
import React, { useState } from 'react';
import Menu from './components/Menu';
import Timer from './components/Timer';

/*import Test from './components/Test';*/

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isMenuOpen && (
          <button className="menu" type="button" onClick={menuHandler}>
            MENÜ
          </button>
        )}
        {isMenuOpen && <Menu onClose={closeMenuHandler}></Menu>}
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
        <div id="hello" className="Greet">
          <h1>HELLO ÁGNES!</h1>
          <Timer deadline="June, 23, 2023" />

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
        <div id="program" className="content">
          <h2>Program</h2>
          <ul>
            <li>Vendégvárás 16:00 órától a Hangár Bisztóban</li>
            <li> Polgári esküvő: 17:00-kor a Gückler Károly kilátónál</li>
          </ul>
          <hr />
        </div>
        <div id="date" className="content">
          <h2>Dátum</h2>
          <p>-2023. Június 23-</p>
          <hr />
        </div>
        <div id="location" className="content">
          <h2>Helyszín</h2>
          <p>
            Hangár Bisztró (megközelítés: autóval vagy a Kolosy tértől közösen
            busszal)
          </p>

          <iframe
            title="3"
            src="https://www.google.com/maps/d/embed?mid=1rV8GmS2Z5Hodj8HHUlWhKvbY5QybUSM&ehbc=2E312F"
            width="400"
            height="450"
            style={{ border: 0 }}
          ></iframe>
          <iframe
            title="4"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21546.556547364242!2d19.005915563480524!3d47.54210876098072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x4741d95666d39073%3A0x420c314ef9a5998a!2sBudapest%2C%20Kolosy%20t%C3%A9r%2C%201036!3m2!1d47.5279202!2d19.0386143!4m5!1s0x4741d8e3a95db9f5%3A0xa5fbd6f1fb4dd25b!2zSGFuZ8OhciBCaXN0cm8sIEJ1ZGFwZXN0LCBIw6FybWFzaGF0w6FyaGVneWkgw7p0IDMsIDEwMzc!3m2!1d47.556227!2d18.997885!5e0!3m2!1sen!2shu!4v1667998574497!5m2!1sen!2shu"
            width="400"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <hr />
        </div>
        <div id="food" className="content">
          <h2>Menü</h2>
          <p>-TBD-</p>
        </div>
        <hr />
        <div id="dressCode" className="content">
          <h2>Dress code</h2>
          <p>-Formal-</p>
        </div>
        <hr />
        <div id="gift" className="content">
          <h2>Nászajándék</h2>
          <p>-Pénzeket adjatok-</p>
        </div>
        <hr />
        <div id="hotel" className="content">
          <h2>Szállás</h2>
          <p>-Rotter Lajos Turistaház-</p>
        </div>
        <hr />
        <div id="feedback" className="content">
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
