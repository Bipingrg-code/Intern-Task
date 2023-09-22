import { CategoryProducts, Hero, Products } from "./Pages";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryProducts />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
