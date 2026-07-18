import { useState } from "react";
import "../styles/filter-bar.css";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Starter", value: "starter" },
  { label: "Main", value: "main" },
  { label: "Sides", value: "sides" },
  { label: "Desert", value: "desert" },
];

const DIETS = [
  { label: "All", value: "all" },
  { label: "Veg", value: "veg" },
  { label: "Non-Veg", value: "nonveg" },
];

const FilterBar = ({ category, setCategory, diet, setDiet, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__row">
        <span className="filter-bar__label">Category</span>
        <div className="filter-bar__chips">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              className={`chip ${category === c.value ? "chip--active" : ""}`}
              onClick={() => setCategory(c.value)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-bar__row">
        <span className="filter-bar__label">Diet</span>
        <div className="filter-bar__chips">
          {DIETS.map((d) => (
            <button
              key={d.value}
              className={`chip ${diet === d.value ? "chip--active" : ""}`}
              onClick={() => setDiet(d.value)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-bar__search">
        <input
          type="text"
          placeholder="Search dishes by name…"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
