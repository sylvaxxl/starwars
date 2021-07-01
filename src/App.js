import './App.css';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Movie from './Movie';



function App() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);


  const removeMovie = (id) => {
    const newMovie = movies.filter((movies) => movies.episode_id !== id);
    setMovies(newMovie);
  };

  useEffect(() => {
    movieInfo();
  }, []);

  const movieInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://swapi.dev/api/films`);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);


    }
    catch (error) {
      setLoading(false);
      console.log(error + "didn't load url");
    }

  };


  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="no_movies">
        <h2>No more movies</h2>
        <button className="refresh_btn" onClick={movieInfo}>Refresh</button>
      </div>
    )

  }
  return (
    <div>
      <h1 className="movie_heading">STARWARS EPISODES</h1>
      <div className="App">
        {movies.map(movie => (
          <Movie
            key={movie.episode_id}
            id={movie.episode_id}
            title={movie.title}
            content={movie.opening_crawl}
            created={movie.release_date}
            removeItem={removeMovie} />
        ))}

      </div>
    </div>
  );
}

export default App;
