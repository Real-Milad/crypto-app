const API_KEY = "CG-vix5uScp8QzfN8NQwXaNUi3T";
const BASE_URL = "https://api.coingecko.com/api/v3";

export function coinsApi() {
  return `${BASE_URL}/coins/markets?vs_currency=usd&per_page=20&page=0&order=market_cap_desc&x-cg-demo-api-key:${API_KEY}`;
}