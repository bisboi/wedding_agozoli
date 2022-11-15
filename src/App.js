import './App.css';
import React, { useState } from 'react';
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
          {/* <img
            className="main-pic"
            src="images/agozoli_1.jpg"
            alt="agozoli_1"
          /> */}
          <ImageSliderAuto ImageData={ImageData} SlideInterValTime={10000} />
          <div className="pic-text">
            <h2>
              Már nagyon várjuk, hogy mind ott legyünk Á-tól Z-ig az esküvőnkön!
            </h2>
          </div>
        </div>
      </header>
      <Content></Content>
    </div>
  );
}

export default App;
