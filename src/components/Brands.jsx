import React, { useRef } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Brands() {

 
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
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const typeProducts = [
    {
      name: "lip liner",
      type: "lip_liner",
      image:
        "https://www.glamraiderbeauty.com.au/cdn/shop/files/sweet-pea-lip-liner-peaches-cream-1_429ad51d-fa26-459c-bd92-20322b6af7fd_800x.jpg?v=1682656299",
    },
    {
      name: "lipstick",
      type: "lipstick",
      image:
        "https://brandsatdoor.com/cdn/shop/products/p2_4_1200x1200.jpg?v=1628496819",
    },
    {
      name: "foundation",
      type: "foundation",
      image:
        "https://coffeeandmakeup.com/wp-content/uploads/2023/03/revlon-illuminance-skin-caring-foundation-before-after-close-up-side.jpg",
    },
    {
      name: "eyeliner",
      type: "eyeliner",
      image:
        "https://r2.artdeco.com/media/product/000000000000110153/media_application_person.webp",
    },
    {
      name: "eyeshadow",
      type: "eyeshadow",
      image:
        "https://www.bigbasket.com/media/uploads/p/xl/40259251-5_1-lakme-absolute-explore-liquid-eye-shadow-cashmere-love-diamond-black.jpg",
    },
    {
      name: "blush",
      type: "blush",
      image:
        "https://images.ctfassets.net/wlke2cbybljx/7jZKKCsIjMVDiSJObsd5IA/a360301dbd040bfe49cba24cad5d832a/HOLLYWOOD-BLUSH-GLOW-GLIDE-FAIR-TO-MED-MODEL-01.png?w=500&h=500&fit=fill&fm=jpg&bg=",
    },
    {
      name: "bronzer",
      type: "bronzer",
      image:
        "https://www.vieve.co.uk/cdn/shop/files/vieve-modern-radiance-cream-bronzer-medium-3.jpg?v=1688580366&width=1946",
    },
    {
      name: "mascara",
      type: "mascara",
      image:
        "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2F42119%2F42119_1.png%3Fversion%3D1688477402&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30",
    },
    {
      name: "eyebrow",
      type: "eyebrow",
      image:
        "https://nudebynature.com.au/cdn/shop/products/PRODUCT_PAGE_-_MASACARA_-_BLONDE.jpg?v=1537941071",
    },
    {
      name: "nail polish",
      type: "nail_polish",
      image:
        "https://www.blossombeauty.com/cdn/shop/products/3_2400x.jpg?v=1680747096",
    },
  ];


  return (
    <div className=" py-5">
      <Container>
        <div className="text-center p-5">
          <h1 className=" fs-0 hero-title ">shop our best collations </h1>
          <p className="text-secondary-emphasis fw-lighter fs-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            odio excepturi fugiat ad autem incidunt, <br /> dolorem quod dolorum
            quasi quibusdam, praesentium consectetur repudiandae temporibus
            optio <br /> neque dolore aperiam itaque. Odio.{" "}
          </p>
        </div>

        <Slider {...sitting} ref={sliderRef}>
          {typeProducts.map((item, index) => (
            <Card
              key={index}
              className="border-0 mx-auto"
              style={{ width: "18rem", margin: "5px auto" }}
            >
              <div className="col-12 d-flex justify-content-center px-4 mb-2 h-100 ">
                <Card.Img
                  style={{ objectFit: "contain", height: "300px" }}
                  src={item.image}
                  loading="lazy"

                  alt=""
                />
              </div>

              <Card.Body>
                <Card.Text className="hero-title fs-2 text-center text-capitalize">
                  {item.name}
                </Card.Text>
              </Card.Body>
              <button
                className=" btn-custmer hover-text p-1  px-2 "
                style={{ display: "block", margin: "0 auto" }}
              >
                <span className="fw-bold text-capitalize  ">shop now</span>
              </button>
            </Card>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Brands;
