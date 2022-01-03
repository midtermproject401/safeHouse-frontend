import React from "react";
// import styles from "../styles/Footer.module.css";

import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Feature",
      child: [
        { title: "Rent a home", link: "/" },
        { title: "Book a hotel Room", link: "/" },
        { title: "Post adds", link: "/" },
      ],
    },
    {
      id: 2,
      title: "About Us",
      child: [
        { title: "Contact Us", link: "/" },
        { title: "FAQs", link: "/" },
        { title: "Privacy Policy", link: "/" },
      ],
    },
  ];

  return (
    <div>
      <section className="footer section">
        <Container>
          <Row>
            <Col lg={4}>
              <h6 className=" mb-3">Contact</h6>
              <div className="mb-4">
                <p className=" mt-4 mb-2">contact@safe-house.com</p>
                <h6 className="font-weight-normal">+962 786866666</h6>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                {links.map((link, key) => (
                  <Col key={key} md={4}>
                    <h6 className="mb-3" id="features">
                      {link.title}
                    </h6>
                    <ul
                      id="features"
                      className="list-unstyled company-sub-menu"
                    >
                      {link.child.map((fLink, key) => (
                        <li id="features" key={key}>
                          <a id="features" href={fLink.link}>
                            {fLink.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}

                <Col md={4}>
                  <h6 className=" mb-3">Our Address</h6>
                  <p className=" f-14">Amman, Jordan </p>
                  <h6 className=" pb-2">Email: contact@safe-house.com</h6>
                  <ul className="list-unstyled footer-social-list mt-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="mdi mdi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <div className="text-center ">
                <p className="mb-0 f-15">2022 © Safe House</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Footer;
