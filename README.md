# Party Menu Application

A React 19 + Vite 6 web app for browsing, filtering, and saving dishes from a
curated party menu, with authentication backed by a live sign-in API and
static local menu data.

## Tech Stack

- React 19
- React Router DOM 7
- Vite 6
- Plain CSS (no UI framework)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Test Credentials

| Field    | Value             |
| -------- | ----------------- |
| Email    | admin@example.com |
| Password | admin123          |

## Project Structure

```
src/
  components/    Header, FoodCard, FilterBar, SavedRecipeCard, ProtectedRoute
  context/       AuthContext, SavedContext
  data/          menuData.js (static dishes + filter/lookup helpers)
  pages/         SignIn, Menu, FoodDetails, SavedRecipes, NotFound
  styles/        one CSS file per component/page
  utils/         storage.js (localStorage key helpers)
```

## Routes

| Route            | Access    | Description                    |
| ----------------- | --------- | ------------------------------ |
| `/signin`         | Public    | Sign in form                   |
| `/`               | Protected | Main menu (requires auth token) |
| `/menu/:id`       | Public    | Dish detail view               |
| `/saved-recipes`  | Public    | Saved recipes list             |
| `*`               | Public    | 404 page                       |

## Local Storage Keys

| Data          | Key                          |
| ------------- | ----------------------------- |
| Auth token    | `party_menu_token`            |
| User data     | `party_menu_user`             |
| Saved recipes | `party_menu_saved_recipes`    |

## Notes

- Menu data is entirely static (`src/data/menuData.js`) — no API key required.
- Only sign-in calls a live API endpoint (see table above).
- Do not commit real secrets to version control; use `.env` for any
  environment-specific configuration in production deployments.
