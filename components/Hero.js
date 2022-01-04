import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Safe House
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Renting has never been easier.{" "}
                <span className="text-primary font-weight-medium">
                  Rent,Book, and Offer
                </span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                From search to sign, you can do everything online. Search over
                all the listings, including apartments, houses, condos and
                townhomes. With the most listings to choose from, you'll find
                your perfect fit. Safe House making it simpler to sell your home
                and move forward.
              </p>

              <Link href="./#Features">
                <a className="btn btn-warning">
                  Find Out How <span className="ml-2 right-icon">&#8594;</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="https://www.legalraasta.com/itr/wp-content/uploads/2019/04/rr1.jpg"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
