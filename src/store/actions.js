import movieService from '../services/movieService';

export function loadMovies() {
  return (dispatch) => {
    try {
      movieService
        .query()
        .then((movies) => dispatch({ type: 'SET_MOVIES', payload: movies }));
    } catch (err) {
      console.log(err);
    }
  };
}
