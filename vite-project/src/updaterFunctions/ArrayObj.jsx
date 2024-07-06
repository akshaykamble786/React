import React, {useState, useEffect} from 'react'

const ArrayObj = () => {

    const [movie, setMovie] = useState(() => {
        const savedMovies = localStorage.getItem('movies');
        return savedMovies ? JSON.parse(savedMovies) : "Error Occured";
    });
    const [movieYear, setMovieYear] = useState(new Date().getFullYear())
    const [movieGenre, setMovieGenre] = useState("")
    const [movieName, setMovieName] = useState("")

    const addMovie = () => {
        const newMovie = {
            year : movieYear,
            genre : movieGenre,
            name : movieName
        }

        setMovie(m => [...m, newMovie])
        setMovieGenre("")
        setMovieName("")
        setMovieYear(new Date.getFullYear())
        
    }

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movie));
    }, [movie]);

    const removeMovie = (index) => setMovie(m => m.filter((_, i) => i!== index))
    const handleMovieYear = (event) => setMovieYear(event.target.value)
    const handleMovieGenre = (event) => setMovieGenre(event.target.value)
    const handleMovieName = (event) => setMovieName(event.target.value)

  return (
    <div>
        <h2>List of movies I've watched</h2>
        <ul>
            {movie.map((movies,index) => 
                <li onClick={() => removeMovie(index)} key={index}>{movies.name} - {movies.year} - {movies.genre}</li>
            )}
        </ul>

        <input type="text" value = {movieName} onChange={handleMovieName} placeholder='enter movie name'/><br/>
        <input type="number" value={movieYear} onChange={handleMovieYear} placeholder='enter movie release year'/><br/>
        <input type="text" value = {movieGenre} onChange={handleMovieGenre} placeholder='enter movie genre'/><br/>
        <button onClick={addMovie}>Add movie</button>
    </div>
  )
}

export default ArrayObj;