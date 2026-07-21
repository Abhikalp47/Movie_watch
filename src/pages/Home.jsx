import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { search, getPopularMovies } from "../components/services/api"
import "../css/Home.css"

function Home() {
    const [searchQuerry, setSearchQuerry] = useState("")

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load....");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuerry.trim()) return;
        setLoading(true);
        setError(null);
        try {
            const searchResults = await search(searchQuerry);
            setMovies(searchResults);
            setSearchQuerry("");
        } catch (err) {
            console.log(err);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movie...
            " className="search-input"
                    value={searchQuerry}
                    onChange={(e) => setSearchQuerry(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
export default Home