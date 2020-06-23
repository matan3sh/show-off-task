const initialState = {
  movies: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
}
