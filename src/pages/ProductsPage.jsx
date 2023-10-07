import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Card } from "../components/Card";
import { CartContext } from "../context/CartContext";

const ProductsPage = () => {
  const { products } = useContext(ProductsContext);
  const { addProduct, deleteProduct } = useContext(CartContext);

  const handleAdd = (item) => {
    addProduct(item);
  };

  const handleRemove = () => {
    deleteProduct(id);
  };
  return (
    <>
      <div className="container">
        <h2 className="p-5">Fashion Style </h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              handleAdd={() => {
                handleAdd(product);
              }}
              handleRemove={() => {
                handleRemove(product.id);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
