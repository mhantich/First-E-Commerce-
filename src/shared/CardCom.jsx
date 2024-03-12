import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { setIsCartOpen } from "../state/Card";
import ItemCard from "./ItemCard";

function CardCom() {
  const cartitem = useSelector((state) => state.Card.cart);
  const total = cartitem.reduce((acc, item) => {
    const itemPrice = parseFloat(item.product.price);
    const itemQuantity = parseInt(item.quantity);

        return acc + (itemPrice * itemQuantity);
    
    
}, 0);
  const  dispatch = useDispatch()
  return (
    <div className=" bg-dark-2 fixeds z-index-2 d-flex justify-content-end">
      <Row className="w-100 p-0 m-0 ">
        <Col sm={12} md={5} className="p-0 m-0">
          <div className="px-3 w-100 bg-white h-100 ">
            <div className="w-100 d-flex justify-content-end">     <button onClick={()=>{dispatch(setIsCartOpen({}))}} className="btn"><IoMdClose className="fs-4"/></button></div>

            <h1 className="text-center text-capitalize hero-title">card</h1>
            { cartitem.length === 0 ? <h2 className="text-center hero-title">you cart is empty </h2> :
            <div>
            <div className="flex-1 gap-3 d-flex flex-column align-items-centerr div-caard mb-2 ">
                 <ItemCard Cart={cartitem}/>
            </div>
            <button className=" fw-bold  hover-text text-capitalize py-2 btn-custmer  w-100 hover-text mb-2">
              checkout  {total.toFixed(2)}$ 
            </button>
            </div>
        }
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CardCom;
