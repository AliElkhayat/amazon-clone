import { useAuth } from "../../context/GlobalState"
import checkoutImg from "../../assets/images/checkoutAd.jpg";
import SubTotalItems from "../../components/SubTotalItems/SubTotalItems.jsx";
import"./Checkout.css"
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
const Checkout = () => {
const {user , basket} = useAuth()
  return (
    <>
       <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkoutImg} />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.title}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotalItems />
      </div>
    </div>
    </>
  )
}

export default Checkout
