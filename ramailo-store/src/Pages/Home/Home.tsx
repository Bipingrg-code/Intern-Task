import { CategoryProducts, Products } from "..";
import { Hero } from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryProducts />
      <Products />
    </div>
  );
};

export default Home;
