import { MovieCard } from "./MovieCard";


interface ContentProps {
  movies:MovieProps[];
  selectedGenre:GenreResponseProps
}

import '../styles/content.scss'
import { GenreResponseProps, MovieProps } from "../services/interface";
export function Content({movies,selectedGenre}:ContentProps) {
  // Complete aqui

  return (
     <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}