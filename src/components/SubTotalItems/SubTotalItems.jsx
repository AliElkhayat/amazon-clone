import { NumericFormat as CurrencyFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/GlobalState";
import { getBasketTotal } from "../../context/AppReducer.js";
import "./SubTotalItems.css";

const SubTotalItems = () => {
  const { basket } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <div className="subtotal">

        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
Subtotal (
    {basket.reduce((total, item) => total + (item.quantity || 1), 0)} items
  ): <strong>{value}</strong>              </p>
              <small className="subtotal__gift">
                <input type="checkbox" id="gift" name="gift" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>

      </div>

    </>
  )
}

export default SubTotalItems

