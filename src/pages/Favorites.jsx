import "../css/Favorites.css"
import { useMovieContaxt } from "../context/MovieContaxt"
import MovieCard from "../components/MovieCard"

function Favorite() {
    const { favorites } = useMovieContaxt();

    if (favorites && favorites.length > 0) {
        return (<div className="favorite">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
        )
    }

    return <div className="favorite-empty">
        <h2>No favorite Movie yet</h2>
        <p>Start adding movies to your favorites and the will appear here</p>
    </div>
}

export default Favorite
