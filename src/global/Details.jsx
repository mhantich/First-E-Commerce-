import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../state/Card";
function Details() {
  const location = useLocation();
  const { id } = useParams();
  const productName = location.pathname;
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
   const handleColor=(item)=>{
   if(color.includes(item)){
   
      setsetColor(color)
   }else{
     setsetColor([...color,item])}
   }



  const singleProdact = Products.filter((item) => item.id === +id);

  const productSimilar = Products.filter(
    (item) => item.product_type === singleProdact[0]?.product_type
  );
// const [prodact, setProdact] = useState([])

const dispatch = useDispatch();
  return (
    
   <div>
    {singleProdact.length < 0 ? 'loainf' : <div> <Container className="py-5">
        <Row className="justify-content-center py-2  ">
          <Col className=" d-flex justify-content-center " md={4}>
            <img
              src={singleProdact[0]?.image_link}
              alt=""
              style={{ objectFit: "cover", height: "500px", width: "100%" }}
              loading="lazy"
            />
          </Col>
          <Col md={6} className="text-capitalize d-flex flex-column gap-1">
            <h6>{productName}</h6>
            <h2 className="hero-title ">{singleProdact[0]?.name} </h2>
            {singleProdact[0]?.rating == null && 5.6}

            <p className="fw-bold">{singleProdact[0]?.brand}</p>
            <p className="fw-bold">{singleProdact[0]?.product_type}</p>
            <div className="d-flex gap-1 text-danger">
            {singleProdact[0]?.tag_list.map((item,index)=>(
                <span key={index}>{item}</span>
               ))}
            </div>
              
            <p className="text-secondary-emphasis fw-lighter fs-6">
                {singleProdact[0]?.description}
            </p>
            <div className="d-flex gap-2  py-2">
              {singleProdact[0]?.product_colors.map((item, index) => (
                <button
                onClick={()=>{
                  handleColor(item)
                }}
                  style={{ backgroundColor: `${item.hex_value}` }}
                  className="w-25  btn p-2"
                  key={index}
                ></button>
              ))}
              </div>
        
            <div className="d-flex w-100  justify-content-between ">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  onClick={() => setNumber(Math.max(Number - 1, 0))}
                  className="py-2 px-3 btn-custmer hover-text"
                >
                  -
                </button>
                <p className="m-1 fw-bold">{Number}</p>
                <button
                  onClick={() => setNumber(Number + 1)}
                  className="py-2 px-3 btn-custmer hover-text"
                >
                  +
                </button>
              </div>
              <button
                className=" btn-custmer hover-text p-2 flex-1 w-75 gap-2 d-flex justify-content-center  px-2 "
                style={{ display: "block" }}
                onClick={() => dispatch(addToCart({payload: { product: singleProdact[0], quantity: Number ,color:color } }))}
                >
                <span className="fw-bold text-capitalize ">add to cart</span>
                <span className="fw-bold text-capitalize ">{singleProdact[0]?.price}$</span>
                
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container className="mt-5 py-5">
        <h3 className="  hero-title text-capitalize text-center py-2 ">you may also like</h3>
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
                    src={item.image_link}
                    loading="lazy"
                    alt=""
                  />
                </div>

                <Card.Body>
                  <Card.Text className="hero-title fs-6 text-center text-capitalize">
                    {item.name}
                  </Card.Text>
                </Card.Body>
                <Link to={`/prodact/${item.id}`}className="text-decoration-none" >
                <button
                  className=" btn-custmer hover-text p-1  px-2 "
                  style={{ display: "block", margin: "0 auto" }}
                >
                  <span className="fw-bold text-capitalize ">shop now</span>
                </button>
                </Link>
            
              </Card>
            ))}
          </Slider>
        </Row>
      </Container>     </div>}
   

    </div>
    
  );
}

export default Details;
