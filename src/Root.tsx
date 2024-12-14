import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { FirstPage } from './pages/FirstPage/FirstPage';
import { SecondPage } from './pages/SecondPage/SecondPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route index element={<HomePage />} />
        <Route path="catalog">
          <Route index element={<FirstPage />} />
          <Route path=":idMeal" element={<FirstPage />} />
        </Route>
        <Route path="choices" element={<SecondPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
