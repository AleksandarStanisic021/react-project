import { getProducts } from "../data/products.js";
import Product from "../components/Product.jsx";

function Home() {
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">
          Welcome to Shop<span style={{ color: "#007bff" }}>Me</span>
        </h1>
        <p className="home-subtitle">Welcome to our online store!</p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
