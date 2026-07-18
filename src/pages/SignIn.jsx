import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import "../styles/signin.css";

const SignIn = () => {
  const { signin, loading, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signin(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="signin">
      <div className="signin__card">
        <div className="signin__brand">
          <span className="signin__mark" aria-hidden="true">
            🍽️
          </span>
          <h1 className="signin__title">Party Menu</h1>
        </div>
        <p className="signin__subtitle">Sign in to explore our delicious menu</p>

        {error && <div className="signin__error">{error}</div>}

        <form className="signin__form" onSubmit={handleSubmit}>
          <label className="signin__field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              autoComplete="email"
            />
          </label>

          <label className="signin__field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </label>

          <button className="btn btn-primary signin__submit" type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
