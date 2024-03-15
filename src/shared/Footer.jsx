import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" container  mt-5  border-top  ">
      <Row>
        <Col sm={12} md={3} className="py-2 px-4 text-center  text-capitalize ">
          <img className="w-25" src="/logo.png" alt="" />
          <p className=" mt-2 fs-7">
            Lorem ipsum dolor sit amet consec tetur adipisicing elit. Minima
            doloribus dicta, corporis suscipit velit asperiores. Blanditiis
            temporibus, doloribus ratione rem et corporis placeat doloremque
            iste optio tenetur, fugit deleniti quasi?
          </p>
          <p className=" mt-2 text-decoration-underline fs-7">
            mohame.mhantich6@gmail.com
          </p>
          <p className=" mt-2 fs-7">+212653446430</p>
        </Col>
        <Col sm={12} md={9}>
          <Row>
            <Col sm={12} md={3} className="text-center">
              <h6 className="text-capitalize hero-title pt-2 mt-2  ">shop</h6>
              <p className="text-capitalize mt-2  fs-7  ">Lorem, ipsum.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum dolor.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum dolor.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum.</p>
            </Col>

            <Col sm={12} md={3} className="text-center">
              <h6 className="text-capitalize hero-title pt-2 mt-2  ">
                support
              </h6>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum dolor.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum dolor.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum.</p>
            </Col>

            <Col sm={12} md={3} className="text-center">
              <h6 className="text-capitalize hero-title pt-2 mt-2  ">
                require
              </h6>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum dolor.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum dolor.</p>
              <p className="text-capitalize mt-2  fs-7 ">Lorem, ipsum.</p>
            </Col>

            <Col sm={12} md={3} className="text-center">
              <h6 className="text-capitalize hero-title pt-2 mt-2  ">
                socail media
              </h6>
              <div className=" mt-3 gap-1 d-flex justify-content-between px-4">
                <FaFacebook />
                <FaInstagram />
                <FaGithub />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
