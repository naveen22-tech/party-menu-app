import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import "../styles/not-found.css";

const NotFound = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="not-found">
      <div className="not-found__inner">
        <span className="not-found__code">404</span>
        <h1>Page Not Found</h1>
        <p>The dish you're looking for isn't on tonight's menu.</p>
        <Link to={isAuthenticated ? "/" : "/signin"} className="btn btn-primary">
          {isAuthenticated ? "Back to Menu" : "Go to Sign In"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
