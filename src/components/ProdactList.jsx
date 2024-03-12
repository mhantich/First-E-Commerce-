import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductColors = ({ colors }) => (
  <div className=" custim-height ">
    <div className="  d-flex gap-1 flex-wrap justify-content-start algin-items-center">
      {colors.map((item, index) => (
        <button
          style={{ backgroundColor: `${item.hex_value}` }}
          className="p-1 rounded"
          key={index}
        ></button>
      ))}
    </div>
  </div>
);

function ProdactList({ Products }) {
  return (
    <div className="p-2">
      <Row className="gap-5 justify-content-center ">
        {Products &&
          Products.map((product, index) => (
            <Col
              style={{ overflow: "hidden" }}
              sm={12}
              md={4}
              lg={3}
              key={index}
            >
              <Card className="border-0 mx-auto" style={{ width: "13rem" }}>
                <div style={{ height: "200px" }}>
                  <Card.Img
                    className="border-0"
                    style={{ height: "100%", width: "100%" }}
                    src={product.api_featured_image}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>

                <Card.Body style={{}}>
                  <Card.Text className="hero-title text-s  ">
                    {product.name}
                  </Card.Text>
                  <Card.Text className=" fs-7">{product.brand}</Card.Text>
                </Card.Body>
                <div className="d-flex px-1 gap-1 flex-wrap justify-content-start align-items-center">
                  <ProductColors colors={product.product_colors} />
                </div>

                <Link
                  className="text-decoration-none fw-bold text-capitalize text-black "
                  to={`/prodact/${product.id}`}
                >
                  <button className=" btn-custmer mx-auto hover-text   text-capitalize  gap-2  py-1 px-2 d-flex justify-content-between px-2 ">
                    <span className=" fs-7  ">add to bag</span>
                    <span className=" fs-7 ">${product.price}</span>
                  </button>
                </Link>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ProdactList;
