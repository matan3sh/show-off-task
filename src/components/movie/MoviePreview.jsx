import React from 'react';
import { FaStar } from 'react-icons/fa';
import MovieDetail from './MovieDetail';

class MoviePreview extends React.Component {
  state = { openModal: false };

  onClose = () => {
    this.setState({ openModal: false });
  };

  onOpenModal = () => {
    this.setState({ openModal: true });
  };

  render() {
    const { movie } = this.props;
    const { openModal } = this.state;
    return (
      <>
        <MovieDetail
          openModal={openModal}
          onClose={this.onClose}
          movie={movie}
        />
        <div className='card' onClick={this.onOpenModal}>
          <div className='card-header'>
            <img src={movie.image} alt='' />
          </div>
          <div className='card-body'>
            <div className='card-header'>
              <span className='tag tag-teal'>{movie.releaseYear}</span>
              <FaStar className='star' color={'#ffc107'} size={25} />
              <span className='movie-rating'>{movie.rating}</span>
            </div>
            <h4>{movie.title}</h4>
            <p>{movie.genre.join(', ')}</p>
          </div>
        </div>
      </>
    );
  }
}

export default MoviePreview;
