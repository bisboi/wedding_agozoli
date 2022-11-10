import React from 'react';
import './Menu.css';

function Menu(props) {
  return (
    <div className="open-menu">
      <button id="X" onClick={props.onClose} type="button">
        X
      </button>

      <a href="#hello">Hello!</a>
      <a href="#program">Program</a>
      <a href="#date">Dátum</a>
      <a href="#location">Helyszín</a>
      <a href="#food">Menü</a>
      <a href="#dressCode">Dress code</a>
      <a href="#gift">Nászajándék</a>
      <a href="#hotel">Szállás</a>
      <a href="#feedback">Visszajelzés</a>
    </div>
  );
}

export default Menu;
