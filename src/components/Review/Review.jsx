import { useState, useEffect } from 'react';
import { apiReviews } from '../api/Api';
import { useParams } from 'react-router-dom';

function Review() {
  const [reviews, setReview] = useState([]);
  const movieId = useParams().movieId;

  useEffect(() => {
    apiReviews(movieId).then(({ data }) => {
      return setReview(data.results);
    });
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.length >= 1 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>Author : {review.author}</h2>
                <div> Content : {review.content}</div>
              </li>
            );
          })
        ) : (
          <span>Woops not review</span>
        )}
      </ul>
    </>
  );
}

export default Review;
