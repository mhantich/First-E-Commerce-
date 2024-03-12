import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Slider from "react-slick";
import { MdOutlineStarRate } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, isAddAnamation } from "../state/Card";
function Details() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const sliderRef = useRef(null);

  const sitting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const [Number, setNumber] = useState(1);

  const Products = useSelector((state) => state.products.Product);

  const [color, setsetColor] = useState([]);
  const handleColor = (item) => {
    if (color.includes(item)) {
      setsetColor(color);
    } else {
      setsetColor([...color, item]);
    }
  };

  const singleProdact = Products.filter((item) => item.id === +id);
 

  const productSimilar = Products.filter(
    (item) => item.product_type === singleProdact[0]?.product_type
  );


  const dispatch = useDispatch();

  const handleaDD = () => {
    dispatch(
      addToCart({
        id: +id,
        product: singleProdact[0],
        quantity: Number,
        color: color,
      })
    );
    dispatch(isAddAnamation({}));
    setTimeout(() => {
      dispatch(isAddAnamation({}));
    }, 3000);
  };

  return (
    <div>
      {singleProdact.length === 0 ? (
        "no prodact found"
      ) : (
        <div>
          {" "}
          <Container className="py-5">
            <Row className="justify-content-center py-2  gap-2 ">
              <Col
                className="  d-flex justify-content-center align-items-center mb-2 "
                md={4}
              >
                <img
                  src={singleProdact[0]?.api_featured_image}
                  alt=""
                  className="prodact-imgsing"
                  style={{ objectFit: "cover", height: "320px" }}
                  loading="lazy"
                />
              </Col>
              <Col md={6} className="text-capitalize d-flex flex-column gap-1">
                <h2 className="hero-title ">{singleProdact[0]?.name} </h2>
                <div className="d-flex justify-content-start align-items-center ">
                  <MdOutlineStarRate />
                  {singleProdact[0]?.rating == null && 5.6}
                </div>

                <p>
                  {" "}
                  <span className=" fw-bold"> brand : </span>
                  {singleProdact[0]?.brand}
                </p>
                <p className="">
                  <span className=" fw-bold"> type : </span>

                  {singleProdact[0]?.product_type}
                </p>
                <div className="d-flex gap-1">
                  <span className=" fw-bold"> Tags : </span>
                  {singleProdact[0]?.tag_list.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                <p className="text-secondary-emphasis fw-lighter fs-6">
                  <span className=" fw-bold"> description : </span>
                  {singleProdact[0]?.description.substring(0, 200)}
                </p>
                <div className=" gap-2  py-2">
                  <p className="fw-bold mb-2" style={{ display: "block" }}>
                    colors :{" "}
                  </p>
                  <div className="d-flex gap-1 flex-wrap justify-content-start algin-items-center">

                    {singleProdact[0]?.product_colors.map((item, index) => (
                        <button
                          onClick={() => {
                            handleColor(item.hex_value);
                          }}
                          style={{ backgroundColor: `${item.hex_value}` }}
                          className=" py-3  btn px-6"
                          key={index}
                        ></button>
                        ))}
                  
                        </div>
                </div>

                <div className="d-flex w-100  justify-content-around ">
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      onClick={() => setNumber(Math.max(Number - 1, 0))}
                      className="py-2 px-3 text-black text-black-s-hover btn-custmer hover-text"
                    >
                      -
                    </button>
                    <p className="m-1 fw-bold mx-2">{Number}</p>
                    <button
                      onClick={() => setNumber(Number + 1)}
                      className="py-2 px-3 text-black-s-hover text-black btn-custmer hover-text"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className=" btn-custmer hover-text text-black p-2 flex-1 w-50 gap-2 d-flex justify-content-center  px-2 "
                    style={{ display: "block" }}
                    onClick={handleaDD}
                  >
                    <span className="fw-bold text-black-s-hover text-black text-capitalize ">
                      add to cart
                    </span>
                    <span className="fw-bold text-black text-black-s-hover text-capitalize ">
                      {singleProdact[0]?.price}$
                    </span>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5 py-5">
            <h3 className="  hero-title text-capitalize text-center py-2 ">
              you may also like
            </h3>
            <Row className="justify-content-center py-2 ">
              <Slider {...sitting} ref={sliderRef}>
                {productSimilar?.map((item, index) => (
                  <Card
                    key={index}
                    className="border-0 mx-auto"
                    style={{ width: "18rem", margin: "5px auto" }}
                  >
                    <div className="col-12 d-flex justify-content-center px-4 mb-2 h-100 ">
                      <Card.Img
                        style={{ objectFit: "contain", height: "300px" }}
                        src={item.api_featured_image}
                        loading="lazy"
                        alt=""
                      />
                    </div>

                    <Card.Body>
                      <Card.Text className="hero-title fs-6 text-center text-capitalize">
                        {item.name}
                      </Card.Text>
                    </Card.Body>
                    <Link
                      to={`/prodact/${item.id}`}
                      className="text-decoration-none"
                    >
                      <button
                        className=" btn-custmer hover-text p-1 fw-bold  text-capitalize  px-2 "
                        style={{ display: "block", margin: "0 auto" }}
                      >
                        <span>
                          shop now
                        </span>
                      </button>
                    </Link>
                  </Card>
                ))}
              </Slider>
            </Row>
          </Container>{" "}
        </div>
      )}
    </div>
  );
}

export default Details;
