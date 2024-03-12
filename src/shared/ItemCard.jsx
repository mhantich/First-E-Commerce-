import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCount, increaseCount, removeFromCart } from '../state/Card'
import { FaRegTrashCan } from "react-icons/fa6";

function ItemCard({Cart}) {
    const dispatch =useDispatch()
 
  
  return (

    <div>
        {Cart.map((item,index)=>(
            <div className="d-flex border justify-content-between ">
                  <div
                    style={{ width: "120px", height: "120px" }}
                    className="d-flex px-2 flex-shrink-1 p-2 rounded-1"
                  >
                    <img
                      style={{ objectFit: "cover" }}
                      className="w-100  h-100"
                      src={item.product.api_featured_image}
                      alt=""
                    />
                  </div>

                  <div className="px-2 d-flex flex-column flex-grow-1">
                    <p className="fw-bold text-capitalize">{item.product.name} - {item.product.price}$ </p>
                    <p className="fw-bold text-capitalize">{item.product.brand}</p>
                  

                            <div className="d-flex gap-2 flex-wrap  py-2">
                            {item.color.map((item, index) => (
                              <button
                                style={{ backgroundColor: `${item}` }}
                                className=" btn p-2"
                                key={index}
                              ></button>
                            ))}
                            </div>

                      
                    </div>


                  <div className=" px-2 d-flex flex-column  justify-content-center align-items-center gap-2">
                  < FaRegTrashCan                     onClick={() => dispatch(removeFromCart({id:item.product.id})) }
  /> 

                    <div className=" border d-flex gap-2 align-items-center ">
                      <button
                    onClick={() => dispatch(decreaseCount({id:item.product.id})) }
                        className="py-1 px-2 btn  hover-text"
                      >
                        -
                      </button>
                      <p className="m-1 fs-7 fw-bold">{item.quantity}</p>
                      <button
                        onClick={() => dispatch(increaseCount({id:item.product.id})) }
                        className="py-1 px-2 btn hover-text"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
        ))}
        
    </div>
  )
}

export default ItemCard