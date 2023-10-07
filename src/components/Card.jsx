import { useState } from "react";
import "../styles/card.css";

export const Card = ({
  image,
  title,
  description,
  price,
  handleAdd,
  handleRemove,
}) => {
  const [added, setAdded] = useState(false);

  const clickAdd = () => {
    setAdded(true);
    handleAdd();
  };

  const clickRemove = () => {
    setAdded(false);
    handleRemove();
  };
  return (
    <div className="col">
      <div className="card">
        <img src={image} alt={title} className="card-image" />

        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-price">S/ {price}</p>
          <div className="d-grid gap-2 my-3">
            {added ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={clickRemove}
              >
                Remove
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-warning"
                onClick={clickAdd}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
