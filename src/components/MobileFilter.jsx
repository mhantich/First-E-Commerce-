import React from "react";
import { IoMdClose } from "react-icons/io";

function MobileFilter({
  handleChange,
  handleChangeprice,
  selectedPrice,
  selectedCategory,
  handleRestALL,
  handleFilterbtnhide
}) {
  const typeProducts = [
    {
      name: "lip liner",
      type: "lip_liner",
    },
    {
      name: "lipstick",
      type: "lipstick",
    },
    {
      name: "foundation",
      type: "foundation",
    },
    {
      name: "eyeliner",
      type: "eyeliner",
    },
    {
      name: "eyeshadow",
      type: "eyeshadow",
    },
    {
      name: "blush",
      type: "blush",
    },
    {
      name: "bronzer",
      type: "bronzer",
    },
    {
      name: "mascara",
      type: "mascara",
    },
    {
      name: "eyebrow",
      type: "eyebrow",
    },
    {
      name: "nail polish",
      type: "nail_polish",
    },
  ];
  
  const price = [5, 10, 15, 20, 30, 40, 50, 60];

  return (
    <div className="show" style={{ display: "none" }}>
      <div className="container d-flex  flex-column  X py-3 position-fixedd w-100">
        <div>
          <div className="w-100 d-flex justify-content-end">
            <button onClick={handleFilterbtnhide} className="btn">
              <IoMdClose className="fs-4" />
            </button>
          </div>
        </div>

        <p className="text-capitalize  fs-6 fw-bold   mb-4">
          Filter by types :
        </p>
        <div
          className="d-flex  justify-content-Evenly flex-column  "
        >
          <form>
            {typeProducts.map((item, index) => (
              <div key={index} className="form-check  gap-5 d-flex">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={handleChange}
                  checked={selectedCategory === item.type}
                  name="color"
                  value={item.type}
                />
                <label className="form-check-label fw-bold text-capitalize  fs-7">
                  {item.name}
                </label>
              </div>
            ))}
        
          <div className="mt-2"></div>
          <p className="text-capitalize fs-6 fw-bold  mb-4">Filter by price:</p>
    
            {price.map((item, index) => (
              <div key={index} className="form-check d-flex gap-5">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={handleChangeprice}
                  name="price"
                  checked={+selectedPrice === +item}
                  value={item}
                />
                <label className="form-check-label fw-bold text-capitalize fs-7">
                  {" "}
                  min{`${item === 5 ? 0 : item}`}$- max {item + 5}
                </label>
              </div>
            ))}
          </form>
          <button
            onClick={handleRestALL}
            className="btn align-self-end btn-dark w-100 mt-3 text-capitalize"
          >
            Reset all
          </button>
        </div>
      </div>
    </div>
  );
}
export default MobileFilter;
