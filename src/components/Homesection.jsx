import React from "react";
import { Col, Row } from "react-bootstrap";

function Homesection() {
  return (
    <div>
      <Row className="custom-color hero">
        <Col xs={12} md={5} className=" text-conaitner py-1 m-auto">
          <div className="  p-2 d-flex  justify-content-center flex-column gap-3 text-capitalize  px-3 ">
            <h1 className=" fs-0 hero-title">
              prefect makeup <br /> solution for <br /> everyone
            </h1>
            <p className="text-secondary-emphasis fw-lighter fs-7 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              quasi laudantium a deleniti doloremque fugiat aspernatur? Adipisci
              odio molestiae eum, id nesciunt fugiat optio laboriosam ducimus
              atque vitae pariatur assumenda.
            </p>
            <button className="btn chnage btn-dark text-white w-50 text-capitalize  ">
              shop now
            </button>
          </div>
        </Col>

        <Col className="image-conainter" xs={12} md={7}>
          <div className="d-flex justify-content-center  profle">
            <img
              className="profile-img"
              src="./bannerhero1.jpg"
              width="100%"
              alt="..."
              loading="lazy"

            />
          </div>
        </Col>
      </Row>
      <div className="d-flex gap-4 mt-3 justify-content-between">
        <img src="./brand/brand-1.svg" alt="" />
        <img src="./brand/brand-2.svg" alt="" />
        <img src="./brand/brand-3.svg" alt="" />
        <img src="./brand/brand-4.svg" alt="" />
        <img src="./brand/brand-5.svg" alt="" />
  
      </div>
    </div>
  );
}

export default Homesection;
