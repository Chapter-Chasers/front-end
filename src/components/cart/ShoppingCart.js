import { useState, useEffect } from "react";
import { Container, Table } from 'react-bootstrap';
import "./Cart.css";
import "./ShoppingCart.css";
import { Button } from "primereact/button";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function ShoppingCart() {
  const initialItems = [];

  // geting cart items from local storage or use initialItems if not available
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    return storedItems || initialItems;
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Save cart items to local storage whenever the items state changes
    localStorage.setItem("cartItems", JSON.stringify(items));
    calculateTotalPrice();
  }, [items]);

  const calculateTotalPrice = () => {
    const total = items.reduce((acc, item) => acc + (item.price || 0), 0);
    setTotalPrice(total);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <>
      <Container className="mt-4">
        <h1 className="cart-heading">Shopping Cart</h1>
        {items.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <section className="table-container">
              <Table striped bordered hover responsive className="table">
                <thead>
                  <tr>
                    <th>BookID</th>
                    <th>Book</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>

                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <Button style={{ backgroundColor: '#8b0000' }} onClick={() => handleRemoveItem(item.id)} icon="pi pi-trash"></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </section>
            <section className="text-end" style={{ marginBottom: "20px" }}>
              <p className="total-price text-end">Total Price: ${totalPrice.toFixed(2)}</p>
              <Card style={{ margin: '0 auto' }}>
                <Card.Header>
                  <Nav.Item >
                    <Nav.Link href="/payment" style={{ color: "#3C4048" , display:"flex" , justifyContent:"center"}} >Continue to Payment</Nav.Link>
                  </Nav.Item>
                </Card.Header>
              </Card>
            </section>
          </>
        )}
      </Container>
    </>
  );
}