import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterList from "../components/FilterList";
import ProdactList from "../components/ProdactList";
import { useSelector } from "react-redux";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

function Shoop() {
  const Products = useSelector((state) => state.products.Product);
  const pageSize = 15; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end indices based on current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const paginatedProducts = Products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(Products.length / pageSize);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("jee");
  }, [currentPage]);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container>
      <h1 className="hero-title text-center mt-3">our Shoop</h1>
      <Row className="d-flex
      pt-3
      ">
        <Col>
          <ProdactList Products={paginatedProducts} />
          <div className="d-flex mt-3 justify-content-between">
            <button
              className="btn rounded"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <IoMdArrowBack />
            </button>
            <button
              className="btn rounded"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <GrLinkNext />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Shoop;
