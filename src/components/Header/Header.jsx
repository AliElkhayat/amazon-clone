import { Link } from "react-router-dom";
import Logo from "../../assets/images/header-logo.png";
import searchIcon from "../../assets/images/icons/searchIcon.png";
import shoppingCart from "../../assets/images/icons/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";

const Header = () => {
  const { user, basket } = useAuth()
  useEffect(() => {
    if (user) {
      console.log("User email:", user.email);
    } else {
      console.log("No user logged in");
    }
  }, [user]); const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header-logo" src={Logo} alt="logo-img" />
        </Link>
        <div className="header-search">
          <input className="header-searchInput" id="header-searchInput" type="text" />
          <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
        </div>
        <div className="header-nav">
          <Link to={!user && "/login"}>
            <div className="header-option" onClick={handleAuthentication} >
              <span className="header-optionLineOne">
                Hello <span className="the-email-option"> {user ? `${user.email}` : "Guest"}</span>
              </span>
              <span className="header-optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header-option">
              <span className="header-optionLineOne">Returns</span>
              <span className="header-optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/prime">
            <div className="header-option">
              <span className="header-optionLineOne">Your</span>
              <span className="header-optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header-optionBasket">
              <img src={shoppingCart} />
              <span className="header-optionLineTwo header-basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
