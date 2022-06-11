import HomeContainer from './Components/Home/Home';
import './App.css';
import UseBookData from './Components/Hooks/useFetchData';

function App() {
  const [isLoading, fetchedBooks] = UseBookData([]);
  console.log(fetchedBooks);

  return <HomeContainer books={fetchedBooks} status={isLoading} />;
}
export default App;
