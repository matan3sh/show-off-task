import axios from 'axios';
const BASE_URL = '/movies.json';

export default {
  query
};

function query() {
  return axios
    .get(BASE_URL)
    .then((res) => res.data)
    .then((movies) => movies);
}
