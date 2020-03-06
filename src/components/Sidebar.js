import React from 'react';
import Icons from '../assets/sprite.svg';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li className='side-nav__item side-nav__item--active'>
          <a href=' ' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${Icons}#icon-home`} />
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href=' ' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${Icons}#icon-aircraft-take-off`} />
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href=' ' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${Icons}#icon-key`} />
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href=' ' className='side-nav__link'>
            <svg className='side-nav__icon'>
              <use xlinkHref={`${Icons}#icon-map`} />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className='legal'>
        &copy; 2020 by Levan Sarishvili. All rights reserved
      </div>
    </nav>
  );
};

export default Sidebar;
