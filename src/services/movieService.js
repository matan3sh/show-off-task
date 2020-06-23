import axios from 'axios';
const BASE_URL = '/movies.json';

export default {
  query
};

function query(filter) {
  return axios
    .get(BASE_URL)
    .then((res) => res.data)
    .then((movies) =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
}
