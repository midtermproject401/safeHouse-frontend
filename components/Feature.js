import React from "react";
import styles from "../styles/Feature.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <div className={styles.description}>
            <Row
              key={key}
              className={
                feature.id === 1
                  ? "align-items-center"
                  : "align-items-center mt-5"
              }
            >
              <Col key={key} md={5}>
                <div>
                  <img
                    src={feature.img}
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </Col>

              <Col md={{ size: 6, offset: 1 }}>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>

                  <h5 className="text-dark font-weight-normal mb-3 pt-3">
                    {feature.title}
                  </h5>

                  <p className="text-muted mb-3 f-15">{feature.desc}</p>

                  <a href={feature.link} className="f-16 text-warning">
                    Read More <span className="right-icon ml-2">&#8594;</span>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div className={styles.description}>
            <Row key={key} className="align-items-center mt-5">
              <Col md={6}>
                <div className="mb-4">
                  <div className="my-4">
                    <i className="mdi mdi-account-group"></i>
                  </div>
                  <h5 className="text-dark font-weight-normal mb-3 pt-3">
                    {feature.title}
                  </h5>
                  <p className="text-muted mb-3 f-15">{feature.desc}</p>
                  <a href={feature.link} className="f-16 text-warning">
                    Read More <span className="right-icon ml-2">&#8594;</span>
                  </a>
                </div>
              </Col>
              <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
                <div>
                  <img
                    src={feature.img}
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </Col>
            </Row>
          </div>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: "https://image.freepik.com/free-vector/family-moving-countryside-area-realtor-shows-townhouse-house-rent-booking-hose-online-best-rental-property-real-estate-services-concept-pinkish-coral-bluevector-isolated-illustration_335657-1959.jpg",
      title: "Rent a home",
      desc: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
      link: "./home/houses",
    },
    {
      id: 2,
      img: "https://thumbs.dreamstime.com/b/hotel-booking-searching-reservation-hand-holding-smartphone-concept-vector-illustration-flat-style-151052179.jpg",
      title: "Book a hotel Room",
      desc: "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.",
      link: "./hotels",
    },
    {
      id: 3,
      img: "https://thumbs.dreamstime.com/b/real-estate-agent-abstract-concept-vector-illustration-market-demonstrating-house-buying-new-appartment-realtor-commercial-198853654.jpg",
      title: "Post adds",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      link: "/",
    },
  ];
  return (
    <section id={"section1"} className="section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Features</span>
              </h3>
              <p className="text-muted">
                Whether you’re buying, selling or renting, we can help you move
                forward.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Feature;
