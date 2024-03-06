import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <div className="bg-lainer mt-5 py-5  mb-5 ">
      <Container>
        <Row className="gap-1">
          <Col sm={12} md={5} className=" px-5  word-spacing d-flex justify-content-end">
              <h1 className=" fs-2 hero-title text-capitalize ">10% of on you first  <br /> purchae</h1>   
          </Col>
          <Col sm={12} md={5} className=" px-5 text-start ">
                 <h5 className="text-capitalize  hero-title ">Lorem ipsum dolor sit amet.</h5>
                 <p className="text-secondary-emphasis fw-lighter fs-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus tempora quas fugit quibusdam earum, saepe atque alias sit neque!</p>
                 <div className="d-flex my-2">
                 <input type="email" placeholder="subscribes by ur email" className="form-control border-none" id="exampleInputPassword1"/>
                 <button className=" btn btn-dark  text-capitalize  fw-bold text-capitalize border-none p-1  px-2 ">
                           send
                        
                  </button>
                 </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
