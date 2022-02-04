import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiCredits } from '../api/Api';

function Cast() {
  const [actors, setActors] = useState([]);
  const movieId = useParams().movieId;
  useEffect(() => {
    apiCredits(movieId).then(({ data }) => {
      return setActors(data.cast);
    });
  }, [movieId]);
  return (
    <>
      {actors && (
        <ul>
          {actors.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  width={100}
                  src={` https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt=""
                />
                <span>character {actor.character} </span>
                <span>name {actor.name} </span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Cast;
