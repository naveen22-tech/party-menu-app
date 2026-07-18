import { useNavigate } from "react-router-dom";
import "../styles/food-card.css";
import "../styles/saved-card.css";

const SavedRecipeCard = ({ item, onRemove }) => {
  const navigate = useNavigate();

  return (
    <article className="food-card saved-card">
      <div
        className="food-card__media"
        onClick={() => navigate(`/menu/${item.id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate(`/menu/${item.id}`);
        }}
      >
        <img src={item.image} alt={item.name} loading="lazy" />
        <span
          className={`food-card__diet ${
            item.isVeg ? "food-card__diet--veg" : "food-card__diet--nonveg"
          }`}
        >
          {item.isVeg ? "Veg" : "Non-Veg"}
        </span>
      </div>

      <div className="food-card__stub" aria-hidden="true">
        <span className="food-card__notch food-card__notch--left" />
        <span className="food-card__perforation" />
        <span className="food-card__notch food-card__notch--right" />
      </div>

      <div
        className="food-card__body"
        onClick={() => navigate(`/menu/${item.id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate(`/menu/${item.id}`);
        }}
      >
        <span className="food-card__category">{item.category}</span>
        <h3 className="food-card__name">{item.name}</h3>
        <p className="food-card__description">{item.description}</p>
        <p className="food-card__servings">{item.servings}</p>
      </div>

      <button
        className="btn btn-outline-danger saved-card__remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(item.id);
        }}
      >
        Remove
      </button>
    </article>
  );
};

export default SavedRecipeCard;
