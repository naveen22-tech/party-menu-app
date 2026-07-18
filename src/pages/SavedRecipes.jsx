import { useContext } from "react";
import { Link } from "react-router-dom";
import { SavedContext } from "../context/SavedContext.jsx";
import SavedRecipeCard from "../components/SavedRecipeCard.jsx";
import "../styles/saved.css";

const SavedRecipes = () => {
  const { savedRecipes, removeRecipe } = useContext(SavedContext);

  return (
    <div className="saved-page">
      <div className="container saved-page__inner">
        <div className="saved-page__nav">
          <Link to="/" className="saved-page__back">
            ← Back to Menu
          </Link>
        </div>

        <h1 className="saved-page__title">Saved Recipes</h1>
        <p className="saved-page__subtitle">
          {savedRecipes.length} {savedRecipes.length === 1 ? "recipe" : "recipes"} saved
        </p>

        {savedRecipes.length === 0 ? (
          <div className="saved-page__empty">
            <p>No saved recipes yet</p>
            <Link to="/" className="empty">
              Browse the menu
            </Link>
          </div>
        ) : (
          <div className="saved-page__grid">
            {savedRecipes.map((item) => (
              <SavedRecipeCard key={item.id} item={item} onRemove={removeRecipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedRecipes;
