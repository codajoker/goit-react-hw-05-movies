import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiTrand } from '../api/Api';

function HomePage() {
  const [arrayFilm, setArrayFilm] = useState([]);

  useEffect(() => {
    apiTrand().then(({ data }) => {
      return setArrayFilm(data.results);
    });
  }, []);
  return (
    <>
      <ul>
        {arrayFilm &&
          arrayFilm.map(film => {
            if (film.title) {
              return (
                <li key={film.id}>
                  <Link to={`movies/${film.id}`} state={'/'}>
                    {' '}
                    {film.title}
                  </Link>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
}

export default HomePage;
