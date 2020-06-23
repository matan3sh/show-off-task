import React from 'react';
import Modal from 'react-modal';

import Rate from '../layout/Rate';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Modal.setAppElement('#root');

const MovieDetail = ({ openModal, onClose, movie }) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => onClose()}
      className={'modal'}
      overlayClassName={'overlay'}
    >
      <div className='movie-detail-wrapper'>
        <img src={movie.image} alt='' />
        <h1>{movie.title}</h1>
        <span className='tag tag-teal'>{movie.releaseYear}</span>
        <h3>{movie.genre.join(', ')}</h3>
        <div className='flex'>
          <Rate rate={(movie.rating * 100) / 10} />{' '}
          <span className='movie-rating'>{movie.rating}</span>
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetail;
