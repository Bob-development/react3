import { Header, SubHeader, Main, Footer, ProductsPage, CategoryPage, CartPage } from "./components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SubHeader />
        <Header />
        
        <Routes>
          <Route exact path="/" element={ <Main /> } />
          <Route exact path="/products" element={ <ProductsPage /> } />
          <Route exact path="/category" element={ <CategoryPage /> } />
          <Route exact path="/cart" element={ <CartPage /> } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;