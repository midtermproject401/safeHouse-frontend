import React from "react";
import styles from "../styles/services.module.css";
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    {
      title: "Buy",
      desc: "search millions of for-sale and rental listings, compare  home values and connect with local professionals.",
    },
    {
      title: "Rent",
      desc: "One of the renting perks of renting is that some spaces are furnished and equipped with the necessary electronic home appliances.",
    },
    {
      title: "Sell",
      desc: "By looking at the transaction from a purely financial perspective, you'll distance yourself from the emotional aspects of selling the property.",
    },
    {
      title: "Contact",
      desc: "Feel free to contact sellers any time and make your choice any time.",
    },
    {
      title: "Confirm",
      desc: "Confirm your renting directly from safe house, and do your payment process in few seconds.",
    },
    {
      title: "Book",
      desc: "compare hotel prices from hundreds of travel sites and get great deals. From budget hotels to luxury suites, safe house makes it easy to book online",
    },
  ];

  return (
    <div className={styles.servicesDiv}>
      <section className="section" id="service">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="title text-center mb-5">
                <h3 className="font-weight-normal text-dark">
                  <span className="text-warning">Services</span>
                </h3>
                <p className="text-muted">
                  Safe House give you the chance to make anything in mind, from
                  search to sign, you can do everything online.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map((service, key) => (
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                    <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">
                    {service.title}
                  </h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Service;
