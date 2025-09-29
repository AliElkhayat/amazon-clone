import toast from "react-hot-toast";
import starIcon from "../../assets/images/icons/star.png";
import { useAuth } from "../../context/GlobalState";
import "./CheckoutProduct.css";
import { useLocation } from "react-router-dom";

const CheckoutProduct = ({ id, image, title, price, rating, quantity }) => {
  const location = useLocation();
  const ispayment = location.pathname.includes("payment");

  const { dispatch } = useAuth();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title
    });
    toast.success("Successfully removed from Shopping Cart");
  };

  const increaseQty = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      id: id,
    });
  };

  const decreaseQty = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      id: id,
    });
  };

  return (
    <>
      <div className="checkoutProduct">
        <img className="checkoutProduct-image" src={image} />
        <div className="checkoutProduct-info">
          <p className="checkoutProduct-title">{title}</p>
          <p className="checkoutProduct-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>
                  <img src={starIcon} />
                </p>
              ))}
          </div>

          {/*quantity buttons  */}
          
          <div className="checkoutProduct-quantity">
            {!ispayment && <button onClick={decreaseQty}>-</button>}
            <span> Q = {quantity}</span>
            {!ispayment && <button onClick={increaseQty}>+</button>}

          </div>
          {!ispayment && <button onClick={removeFromBasket}>Remove from Basket</button>}

        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
