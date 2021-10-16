// services
import constantsService from "./constantsService";
// constants
const { BASE_URL, GIPHY_API_KEY, GIFS_FETCH_LIMIT } = constantsService;

const apiService = (() => {
  const fetchRandomGif = () => {
    const url = `${BASE_URL}/random?api_key=${GIPHY_API_KEY}`;
    return fetch(url).then((response) => response.json());
  };

  const fetchSearchedGifs = (text) => {
    let url = `${BASE_URL}/search?api_key=${GIPHY_API_KEY}&limit=${GIFS_FETCH_LIMIT}`;
    if (text) {
      url += `&q=${text}`;
    }
    return fetch(url).then((response) => response.json());
  };

  return {
    fetchRandomGif,
    fetchSearchedGifs,
  };
})();

export default apiService;
