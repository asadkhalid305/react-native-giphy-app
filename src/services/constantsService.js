import { GIPHY_API_KEY } from "@env";

const constantsService = {
  GIPHY_API_KEY: GIPHY_API_KEY,
  BASE_URL: 'https://api.giphy.com/v1/gifs',
  AGE_RESTRICTION: 16,
  GIFS_FETCH_LIMIT: 20,
  API_GENERAL_ERROR_MSG: "Error occurred while fetching information",
};

export default constantsService;
