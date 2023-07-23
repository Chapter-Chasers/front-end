import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import './Cart.css';

export default function ShoppingCart() {
  const [items] = useState([
    { id: 1, name: "Book 1", price: 10 },
    { id: 2, name: "Book 2", price: 15 },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [items]);

  const calculateTotalPrice = () => {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <section className="mb-4">
      <h3>Shopping Cart</h3>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </section>
  );
}
