import PaymentInfo from "./paymenttest";
import Container from "react-bootstrap/Container";
import ShippingForm from "./ShippingForm";

export default function Cart2() {
  return (
    <Container className="cartCon">
      <div style={{ display: "flex" , gap:"300px"}}>
        <ShippingForm />
        <PaymentInfo />


      </div>
    </Container>
  );
}
