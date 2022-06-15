import './App.css';
import UseBookData from './Components/Hooks/useFetchData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import DetailedItem from './Components/Shop/DetailedItemScreen/DetailedItem';
import { useState } from 'react';
import NavBar from './Components/Navbar/Navbar';

function App() {
  const [isLoading, fetchedBooks] = UseBookData([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [cartShowing, setCartShowing] = useState(false);

  const showCart = () => setCartShowing(!cartShowing);
  const cartOpacity = cartShowing ? 1 : 0;

  const addCartItem = item => {
    let newCart;
    let checkExist = shoppingCart.filter(content => content.name === item.name);
    checkExist.length === 0
      ? (newCart = [...shoppingCart, item])
      : (newCart = shoppingCart.map(content => {
          if (content.name === item.name) content.quantity++;
          return content;
        }));
    setShoppingCart(newCart);
  };

  const cartHandler = {
    isShowing: cartShowing,
    opacity: cartOpacity,
    show: showCart,
    addItem: addCartItem,
  };

  return (
    <BrowserRouter>
      <NavBar cartHandler={cartHandler} items={shoppingCart} />
      <Routes>
        <Route
          path="/"
          element={<Home status={isLoading} books={fetchedBooks} />}
        ></Route>
        <Route
          path="/shop"
          element={
            <Shop status={isLoading} books={fetchedBooks} cart={cartHandler} />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <DetailedItem
              status={isLoading}
              books={fetchedBooks}
              cart={cartHandler}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart items={shoppingCart} setItems={setShoppingCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
