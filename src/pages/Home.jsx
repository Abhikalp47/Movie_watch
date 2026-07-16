import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home(){
    const [searchQuerry,setSearchQuerry]=useState("")

    const movies=[
        {id:1,title:"John Wick",release_date:"2020"},
        {id:2,title:"John Wick 2",release_date:"2022"},
        {id:3,title:"John Wick 3",release_date:"2024"},
        {id:4,title:"IT",release_date:"2021"},
        {id:5,title:"Friends",release_date:"1998"}
    ];
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