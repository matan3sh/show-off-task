import React from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../../store/actions';

import Loader from '../layout/Loader';
import MovieList from '../movie/MovieList';
import MovieFilter from '../movie/MovieFilter';

class MovieApp extends React.Component {
  async componentDidMount() {
    // await this.props.loadMovies();
    setTimeout(() => this.props.loadMovies(), 2000);
  }

  render() {
    const { movies } = this.props;
    return (
      <>
        {!movies.length ? (
          <Loader />
        ) : (
          <>
            <MovieFilter />
            <MovieList movies={movies} />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieApp.movies
});

const mapDispatchToProps = {
  loadMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);
