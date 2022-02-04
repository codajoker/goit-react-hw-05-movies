function MovieDetailsPageMurkup({ movie }) {
  return (
    <div>
      <img
        width={300}
        src={` https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt=""
      />
      <div>
        <h1>
          {movie.title} ({movie.release_date})
        </h1>
        <span>User Score : {movie.vote_average * 10}%</span>
        <h2>Overviev</h2>
        <span> {movie.overview}</span>
        <h2>Genners</h2>
        <ul>
          {movie.genres.map(genner => {
            return <li key={genner.id}> {genner.name}</li>;
          })}
        </ul>
        <span></span>
      </div>
    </div>
  );
}

export default MovieDetailsPageMurkup;
