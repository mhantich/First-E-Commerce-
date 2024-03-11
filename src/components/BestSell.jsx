import React, { useMemo } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function BestSell() {
  const { Product, error } = useSelector((state) => state.products);

  // Define the brand you want to filter by
  const desiredBrand = "l'oreal";

  const filteredProducts = useMemo(() => {
    // Filter products by the desired brand and limit to 3 items
    return Product?.filter((product) => product.brand === desiredBrand).slice(
      3,
      6
    );
  }, [Product, desiredBrand]);

  return (
    <div className=" py-5">
      <Container>
        <div className="text-center p-5">
          <h1 className=" fs-0 hero-title ">our best sell</h1>
          <p className="text-secondary-emphasis fw-lighter fs-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            odio excepturi fugiat ad autem incidunt, <br /> dolorem quod dolorum
            quasi quibusdam, praesentium consectetur repudiandae temporibus
            optio <br /> neque dolore aperiam itaque. Odio.{" "}
          </p>
        </div>

        {error === true ? (
          <div className="d-flex container justify-content-center">
            <img src="back404.gif" alt="" />{" "}
          </div>
        ) : (
          <Row className="justify-content-center gap-1">
            {filteredProducts &&
              filteredProducts.map((product, index) => (
                <Col sm={12} md={3} key={index}>
                  <Card
                    className="border-0 mx-auto  "
                    style={{ width: "18rem", margin: "5px auto" }}
                  >
                    <div style={{height:'220px'}}>
                    <Card.Img
                      className="border-0"
                      style={{height:'100%',width:'100%'}}
                      src={product.api_featured_image}
                      alt={product.name}
                      loading="lazy"
                    />
                    </div>
                  

                    <Card.Body style={{minHeight:'95px'}}>

                      <Card.Text   className="hero-title text-s  ">
                        {product.name}
                      </Card.Text>
                      <Card.Text className=" fs-7">{product.brand}</Card.Text>
                    </Card.Body>
                    <Link
                      className="text-decoration-none fw-bold text-capitalize"
                      to={`prodact/${product.id}`}
                    >
                      <button className=" btn-custmer mx-auto   text-capitalize hover-text gap-2  py-1 px-2 d-flex justify-content-between px-2 ">
                        <span className="fw-bold fs-7">add to cart</span>
                        <span className="fw-bold fs-7">${product.price}</span>
                      </button>
                    </Link>
                  </Card>
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default BestSell;
