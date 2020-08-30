import React from "react";
import "./Product.css";
function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>&#9733;</p>
            ))}
        </div>
      </div>

      <img className="product__image" src={props.image} alt="" />
      <button className="product__button">Add To Cart</button>
    </div>
  );
}
export default Product;
