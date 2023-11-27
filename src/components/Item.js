import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span> - <span>{category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
