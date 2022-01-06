import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import swal from "sweetalert";
import Calendar from "react-calendar";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { GiCash } from "react-icons/gi";




import styles from "../../styles/Model.module.css";

export default function ModelBooking() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showStatus, setShowStatus] = useState(false);
  const [value, changeValue] = useState(new Date());

  const handleClick = (e) => {
    e.preventDefault();
    swal({
      title: "Thanks for booking",
      text: "your booking went succesfully we will check your validation of payment!",
      icon: "success",
    });
  };

  const handleCheckValue = (e) => {
    e.preventDefault();
    e.target.value = value;
    console.log(e.target.value);
    setShowStatus(!showStatus);
  };

  return (
    <div>
      <Button onClick={handleShow} className={styles.bt}>
        {" "}
        Book NOW !
      </Button>
      <Modal show={show} onHide={handleClose} className={styles.model}>
        <Modal.Header closeButton className={styles.formid}>
          <Modal.Title>Booking The Room</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.formid}>
          <Form className={styles.formid}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>First Name</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                className={styles.formid}
              />{" "}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={styles.formid}
              />
              <Form.Text className="text-muted" >
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Check in Date</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Check-in-Date -check-out-Date"
                className={styles.formid}
                onClick={handleCheckValue}
              />
              {showStatus && (
                <div className={styles.calender}>
                  {" "}
                  <Calendar
                    onChange={(date) => changeValue(date)}
                    value={value}
                    showTimeInput
                    timeInputLabel="CheckinDate"
                    dateFormat="yyyy/MM/dd"
                  />
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Select type="select" label="ChOse Your Payment Method" >
                  <option value="1"> Visa </option>
                  <option value="2">Master</option>
                  <option value="3">Cash </option>{" "}
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
              Confirm Booking
            </Button>
          </Form>{" "}
        </Modal.Body>

        <Modal.Footer className={styles.formFooter}>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <h6> Safe-House.com</h6>
          <img src="/img/logoNew.PNG"></img>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
