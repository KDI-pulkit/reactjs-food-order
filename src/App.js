import { useState } from 'react'; 
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart'

function App() {
  const [cartIsShown, setCartISShown] = useState(false);

  function showCartHandler(){
    setCartISShown(true);
  }

  function hideCartHandler(){
    setCartISShown(false);
  }


  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler} /> }
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
