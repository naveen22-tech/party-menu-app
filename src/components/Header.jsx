import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = ({ user, savedCount, onLogout }) => {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__brand">
          <span className="site-header__mark" aria-hidden="true">
            🍽️
          </span>
          <div>
            <h1 className="site-header__title">Party Menu</h1>
            {user && (
              <p className="site-header__welcome">Welcome, {user.name}</p>
            )}
          </div>
        </div>

        <div className="site-header__actions">
          <Link to="/saved-recipes" className="site-header__saved">
            Saved Recipes
            <span className="site-header__badge">{savedCount}</span>
          </Link>
          {onLogout && (
            <button className="btn btn-ghost" onClick={onLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
