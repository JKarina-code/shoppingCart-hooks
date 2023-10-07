import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";
function App() {
  return (
    <Router>
      <ProductsProvider>
        <CartProvider>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" index element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
          </div>
        </CartProvider>
      </ProductsProvider>
    </Router>
  );
}

export default App;
