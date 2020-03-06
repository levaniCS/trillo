import React from 'react';
import Icons from '../assets/sprite.svg';

const HotelView = () => {
  return (
    <main className='hotel-view'>
      <div className='gallery'>
        <figure className='gallery__item'>
          <img
            src={require('../assets/hotel-1.jpg')}
            alt='hotel 1'
            className='gallery__photo'
          />
        </figure>
        <figure className='gallery__item'>
          <img
            src={require('../assets/hotel-2.jpg')}
            alt='hotel 2'
            className='gallery__photo'
          />
        </figure>
        <figure className='gallery__item'>
          <img
            src={require('../assets/hotel-3.jpg')}
            alt='hotel 3'
            className='gallery__photo'
          />
        </figure>
      </div>

      <div className='overview'>
        <h1 className='overview__heading'>Hotel Las Palmas</h1>
        <div className='overview__stars'>
          <svg className='overview__icon-star'>
            <use xlinkHref={`${Icons}#icon-star`} />
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={`${Icons}#icon-star`} />
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={`${Icons}#icon-star`} />
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={`${Icons}#icon-star`} />
          </svg>
          <svg className='overview__icon-star'>
            <use xlinkHref={`${Icons}#icon-star`} />
          </svg>
        </div>
        <div className='overview__location'>
          <svg className='overview__icon-location'>
            <use xlinkHref={`${Icons}#icon-location-pin`} />
          </svg>
          <button className='btn__inline'>Albufeira, Portugal</button>
        </div>
        <div className='overview__rating'>
          <div className='overview__rating-average'>8.7</div>
          <div className='overview__rating-count'>343 votes</div>
        </div>
      </div>

      <div className='detail'>
        <div className='description'>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className='paragraph'>
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className='list'>
            <li className='list__item'>Close to the beach</li>
            <li className='list__item'>Breakfast included</li>
            <li className='list__item'>Free airoport shuttle</li>
            <li className='list__item'>Free wifi in all rooms</li>
            <li className='list__item'>Air conditioning and heating</li>
            <li className='list__item'>Pets allowed</li>
            <li className='list__item'>We speak all languages</li>
            <li className='list__item'>Perfect for families</li>
          </ul>
          <div className='recommend'>
            <p className='recommend__count'>
              Lucy and 3 other friends recommend this hotel
            </p>
            <div className='recommend__friends'>
              <img
                src={require('../assets/user-3.jpg')}
                alt='friend 1'
                className='recommend__photo'
              />
              <img
                src={require('../assets/user-4.jpg')}
                alt='friend 2'
                className='recommend__photo'
              />
              <img
                src={require('../assets/user-5.jpg')}
                alt='friend 3'
                className='recommend__photo'
              />
              <img
                src={require('../assets/user-6.jpg')}
                alt='friend 4'
                className='recommend__photo'
              />
            </div>
          </div>
        </div>
        <div className='user-reviews'>
          <figure className='review'>
            <blockquote className='review__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className='review__user'>
              <img
                src={require('../assets/user-1.jpg')}
                alt='user 1'
                className='review__photo'
              />
              <div className='review__user-box'>
                <p className='review__user-name'>Nick Smith</p>
                <p className='review__user-date'>Feb 23rd, 2020</p>
              </div>
              <div className='review__rating'>7.8</div>
            </figcaption>
          </figure>

          <figure className='review'>
            <blockquote className='review__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className='review__user'>
              <img
                src={require('../assets/user-2.jpg')}
                alt='user 2'
                className='review__photo'
              />
              <div className='review__user-box'>
                <p className='review__user-name'>Mary Gallaher</p>
                <p className='review__user-date'>May 13th, 2019</p>
              </div>
              <div className='review__rating'>9.5</div>
            </figcaption>
          </figure>
          <button className='btn__inline'>
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className='cta'>
        <h2 className='cta__book-now'>
          Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className='btn'>
          <span className='btn__visible'>Book now</span>
          <span className='btn__invisible'>Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
};

export default HotelView;
