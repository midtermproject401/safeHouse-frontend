import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import swal from 'sweetalert';

import styles from "../../styles/Model.module.css";

export default function ModelBooking() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    e.preventDefault();
    swal({
        title: "Thanks for booking",
        text: "your booking went succesfully we will check your validation of payment!",
        icon: "success",
      });  };

  return (
    <div>
      <Button onClick={handleShow} className={styles.bt}>
        {" "}
        Book NOW !
      </Button>
      <Modal show={show} onHide={handleClose} className={styles.model}>
        <Modal.Header closeButton>
          <Modal.Title>Booking The Room</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Check in Date</Form.Label>
              <Form.Control type="text" placeholder="Check in Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Check out Date</Form.Label>
              <Form.Control type="text" placeholder="Check out Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
              Submit
            </Button>
          </Form>{" "}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
