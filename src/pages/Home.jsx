import { getProducts } from "../data/products.js";

function Home() {
  const products = getProducts();
  console.log(products);
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
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-card-image"
              />
              <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">
                  ${product.price.toFixed(2)}
                </p>
                <p className="product-card-description">
                  {product.description}
                </p>

                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
