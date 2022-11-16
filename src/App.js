import './App.css';
import React from 'react';
import Menu from './components/Menu';
import ImageSliderAuto from './components/ImageSliderAuto';
/*import Test from './components/Test';*/

import Img1 from './components/images/kep_1.jpg';
import Img2 from './components/images/kep_2.jpg';
import Img3 from './components/images/kep_3.jpg';
import Img4 from './components/images/kep_4.jpg';
import Img5 from './components/images/kep_5.jpg';
import Img6 from './components/images/kep_6.jpg';
import Content from './components/Content';

export const ImageData = [
  {
    ImageSrc: Img1,
  },
  {
    ImageSrc: Img2,
  },

  {
    ImageSrc: Img3,
  },

  {
    ImageSrc: Img4,
  },

  {
    ImageSrc: Img5,
  },

  {
    ImageSrc: Img6,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <div className="cover">
          <ImageSliderAuto ImageData={ImageData} SlideInterValTime={10000} />
          <div className="pic-text">
            <h2>
              Már nagyon várjuk, hogy mind ott legyünk Á-tól Z-ig az esküvőnkön!
            </h2>
          </div>
        </div>
      </header>
      <Content />
    </div>
  );
}

export default App;
