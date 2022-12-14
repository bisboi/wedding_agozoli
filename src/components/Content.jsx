import React from 'react';
import Timer from './Timer';
import './Content.css';

function Content() {
  return (
    <div>
      <section className="Content-holder">
        <div id="hello" className="content">
          <h1>HELLO NÉP!</h1>

          <Timer deadline="June, 23, 2023" />
        </div>
        <div className="image-holder">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>
        <div className="content">
          <h3>
            Miután meggyőződtünk arról, hogy nekünk együtt a legjobb, a sikeres
            folytatás érdekében 2023. Június 23-án összeházasodunk. Reméljük,
            hogy velünk osztozol e nagy nap örömeiben és megtisztelsz minket
            jelenléteddel a ceremónián, majd az azt követő dínom-dánomon.
          </h3>
        </div>
        <div className="image-holder b">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>
        <div id="program" className="content">
          <h2>Program</h2>
          <div className="list">
            <p>
              <b> 17:00</b> Vendégvárás
            </p>
            <p>
              <b>18:15</b> Ceremónia
            </p>
            <p>
              <b>18:45</b> Fotózás és gratulációk
            </p>
            <p>
              <b>20:00</b> Vacsora
            </p>
            <p>
              <b>21:30</b> Nyitótánc
            </p>
            <p>
              <b>23:00</b> Tortavágás
            </p>
            <p>
              <b>23:30</b> Menyecsketánc
            </p>
            <p>
              <b>Tánc hajnalig</b>
            </p>
          </div>
        </div>
        <div className="image-holder">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>

        <div id="date" className="content">
          <h2>Dátum</h2>
          <p>2023. Június 23</p>
        </div>
        <div className="image-holder b">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>
        <div id="location" className="content">
          <h2>Helyszín</h2>
          <p>
            Hangár Bisztró (megközelítés: autóval vagy a Kolosy tértől közösen
            busszal)
          </p>
          <iframe
            title="4"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21546.556547364242!2d19.005915563480524!3d47.54210876098072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x4741d95666d39073%3A0x420c314ef9a5998a!2sBudapest%2C%20Kolosy%20t%C3%A9r%2C%201036!3m2!1d47.5279202!2d19.0386143!4m5!1s0x4741d8e3a95db9f5%3A0xa5fbd6f1fb4dd25b!2zSGFuZ8OhciBCaXN0cm8sIEJ1ZGFwZXN0LCBIw6FybWFzaGF0w6FyaGVneWkgw7p0IDMsIDEwMzc!3m2!1d47.556227!2d18.997885!5e0!3m2!1sen!2shu!4v1667998574497!5m2!1sen!2shu"
            width="300"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="image-holder">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>
        <div id="food" className="content">
          <h2>Menü</h2>
          <p>TBD</p>
        </div>
        <div className="image-holder b">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>

        <div id="dressCode" className="content">
          <h2>Dress code</h2>
          <p>
            Esküvőnket elegáns, ünnepi keretek között szeretnénk megünnepelni,
            ezért kérünk téged, hogy te is ilyen öltözetben gyere és hagyd meg a
            tipikus esküvői színek viselését nekünk.
          </p>
          <p>
            Bátran pattintsátok ki magatokat, mert mi is szuper csinosban
            leszünk. It's time to shine!
          </p>
        </div>

        <div className="image-holder">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>

        <div id="gift" className="content">
          <h2>Nászajándék</h2>
          <p>
            Mindennek örülünk, ami egy borítékba belefér! A menyecsketáncra
            pedig kérlek, ne készülj külön, bízunk abban, hogy mellénk áll a
            szerencse így kérlek egy sorsjegyet dobj majd a kalapba.{' '}
          </p>
        </div>
        <div className="image-holder b">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>

        <div id="hotel" className="content">
          <h2>Szállás</h2>
          <p>Rotter Lajos Turistaház</p>
        </div>
        <div className="image-holder">
          <img src="./images/HR_jobb.jpg" alt="olajag" />
        </div>

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

export default Content;
