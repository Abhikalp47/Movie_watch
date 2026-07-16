import MovieCard from "../components/MovieCard"

function Home(){
    const movies=[
        {id:1,title:"John Wick",release_date:"2020"},
        {id:2,title:"John Wick 2",release_date:"2022"},
        {id:3,title:"John Wick 3",release_date:"2024"},
        {id:4,title:"IT",release_date:"2021"},
        {id:5,title:"Friends",release_date:"1998"}
    ];
    return  (
    <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
                 ))}
        
        </div>
    </div>
    )
}
export default Home