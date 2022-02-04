import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, Link } from 'react-router-dom';

import { apiDetails } from '../api/Api';
import MovieDetailsPageMurkup from './MovieDetailsPageMurkup';
function MovieDetailsPage() {
  const [movie, setMovie] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    apiDetails(movieId).then(({ data }) => {
      return setMovie(data);
    });
  }, [movieId]);
  const a = () => {
    if (window.history.state.usr) {
      return window.history.state.usr;
    }
    return '/';
  };
  return (
    <>
      <button>
        <Link to={a()}> Go to back</Link>
      </button>
      {movie && (
        <>
          <MovieDetailsPageMurkup movie={movie}></MovieDetailsPageMurkup>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to={`cast`}>cast </NavLink>
              </li>
              <li>
                <NavLink to={`reviews`}>reviews </NavLink>
              </li>
            </ul>
          </div>
          <Outlet></Outlet>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
