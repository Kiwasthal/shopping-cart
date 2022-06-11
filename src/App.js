import { useState } from 'react';
import HomeContainer from './Components/Home/Home';

import './App.css';

import HomeView from './Components/Home/AnimatedTitle';
import UseBookData from './Components/Hooks/useFetchData';

function App() {
  const [isLoading, fetchedBooks] = UseBookData();
  console.log(fetchedBooks);
  return <HomeContainer />;
}
export default App;
