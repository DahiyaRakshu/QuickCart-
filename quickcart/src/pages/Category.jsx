import { useParams } from "react-router-dom";
import products from "../data/products";

function Category() {
  const { name } = useParams();

  const filteredProducts = products.filter(
    (p) => p.category === name
  );

  return (
    <div>
      <h2>{name} Products</h2>

      {filteredProducts.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}

export default Category;
