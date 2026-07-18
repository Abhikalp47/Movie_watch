const API_KEY = ""
const BASE_URL = ""

const getpopularMovies = async () => {
    const response = fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results;
} 

const search = async (query) => {
    const response = fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results;
} 
