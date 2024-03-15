import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import NoResult from "./NoResult";

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

function ProdactList({
  Products,
  handleInputChange,
  query,
  handleBrandChange,
  selectedbrands,
}) {
  const brand = [
    "colourpop",
    "boosh",
    "deciem",
    "zorah biocosmetiques",
    "w3llpeople",
    "sally b's skin yummies",
    "rejuva minerals",
    "penny lane organics",
    "nudus",
    "marienatie",
    "maia's mineral galaxy",
  ];

  return (
    <div className="p-2  ">
      <div className="  form-wrapper  d-flex justify-content-between py-3">
        <div className=" hidden-none  align-items-center gap-2">
          <select
            value={selectedbrands} // Set the selected value to the state variable
            onChange={handleBrandChange}
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option defaultValue> Select Brands Here</option>
            {brand.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className=" bg-white d-flex border justify-content-between align-items-center input-conainter px-2 py-2 rounded-3">
          <input
            type="text"
            placeholder="Search..."
            className=" search-inputs"
            onChange={handleInputChange}
            value={query}
          />
          <IoSearchSharp />
        </div>
      </div>

      <Row className="gap-2 justify-content-center ">
        {Products.length === 0 ? (
          <NoResult />
        ) : (
          Products.map((product, index) => (
            <Col
              style={{ overflow: "hidden" }}
              sm={12}
              md={5}
              lg={3}
              key={index}
            >
              <Card className="border-0 mx-auto" style={{ width: "13rem" }}>
                <div className="mb-1" style={{ height: "200px" }}>
                  <Card.Img
                    className="border-0 "
                    style={{ height: "100%", width: "100%" }}
                    src={product.api_featured_image}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>

                <Card.Body className="p-0">
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
                  <button className=" btn-custmer w-100 mx-auto hover-text   text-capitalize  gap-2  py-1 px-2 d-flex justify-content-around align-items-center ">
                    <span className=" fs-7  ">add to bag</span>
                    <span className=" fs-6 ">${product.price}</span>
                  </button>
                </Link>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default ProdactList;
