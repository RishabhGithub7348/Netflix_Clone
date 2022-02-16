import movieTrailer from 'movie-trailer';
import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl ,isLargeRow}) => {
    const [movies, setMovies] = useState([]) ;
     const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData () {  
         const request = await axios.get(fetchUrl);  
        console.log(request.data.results);
        setMovies(request.data.results);
        return request;
        }
        fetchData();
    },[fetchUrl])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleClick = async (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        let trailerurl = await axios.get(
          `/movie/${movie.id}/videos?api_key=2f3823f34b8089dbadc4bbe15b661235`
        );
        setTrailerUrl(trailerurl.data.results[0]?.key);
      }
    };
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
          {movies.map(movie => (
              <img
              key = {movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              
              src={`${base_url}${isLargeRow ?  movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          ))}

      </div>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
