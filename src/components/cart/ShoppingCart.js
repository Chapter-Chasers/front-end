import { useState, useEffect } from "react";
import { Container, Table } from 'react-bootstrap';
import "./Cart.css";
import "./ShoppingCart.css";
import { Button } from "primereact/button";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function ShoppingCart() {
  const initialItems = [
    { id: 1, name: "Book 1", price: 10 },
    { id: 2, name: "Book 2", price: 15 },
    { id: 3, name: "Book 3", price: 15 },
    { id: 4, name: "Book 4", price: 15 },
    { id: 5, name: "Book 5", price: 15 },
    { id: 6, name: "Book 6", price: 15 },
    { id: 7, name: "Book 7", price: 15 },
    { id: 8, name: "Book 8", price: 15 },
    { id: 9, name: "Book 9", price: 15 },
    { id: 10, name: "Book 10", price: 15 },
  ];

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
                        <Button style={{ backgroundColor: "InactiveBorder" }} onClick={() => handleRemoveItem(item.id)} icon="pi pi-trash"></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </section>
            <section className="text-end">
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
{/* <Card style={{ height: "50vh", width: "70vh" }}>
        <Card.Header as="h5">Shopping Cart</Card.Header>
        <Card.Body>
          <div className="scroll-container">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <Button
                  variant="primary"
                  onClick={() => handleRemoveItem(item.id)}
                  icon="pi pi-trash"
                ></Button>

                <p>${item.price}</p>
              </div>
            ))}
          </div>

          <div className="total-price" style={{ marginTop: "60px" }}>
            <p>Total Price: ${totalPrice}</p>
            <br />
          </div>
        </Card.Body>
      </Card> */}
