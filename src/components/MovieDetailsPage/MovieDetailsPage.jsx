import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';

import { apiDetails } from '../api/Api';
import MovieDetailsPageMurkup from './MovieDetailsPageMurkup';
function MovieDetailsPage() {
  const [movie, setMovie] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    apiDetails(movieId).then(({ data }) => {
      return setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <button>
        <Link to={location?.state ?? '/'}> Go to back</Link>
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
