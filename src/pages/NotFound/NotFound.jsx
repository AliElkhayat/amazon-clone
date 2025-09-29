import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/NotFound.jpg"
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src={NotFoundImg} alt="Not Found" className="notfound-image" />
            <h1>Sorry, we couldn’t find that page</h1>
            <p>Try searching or go back to the homepage.</p>
            <Link to="/" className="notfound-button">
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
