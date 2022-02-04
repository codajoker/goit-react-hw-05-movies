import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Cast from './components/Cast/Cast';
import Review from './components/Review/Review';
export function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path={`cast`} element={<Cast />}></Route>
          <Route path={`reviews`} element={<Review />}></Route>
        </Route>
      </Routes>
    </>
  );
}
