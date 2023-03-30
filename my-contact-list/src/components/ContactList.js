import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ContactList.css'

function ContactList() {
  return (
    <div className='contacListContainer'>
        <header>
            <h1>Add A New Contact</h1>
        </header>
    <Form className='w-75'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='d-flex justify-content-start'>Full Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-start'>Email</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-start'>Phone</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='d-flex justify-content-start'>Address</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className='w-100' variant="primary" type="submit">
        Submit
      </Button>
      <p style={{textAlign: "left"}}>or get back to contacts</p>

    </Form>
    </div>
  );
}

export default ContactList;