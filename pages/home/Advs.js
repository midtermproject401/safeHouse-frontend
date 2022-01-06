import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Adv.module.css";
import axios from "axios";
import { RiAdvertisementFill } from "react-icons/ri";
import { FcHome } from "react-icons/fc";

import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import swal from "sweetalert";
import {
  MdDescription,
  MdPriceCheck,
  MdOutlineShareLocation,
  MdEventAvailable,
  MdHotel,
} from "react-icons/md";

export default function Advs() {
  const { register, handleSubmit } = useForm();
  // function onSubmit(data) {
  //   console.log(data);
  //   console.log("hell0");
  // }

  // const inputRef = useRef<HTMLInputElement>(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    e.preventDefault();
    swal({
      title: "Your ad post successfully",
      text: "You can see now your ad adds to Home Page",
      icon: "success",
    });
  };
  async function onSubmit(values) {
    let config = {
      method: "post",
      url: `https://safe---house.herokuapp.com/api/v1/house`,
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          "success",
          "Thank you for contacting us, we will be in touch soon."
        );
      }
    } catch (err) {}
  }

  const handleUpload = () => {
    alert("upload your images");
  };

  return (
    <>
      {" "}
      <div className={styles.formDiv}>
        
        <img src="https://thumbs.dreamstime.com/b/real-estate-agent-abstract-concept-vector-illustration-market-demonstrating-house-buying-new-appartment-realtor-commercial-198853654.jpg"></img>
        <Button onClick={handleShow} className={styles.bt}>
          {" "}
          Post Your Ad to be published <RiAdvertisementFill />
        </Button>
        <p>Start posting your ads </p>
        <Modal show={show} onHide={handleClose} className={styles.model}>
          <Modal.Header closeButton className={styles.formid}>
            <Modal.Title className={styles.formid}>
              {" "}
              Post your Advertisment <RiAdvertisementFill />
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={styles.formid}>
            <Form className={styles.formid}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>
                  {" "}
                  <MdPriceCheck />
                </Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="location"
                  className={styles.formid}
                />
                {/* <Form.Label>Description</Form.Label> */}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  className={styles.formid}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                className={styles.formid}
              >
                {/* <Form.Label>Add Images for your house</Form.Label> */}
                <div className="m-3">
                  <label className="mx-3">
                    Upload your images for your house{" "}
                  </label>
                  <input className="d-none" type="file" />
                  <button
                    onClick={handleUpload}
                    className="btn btn-outline-primary"
                  >
                    Upload
                  </button>
                </div>
                {/* <Form.Control
                  type="text"
                  placeholder="Add Images for your house"
                /> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select className={styles.formid}>
                  <option> Chooses your Rent Duration</option>
                  <option value="1">weekly</option>
                  <option value="2">daily</option>
                  <option value="3">yearly</option>{" "}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Add The price </Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Add The price"
                  className={styles.formid}
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={handleClick}
                className={styles.butt}
              >
                Post The Ads
              </Button>
            </Form>{" "}
          </Modal.Body>

          {/* <div className={styles.title}></div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.input_box}>
              <span>location</span>
              <input
                {...register("location", { required: true })}
                placeholder="location"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>Description</span>
              <input
                {...register("Description", { required: true })}
                placeholder="Description"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>Main imge</span>
              <input
                {...register("imgHero", { required: true })}
                placeholder="Main imge"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>imge 1</span>
              <input
                {...register("img1", { required: true })}
                placeholder="imge 1"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>imge 2</span>
              <input
                {...register("img2", { required: true })}
                placeholder="imge 2"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>Rent Duration</span>
              <input
                {...register("rentDuration", { required: true })}
                placeholder="Rent Duration"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>imge 3</span>
              <input
                {...register("img3", { required: true })}
                placeholder="imge 3"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>price</span>
              <input
                {...register("price", { required: true })}
                placeholder="price"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>state</span>
              <input
                {...register("state", { required: true })}
                placeholder="state"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span> Your Name</span>
              <input
                {...register("ownerName", { required: true })}
                placeholder="Your Name"
                className={styles.input}
              />
            </div>
            <div className={styles.input_box}>
              <span>Phone Number</span>
              <input
                {...register("phoneNumber", { required: true })}
                placeholder="Phone Number"
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="submit"
                className={styles.form_button}
                value={"post an AD"}
              />
            </div>
          </form> */}
        </Modal>
      </div>
    </>
  );
}

/* <Modal.Header closeButton>
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
{/* <Button variant="primary">Save changes</Button> */

// </Modal.Footer> */}
