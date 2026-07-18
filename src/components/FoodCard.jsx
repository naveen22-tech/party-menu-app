import { useNavigate } from "react-router-dom";
import "../styles/food-card.css";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <article
      className="food-card"
      onClick={() => navigate(`/menu/${item.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/menu/${item.id}`);
      }}
    >
      <div className="food-card__media">
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

      <div className="food-card__body">
        <span className="food-card__category">{item.category}</span>
        <h3 className="food-card__name">{item.name}</h3>
        <p className="food-card__description">{item.description}</p>
        <p className="food-card__servings">{item.servings}</p>
      </div>
    </article>
  );
};

export default FoodCard;
