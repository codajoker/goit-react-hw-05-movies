import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const loader = component => {
  return lazy(() => import(`./components/${component}/${component}`));
};
const Navigation = loader('Navigation');
const HomePage = loader('HomePage');
const MovieDetailsPage = loader('MovieDetailsPage');
const MoviesPage = loader('MoviesPage');
const Cast = loader('Cast');
const Review = loader('Review');

export function App() {
  return (
    <Suspense fallback={''}>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path={`cast`} element={<Cast />} />
          <Route path={`reviews`} element={<Review />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
