import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      
      {/* Product Section */}
      <div style={{ flex: 2 }}>
        <h2>Products</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div style={{ flex: 1 }}>
        <Cart />
      </div>

    </div>
  );
}

export default App;
