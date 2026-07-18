import { createContext, useEffect, useState } from "react";

export const SavedContext = createContext();

const STORAGE_KEY = "party_menu_saved_recipes";

export const SavedProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedRecipes = localStorage.getItem(STORAGE_KEY);

    if (storedRecipes) {
      try {
        setSavedRecipes(JSON.parse(storedRecipes));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRecipes));
    }
  }, [savedRecipes, hydrated]);

  const saveRecipe = (recipe) => {
    setSavedRecipes((prev) => {
      const exists = prev.some((item) => item.id === recipe.id);
      return exists ? prev : [...prev, recipe];
    });
  };

  const removeRecipe = (id) => {
    setSavedRecipes((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  const toggleRecipe = (recipe) => {
    setSavedRecipes((prev) => {
      const exists = prev.some((item) => item.id === recipe.id);
      return exists
        ? prev.filter((item) => item.id !== recipe.id)
        : [...prev, recipe];
    });
  };

  const isSaved = (id) => savedRecipes.some((item) => String(item.id) === String(id));

  return (
    <SavedContext.Provider
      value={{
        savedRecipes,
        saveRecipe,
        removeRecipe,
        toggleRecipe,
        isSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};
