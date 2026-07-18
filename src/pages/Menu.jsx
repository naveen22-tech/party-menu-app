import { useContext, useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import FilterBar from "../components/FilterBar.jsx";
import FoodCard from "../components/FoodCard.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { SavedContext } from "../context/SavedContext.jsx";
import { filterMenuItems } from "../data/menuData.js";
import "../styles/menu.css";

const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const { savedRecipes } = useContext(SavedContext);

  const [category, setCategory] = useState("all");
  const [diet, setDiet] = useState("all");
  const [search, setSearch] = useState("");

  const items = useMemo(
    () => filterMenuItems({ category, diet, name: search }),
    [category, diet, search]
  );

  return (
    <div className="menu-page">
      <Header user={user} savedCount={savedRecipes.length} onLogout={logout} />

      <main className="container menu-page__content">
        <FilterBar
          category={category}
          setCategory={setCategory}
          diet={diet}
          setDiet={setDiet}
          onSearch={setSearch}
        />

        <div className="menu-page__meta">
          <span className="eyebrow">
            {items.length} {items.length === 1 ? "item" : "items"} found
          </span>
        </div>

        {items.length === 0 ? (
          <div className="menu-page__empty">
            <p>No dishes found. Try different filters.</p>
          </div>
        ) : (
          <div className="menu-page__grid">
            {items.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
