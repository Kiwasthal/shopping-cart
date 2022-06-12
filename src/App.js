import './App.css';
import UseBookData from './Components/Hooks/useFetchData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import DetailedItem from './Components/Shop/DetailedItemScreen/DetailedItem';
import { useState } from 'react';

function App() {
  const [isLoading, fetchedBooks] = UseBookData([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const AddItem = item => {
    let addedCart;
    let checkExist = shoppingCart.filter(content => content.name === item.name);
    if (checkExist.length === 0) addedCart = [...shoppingCart, item];
    else
      addedCart = shoppingCart.map(content => {
        if (content.name === item.name) content.quantity++;
        return content;
      });
    setShoppingCart(addedCart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home status={isLoading} books={fetchedBooks} />}
        />
        <Route
          path="/shop"
          element={<Shop status={isLoading} books={fetchedBooks} />}
        />
        <Route path="/shop/:id" element={<DetailedItem />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
