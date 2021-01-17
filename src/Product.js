import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        rating: props.rating,
        price: props.price,
      },
    });
  };

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
      <button onClick={addToBasket} className="product__button">
        Add To Cart
      </button>
    </div>
  );
}
export default Product;
