// services
import constantsService from "./constantsService";
import toastService from "./toastService";
// constants
const {
  BASE_URL,
  GIPHY_API_KEY,
  GIFS_FETCH_LIMIT,
  API_GENERAL_ERROR_MSG,
} = constantsService;

const apiService = (() => {
  const fetchRandomGif = () => {
    const url = `${BASE_URL}/random?api_key=${GIPHY_API_KEY}`;
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const {
          meta: { status, msg },
        } = response;
        if (status === 200) {
          const info = response?.data || {};
          const newImage = {
            id: info?.id || "",
            title: info?.title || "",
            url: info?.images?.original?.url || "",
          };
          return newImage;
        } else {
          toastService.showToast(msg || API_GENERAL_ERROR_MSG);
        }
      })
      .catch((error) => {
        toastService.showToast(error || API_GENERAL_ERROR_MSG);
      });
  };

  const fetchSearchedGifs = (text) => {
    let url = `${BASE_URL}/search?api_key=${GIPHY_API_KEY}&limit=${GIFS_FETCH_LIMIT}`;
    if (text) {
      url += `&q=${text}`;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const {
          meta: { status, msg },
        } = response;
        if (status === 200) {
          const info = response?.data || [];
          let newImages = [];
          info.forEach((item) => {
            const newImage = {
              id: item?.id || "",
              title: item?.title || "",
              url: item?.images?.original?.url || "",
            };
            newImages.push(newImage);
          });
          return newImages;
        } else {
          toastService.showToast(msg || API_GENERAL_ERROR_MSG);
        }
      })
      .catch((error) => {
        toastService.showToast(error || API_GENERAL_ERROR_MSG);
      });
  };

  return {
    fetchRandomGif,
    fetchSearchedGifs,
  };
})();

export default apiService;
