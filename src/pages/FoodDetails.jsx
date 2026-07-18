import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SavedContext } from "../context/SavedContext.jsx";
import { getMenuItemById } from "../data/menuData.js";
import "../styles/food-card.css";
import "../styles/details.css";

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSaved, toggleRecipe } = useContext(SavedContext);

  const item = getMenuItemById(id);

  if (!item) {
    return (
      <div className="details-page details-page--missing">
        <div className="container">
          <p>We couldn't find that dish.</p>
          <Link to="/" className="btn btn-primary">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const saved = isSaved(item.id);

  return (
    <div className="details-page">
      <div className="container details-page__inner">
        <div className="details-page__nav">
          <button className="btn btn-ghost" onClick={() => navigate("/")}>
            ← Back to Menu
          </button>
          <Link to="/saved-recipes" className="details-page__saved-link">
            Saved Recipes
          </Link>
        </div>

        <div className="details-page__layout">
          <div className="details-page__hero">
            <img src={item.image} alt={item.name} />
            <span
              className={`food-card__diet ${
                item.isVeg ? "food-card__diet--veg" : "food-card__diet--nonveg"
              }`}
            >
              {item.isVeg ? "Veg" : "Non-Veg"}
            </span>
          </div>

          <div className="details-page__info">
            <span className="details-page__category">{item.category}</span>
            <h1 className="details-page__name">{item.name}</h1>
            <p className="details-page__servings">{item.servings}</p>

            <p className="details-page__description">{item.fullDescription}</p>

            <div className="details-page__ingredients">
              <h2>Ingredients</h2>
              <ul>
                {item.ingredients.map((ing, idx) => (
                  <li key={idx}>
                    <span>{ing.name}</span>
                    <span className="details-page__quantity">{ing.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`btn ${saved ? "btn-ghost" : "btn-primary"} details-page__save`}
              onClick={() => toggleRecipe(item)}
            >
              {saved ? "✓ Saved" : "Save Recipe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
