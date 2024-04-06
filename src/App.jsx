import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import { MovieCard } from './MovieCard'
function App() {
  const [movies, setMovies] = useState([]);
  const[searchTerm,setSearchTerm] = useState('')

  //d85cab4f

  const API_URL = 'http://www.omdbapi.com/?apikey=d85cab4f'
  const searchMovie= async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data= await response.json()
    setMovies(data.Search)
  }


  useEffect(()=>{
    searchMovie('Batman')
  },[])
  
  const movie = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
  return (
    <>
      <div className="app">
        <h1>Movie Space</h1>
        <div className="search">
          <input type='text' placeholder='Search for movie' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          <img src={SearchIcon} alt='search' onClick={()=>searchMovie(searchTerm)}/>
        </div>
        {
          movies?.length>0 ?(
            <div className="container">
              {movies.map((movie)=>(
        <MovieCard movie={movie}/>

              ))}
            </div>
          ):(
            <div className="search">
              <h2>No Movie Found</h2>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
