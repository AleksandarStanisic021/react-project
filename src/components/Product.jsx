export default function Product({ product }) {
  return (
    <div>
      <img
        className="product-card-image"
        src={product.image}
        alt={product.name}
      />
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-price">${product.price.toFixed(2)}</p>
      <p className="product-card-description">{product.description}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
}
