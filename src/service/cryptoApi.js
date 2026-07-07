const API_KEY = "CG-vix5uScp8QzfN8NQwXaNUi3T";
const BASE_URL = "https://api.coingecko.com/api/v3/";

export function coinsApi(page, currency) {
  return `${BASE_URL}coins/markets?vs_currency=${currency}&per_page=20&page=${page}&order=market_cap_desc&x-cg-demo-api-key:${API_KEY}`
}

export function searchCoins(query) {
  return `${BASE_URL}search?query=${query}&x-cg-demo-api-key:${API_KEY}`
}