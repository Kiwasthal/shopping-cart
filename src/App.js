import './App.css';
import UseBookData from './Components/Hooks/useFetchData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  const [isLoading, fetchedBooks] = UseBookData([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home status={isLoading} books={fetchedBooks} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
