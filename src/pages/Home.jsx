import MovieCard from "../components/MovieCard";
import { useState,useEffect } from "react";
import {search,getpopularMovies} from "../services/api"
import "../css/Home.css"

function Home(){
    const [searchQuerry,setSearchQuerry]=useState("")

    const [movie,setMovies]=useState([]);  
    const [error,setError]= useState(null)
    const [loading,setLoading]= useState(true)
    
    useEffect(() => {
        const loadPopularMovies= async () => {
            try {
                const popularMovies=await getpopularMovies();
                setMovies(popularMovies)
            } catch (err){
                console.log(err)
                setError("Failed to load....")
            }
            finally{
                setLoading(false)
            }
        } 
        loadPopularMovies();
    })

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuerry)
        setSearchQuerry("")
    }
    return  (
    <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movie...
            " className="search-input"
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuerry) && (
                <MovieCard movie={movie} key={movie.id}/>
                 )
                 ))}
        
        </div>
    </div>
    )
}
export default Home