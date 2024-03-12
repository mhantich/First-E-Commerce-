import React, { useMemo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Arrive() {
  const {Product,error} = useSelector((state) => state.products);

  const desiredBrand = "blush";

  const filteredProducts = useMemo(() => {
    // Filter products by the desired brand and limit to 3 items
    return Product?.filter(
      (product) => product.product_type === desiredBrand
    ).slice(4, 10);
  }, [Product, desiredBrand]);
  
  return (
    <div className=" py-5">
      <Container>
        <div className="text-center p-5">
          <h1 className=" fs-0 hero-title ">our arrivals</h1>
          <p className="text-secondary-emphasis fw-lighter fs-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            odio excepturi fugiat ad autem incidunt, <br /> dolorem quod dolorum
            quasi quibusdam, praesentium consectetur repudiandae temporibus
            optio <br /> neque dolore aperiam itaque. Odio.{" "}
          </p>
        </div>

        <Row className="justify-content-center py-2 ">
          <Col className=" d-flex justify-content-center py-2" md={4}>
            <img
              src="./beaity.jpg"
              alt=""
              style={{ objectFit: "cover", height: "500px", width: "100%" }}
              loading="lazy"
              className="arriveImg"
            />
          </Col>
          <Col md={6}>
          { error === true ?  <div className="d-flex container justify-content-center"><img src="back404.gif" alt=""  /> </div>   :  <Row className="py-3">
              {filteredProducts &&
                filteredProducts.map((product, index) => (
                  <Col key={index} sm={12} md={4} className="">
                    <Card className="w-100 m-1 p-2 border-0 text-center  ">
                      <Card.Img
                        className="border-0 w-50 h-50  "
                        src={product.api_featured_image}
                        alt={product.name}
                        loading="lazy"
                        style={{ margin: "0 auto" }}
                      />
                      <Card.Body>
                        <Card.Text
                          className="hero-title text-s fs-7 my-2"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {product.name}
                        </Card.Text>
                        <Card.Text className="fs-7">{product.brand}</Card.Text>
                      </Card.Body>
                      <Link
                        className="text-decoration-none fw-bold text-capitalize"
                        to={`prodact/${product.id}`}
                      >
                        <button className="btn-custmer hover-text mx-auto gap-2 hover-text p-1 d-flex justify-content-between fs-7 fw-bold text-capitalize px-2">
                          <span className="   ">add to cart</span>
                          <span className="">${product.price}</span>
                        </button>
                      </Link>
                    </Card>
                  </Col>
                ))}
            </Row>
}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Arrive;
