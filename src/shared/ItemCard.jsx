import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCount, increaseCount } from '../state/Card'

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
                      src={item.payload.product.image_link}
                      alt=""
                    />
                  </div>

                  <div className="px-2 d-flex flex-column flex-grow-1">
                    <p className="fw-bold text-capitalize">{item.payload.product.name} - {item.payload.product.price}$ </p>
                    <p className="fw-bold text-capitalize">{item.payload.product.brand}</p>
                  

                            <div className="d-flex gap-2 flex-wrap  py-2">
                            {item.payload.color.map((item, index) => (
                              <button
                                style={{ backgroundColor: `${item.hex_value}` }}
                                className=" btn p-2"
                                key={index}
                              ></button>
                            ))}
                            </div>

                      
                    </div>


                  <div className=" px-2 d-flex flex-column  justify-content-center align-items-center gap-2">
                    {/* <CiTrash /> */}

                    <div className=" border d-flex gap-2 align-items-center ">
                      <button
                    onClick={() => dispatch(decreaseCount({id:item.payload.product.id})) }
                        className="py-1 px-2 btn  hover-text"
                      >
                        -
                      </button>
                      <p className="m-1 fs-7 fw-bold">{item.payload.quantity}</p>
                      <button
                        onClick={() => dispatch(increaseCount({id:item.payload.product.id})) }
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