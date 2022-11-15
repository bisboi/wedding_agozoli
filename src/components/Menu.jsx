import React, { useState } from 'react';
import './Menu.css';

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((currentValue) => (currentValue = !currentValue));
  };

  const listItems = [
    {
      href: '#hello',
      label: 'Hello!',
    },
    {
      href: '#program',
      label: 'Program',
    },
    {
      href: '#location',
      label: 'Helyszín',
    },
    {
      href: '#food',
      label: 'Menü',
    },
    {
      href: '#dressCode',
      label: 'Dress code',
    },
  ];

  return (
    <nav
      className={isOpen ? 'Menu Menu--open' : 'Menu Menu--closed'}
      onClick={toggleMenu}
    >
      <div className="Menu__Button">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            overflow="visible"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x2="12" y2="12" />
            <line x1="12" y2="12" />
          </svg>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              overflow="visible"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="12" y1="1" y2="1" />
              <line x1="0" x2="12" y1="5" y2="5" />
              <line x1="0" x2="12" y1="9" y2="9" />
            </svg>
            Menü
          </>
        )}
      </div>
      {isOpen && (
        <ul className="Menu__List">
          {listItems.map((item) => (
            <a key={item.href} href={item.href}>
              <div className="Menu__List__Item__Container">
                <li className="Menu__List__Item">{item.label}</li>
              </div>
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Menu;
