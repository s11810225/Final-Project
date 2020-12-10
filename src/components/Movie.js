import MovieItem from './MovieItem';

const Movie = ({movies}) => {
    return(
        <div className="list-movies my-4">
            {movies.map((movie) => (
                <MovieItem movie={movie}/>
            ))}
        </div>
    )
  }

export default Movie