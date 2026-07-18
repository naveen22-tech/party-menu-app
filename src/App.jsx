import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import SignIn from "./pages/SignIn.jsx";
import Menu from "./pages/Menu.jsx";
import FoodDetails from "./pages/FoodDetails.jsx";
import SavedRecipes from "./pages/SavedRecipes.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        }
      />
      <Route path="/menu/:id" element={<FoodDetails />} />
      <Route path="/saved-recipes" element={<SavedRecipes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
