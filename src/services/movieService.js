import axios from 'axios';
const BASE_URL = '/movies.json';

const query = async (filter) => {
  try {
    const res = await axios.get(BASE_URL);
    const data = await res.data;
    const movies = await data.filter((movie) =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );
    return movies;
  } catch (err) {
    console.log(err);
  }
};

export default {
  query
};
