import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Emailsub() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Button variant="primary">submit</Button>
      </Form.Group>
    </Form>
  );
}
export default Emailsub;


