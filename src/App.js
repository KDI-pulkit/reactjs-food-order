import { useState } from 'react'; 
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

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
      { cartIsShown && <div> Cart... </div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
