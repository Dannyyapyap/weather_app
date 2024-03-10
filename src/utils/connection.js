// Load the environments from .env-cmdrc.json during runtime

const API_URL_LAT_LON = process.env.REACT_APP_API_URL_LAT_LON
const API_URL_CURRENT_WEATHER = process.env.REACT_APP_API_URL_CURRENT_WEATHER
const API_TOKEN = process.env.REACT_APP_API_TOKEN

export {API_URL_LAT_LON, API_URL_CURRENT_WEATHER, API_TOKEN}