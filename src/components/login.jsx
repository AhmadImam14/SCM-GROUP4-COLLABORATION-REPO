import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login({ switchForm, onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <form className="card">
        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="button" onClick={handleLogin}>Login</button>

        <p>
          Don't have an account?
          <span onClick={switchForm}> Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;