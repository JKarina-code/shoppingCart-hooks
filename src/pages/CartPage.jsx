import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartPage = () => {
  const { listShopping, increaseAmount, decreaseAmount, deleteProduct } =
    useContext(CartContext);

  const calculateTotal = () => {
    return listShopping
      .reduce((total, item) => total + item.price * item.amount, 0)
      .toFixed(2);
  };
  const handleImpresion = () => {
    print();
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {listShopping.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => decreaseAmount(item.id)}
                >
                  {" "}
                  -{" "}
                </button>
                <button className="btn btn-primary">{item.amount}</button>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => increaseAmount(item.id)}
                >
                  {" "}
                  +{" "}
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <th>
            <b>TOTAL: </b>
          </th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>
        </tbody>
      </table>

      <div className="d-grid gap-2 p-5">
        <button
          className="btn btn-primary"
          onClick={handleImpresion}
          disabled={listShopping < 1}
        >
          Shopping
        </button>
      </div>
    </>
  );
};
