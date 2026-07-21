const API_KEY = "b11e13f7b90a3f0ba15bdf793474f4aa"
const BASE_URL = "https://api.themoviedb.org/3"

const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results;
}

const search = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results;
}

export { getPopularMovies, search };

