
import toast from "react-hot-toast";
import starIcon from "../../assets/images/icons/star.png";
import { useAuth } from "../../context/GlobalState";
import "./Product.css"
const Product = ({ title, price, image, rating, id }) => {
  const { dispatch, basket } = useAuth()

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    console.log(basket)
    toast.success(" Added to basket")
    console.log(id)
  }
  return (
    <>
      <div className="product">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={starIcon} />
              </p>
            ))}
        </div>
        <img src={image} alt="product-img" />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>    </>
  )
}

export default Product
