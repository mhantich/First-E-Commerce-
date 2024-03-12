import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
     <Container>
    <div className="text-center my-5 py-5">
      <h1 className=" fs-0 hero-title ">About Us </h1>
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
            src="./about.jpg"
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
    
          <h1 className="fs-3 hero-title">
          About Our 
            <br />
            Company
          </h1>
          <span className="text-secondary-emphasis fw-lighter fs-7 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            quasi
          </span>
          <p className="text-secondary-emphasis fw-lighter fs-7 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            quasi laudantium a deleniti doloremque fugiat aspernatur?
            Adipisci odio molestiae eum, id nesciunt fugiat optio laboriosam
            ducimus atque vitae pariatur assumenda.
            quasi laudantium a deleniti doloremque fugiat aspernatur?
            Adipisci odio molestiae eum, id nesciunt fugiat optio laboriosam
            ducimus atque vitae pariatur assumenda.
            quasi laudantium a deleniti doloremque fugiat aspernatur?
            Adipisci odio molestiae eum, id nesciunt fugiat optio laboriosam
            ducimus atque vitae pariatur assumenda.
            quasi laudantium a deleniti doloremque fugiat aspernatur?
            Adipisci odio molestiae eum, id nesciunt fugiat optio laboriosam
            ducimus atque vitae pariatur assumenda.
          </p>

        </div>
      </Col>
    </Row>
    <div className='mb-5 mt-5'></div>

    <Row className="p-2 ">
      <Col className='order-2' xs={12} md={6}>
        <div className="d-flex">
          <img
            className=" hero-banner"
            src="./about2.jpg"
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
          <h1 className="fs-3 hero-title">
            About Our 
            <br />
            Products
          </h1>
          <span className="text-secondary-emphasis fw-lighter fs-7 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            quasi
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          </span>
        
          <p className="text-secondary-emphasis fw-lighter fs-7 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            quasi laudantium a deleniti doloremque fugiat aspernatur?
            Adipisci odio molestiae eum, id nesciunt fugiat optio laboriosam
            ducimus atque vitae pariatur assumenda.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            quasi laudantium a deleniti doloremque fugiat aspernatur?
            Adipisci odio molestiae eum, id nesciunt fugiat optio laboriosam
            ducimus atque vitae pariatur assumenda.
          </p>

        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default About