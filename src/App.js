import './App.css';
import React from 'react';
import Menu from './components/Menu';
import ImageSliderAuto from './components/ImageSliderAuto';
/*import Test from './components/Test';*/

import Img1 from './components/images/agozoli_1.jpg';
import Img2 from './components/images/agozoli_2.jpg';
import Content from './components/Content';

export const ImageData = [
  {
    ImageSrc: Img1,
  },
  {
    ImageSrc: Img2,
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
