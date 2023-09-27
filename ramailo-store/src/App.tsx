import { Home, Products } from "./Pages";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import CategoryProductList from "./components/CategoryProductsList/CategoryProductsList";
import SingleProducts from "./components/SingleProducts/SingleProducts";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/category/:category"
          element={<CategoryProductList />}
        />
        <Route path="/products/:productId" element={<SingleProducts />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
