import './App.css';
import HomeView from './Components/Home/HomeView';
import UseBookData from './Components/Hooks/useFetchData';

function App() {
  const [isLoading, fetchedBooks] = UseBookData();
  console.log(fetchedBooks);
  return (
    <div className="App">
      <HomeView />
    </div>
  );
}
export default App;
