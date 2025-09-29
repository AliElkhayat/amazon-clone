import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct"
import { getBasketTotal } from "../../context/AppReducer"
import { useAuth } from "../../context/GlobalState"
import { NumericFormat as CurrencyFormat } from "react-number-format";

import "./Payment.css"
import { Link } from "react-router-dom";

const Payment = () => {
    const { user, basket } = useAuth()
 
    return (
        <>
            <div className="payment">
                <div className="payment-container">
                    <h1>
                        Checkout (<Link to="/checkout">{basket.reduce((total, item) => total + (item.quantity || 1), 0)} items</Link>)
                    </h1>
                    {/* Delivery Address */}
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment-address">
                            <p>{user?.email}</p>
                            <p>Alexandria, Egypt</p>
                        </div>
                    </div>
                    {/* Review Items*/}
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className="payment-items">
                            {basket.map((item) => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                                    quantity={item.quantity}

                                />
                            ))}
                        </div>
                    </div>
                    {/* Payment method*/}
                    <div className="payment-section">
                        <h3>Payment Method</h3>
                        <div className="payment-details">
                            <form >
                                    
                                <div className="payment-priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => <h3>Order Total : {value}</h3>}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button >
                                        <span> Buy Now</span>
                                    </button>
                                </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
