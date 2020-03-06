import React from 'react';
import Icons from '../assets/sprite.svg';

const Header = () => {
  return (
    <header className='header'>
      <img
        src={require('../assets/logo.png')}
        alt='trillo logo'
        className='logo'
      />
      <form action='#' className='search'>
        <input
          type='text'
          className='search__input'
          placeholder='Search hotels'
        />
        <button className='search__button'>
          <svg className='search__icon'>
            <use xlinkHref={`${Icons}#icon-magnifying-glass`} />
          </svg>
        </button>
      </form>

      <nav className='user-nav'>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref={`${Icons}#icon-bookmark`} />
          </svg>
          <span className='user-nav__notification'>7</span>
        </div>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref={`${Icons}#icon-chat`} />
          </svg>
          <span className='user-nav__notification'>7</span>
        </div>
        <div className='user-nav__user'>
          <img
            src={require('../assets/user.jpeg')}
            alt='user'
            className='user-nav__user-photo'
          />
          <span className='user-nav_user-name'>Levan</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
