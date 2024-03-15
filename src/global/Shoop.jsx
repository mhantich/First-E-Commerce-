import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterList from "../components/FilterList";
import ProdactList from "../components/ProdactList";
import { useSelector } from "react-redux";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import MobileFilter from "../components/MobileFilter";


function Shoop() {
  const Products = useSelector((state) => state.products.Product);
  const pageSize = 30; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setselectedPrice] = useState('');
  const [selectedbrands, setSelectedBrnds] = useState('');
  const [ShowFilter, setShowFilter] = useState(false);

  const [query, setQuery] = useState("");
  // Calculate start and end indices based on current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const totalPages = Math.ceil(Products.length / pageSize);
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = Products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleChangeprice = (event) => {
    setselectedPrice(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrnds(event.target.value);
  };

  function filtereddata(
    data,
    selectedPrice,
    selectedCategory,
    selectedbrands,
    query
  ) {
    let filteredProducts = data;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(({ price }) => {
        if (selectedPrice === "5") {
          return price >= 0 && price <= +selectedPrice;
        } else {
          return price >= +selectedPrice && price <= +selectedPrice + 5;
        }
      });
    }

    if (selectedCategory) {
     
      filteredProducts = filteredProducts.filter(
        ({ product_type }) => product_type === selectedCategory
      );
    }
    if (selectedbrands) {
     
      filteredProducts = filteredProducts.filter(
        ({ brand }) => brand === selectedbrands
      );
    }

    return filteredProducts;
  }

  const handleRestALL = () => {
    setSelectedCategory('');
    setselectedPrice('');
    setSelectedBrnds('');
    setQuery("");
  };
  const reslut = filtereddata(
    Products,
    selectedPrice,
    selectedCategory,
    selectedbrands,
    query
  );
  const handleFilterbtn = ()=>{
    setShowFilter(true)
  }
  const handleFilterbtnhide = ()=>{
    setShowFilter(false)
  }
  const paginatedProducts = reslut.slice(startIndex, endIndex);

  return (
    <Container>
      <h1 className="hero-title text-capitalize text-center mt-3">our Shoop</h1>
      <Row
        className="d-flex
      pt-3
      "
      >


        <div className="w-100  d-flex hidden-none justify-content-end">
          <button onClick={handleFilterbtn} style={{display:'none'}} className=" show-filter btn btn-outline-dark rounded">
                 < IoFilter className="fs-6  " />
          </button>
          <button
            onClick={handleRestALL}
            className="btn hidden-none btn-dark w-25 text-capitalize"
          >
            Reset all
          </button>
        </div>
        <Col className="sticky hidden-none " xs={2}>
          <div className="">
            <FilterList
              handleChange={handleChange}
              handleChangeprice={handleChangeprice}
              selectedPrice={selectedPrice}
              selectedCategory={selectedCategory}
            />
          </div>
        </Col>

        <Col>
          <ProdactList
            Products={paginatedProducts}
            query={query}
            handleInputChange={handleInputChange}
            handleBrandChange={handleBrandChange}
            selectedbrands={selectedbrands}
          />
          <div className="d-flex mt-3  justify-content-between">
            <button
              className="btn rounded btn-outline-dark"
              onClick={handlePrevPage}
              disabled={currentPage === 1 }
            >
              <IoMdArrowBack />
            </button>
            <button
              className="btn btn-outline-dark rounded"
              onClick={handleNextPage}
              disabled={currentPage === totalPages ||  paginatedProducts.length < pageSize}
            >
              <GrLinkNext />
            </button>
          </div>
        </Col>
      </Row>
      {ShowFilter && <MobileFilter  handleChange={handleChange}
              handleChangeprice={handleChangeprice}
              selectedPrice={selectedPrice}
              selectedCategory={selectedCategory} handleFilterbtnhide ={handleFilterbtnhide }handleRestALL={handleRestALL}/> }
    </Container>
  );
}

export default Shoop;
