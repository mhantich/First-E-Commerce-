import React from "react";

function FilterList({ handleChange, handleChangeprice ,selectedPrice,selectedCategory}) {
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

  const price = [5, 10, 15, 20, 30, 40,50,60];

  return (
    <div className="container">
      <p className="text-capitalize fs-6 fw-bold   mb-4">
        Filter by types
      </p>
      <form>
 
        {typeProducts.map((item, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              onChange={handleChange}
              checked={selectedCategory === item.type}
              name="color"
              value={item.type}
            />
            <label className="form-check-label fw-bold text-capitalize fs-7">{item.name}</label>
          </div>
        ))}
      </form>
      <div className="mt-5"></div>
      <p className="text-capitalize fs-6 fw-bold  mb-4">
        Filter by price
      </p>
      <form>

        {price.map((item, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              onChange={handleChangeprice}
              name="price"
              checked={+selectedPrice === +item}
              value={item}
            />
            <label className="form-check-label fw-bold text-capitalize fs-7">  min{`${item===5 ? 0 : item}`}$- max {item+5}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default FilterList;
