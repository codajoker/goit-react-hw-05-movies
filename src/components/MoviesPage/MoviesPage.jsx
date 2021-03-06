import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { apiQuery } from '../api/Api';

function MoviesPage() {
  const [movies, setMovies] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (searchParams.get('query')) {
      apiQuery(searchParams.get('query')).then(({ data }) => {
        return setMovies(data.results);
      });
    }
  }, [searchParams]);
  const onSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: query.trim() });
    if (searchParams.get('query') === '') {
      return alert('Введите в поле поиска что то ');
    }
    apiQuery(searchParams.get('query')).then(({ data }) => {
      return setMovies(data.results);
    });
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>
          <input
            type="text"
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </label>
        <button>Go!</button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={`${movie.id}`}
                  state={`${location.pathname}${location.search}`}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default MoviesPage;
