import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Rewies() {
  return (
    <div>
      <Container>
        <div className="text-center my-5 py-5">
          <h1 className=" fs-0 hero-title ">shop our best collations </h1>
          <p className="text-secondary-emphasis fw-lighter fs-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            odio excepturi fugiat ad autem incidunt, <br /> dolorem quod dolorum
            quasi quibusdam, praesentium consectetur repudiandae temporibus
            optio <br /> neque dolore aperiam itaque. Odio.{" "}
          </p>
        </div>
        <Row className="p-2 ">
          <Col xs={12} md={6}>
            <div className="d-flex">
              <img
                className=" hero-banner"
                src="./hand.jpg"
                loading="lazy"

                alt=""
                width="100%"
                height="400px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>

          <Col xs={12} md={6} className="">
            <div className="py-3 d-flex justify-content-center flex-column gap-3 text-capitalize">
              <p>reviews</p>
              <h1 className="fs-3 hero-title">
                thousand of satisfied
                <br />
                customers
              </h1>
              <span className="text-secondary-emphasis fw-lighter fs-7 ">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                quasi
              </span>
              <span className="fs-6 hero-title">Mhantich dev</span>
              <p className="text-secondary-emphasis fw-lighter fs-7 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                quasi laudantium a deleniti doloremque fugiat aspernatur?
                Adipisci odio molestiae eum, id nesciunt fugiat optio laboriosam
                ducimus atque vitae pariatur assumenda.
              </p>
              <button
                className=" btn-custmer hover-text p-3  px-2 "
                style={{ display: "block" }}
              >
                <span className="fw-bold text-capitalize ">
                  read more reviews
                </span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rewies;
