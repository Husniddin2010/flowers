import React from "react";
import Pictures from "../Pictures";
function CardProduct(props) {
  const { product, handleLike, Basket } = props;
  const {
    id,
    image, // "../public/product1.png"
    title,
    desc,
    price,
    count,
    isLiked,
    isBasket,
  } = product;
  // conditional rendering

  return (
    <div
      className="product"
      style={{
        // display: "flex",
        justifyContent: "center",
        margin: "10px",
      }}
    >

        <div  className="buttons">
        <button>
            <img src="../public/bar-chart-2.png" alt="" />
          </button>
          <button onClick={() => handleLike(id)}>
            {/* {
                isLiked ? (
                    <img src="../public/heart-2.png" alt="" />
                ) : (
                    <img src="../public/heart.png" alt="" />
                )
            } */}
            <img src={isLiked ? "../public/heart-2.png" : "../public/heart.png"} alt="" />
          </button>
        </div>
      <div>
        <Pictures/>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
         <div>
        <h2 className="product_title">{title}</h2>
        <p>{desc}</p>
        <p>{count >= 1 ? "v naliche" : "not naliche"}</p>
      </div>
        <div className="buttons">
          <button onClick={() => Basket(product.id)}>
        <img 
          src={product.isInBasket ? "../public/true.png" : "../public/basket.png" } 
          alt="" 
        />
      </button>
        </div>
        <div className="prices">
          <span>{price}₽ </span>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
