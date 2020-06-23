import movieService from '../services/movieService';

export function loadMovies(filter) {
  if (!filter) filter = '';
  return (dispatch) => {
    try {
      movieService
        .query(filter)
        .then((movies) => dispatch({ type: 'SET_MOVIES', payload: movies }));
    } catch (err) {
      console.log(err);
    }
  };
}
