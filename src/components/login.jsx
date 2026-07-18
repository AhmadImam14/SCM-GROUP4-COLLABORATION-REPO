import "./Auth.css";

function Login({ switchForm }) {
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

        <button>Login</button>

        <p>
          Don't have an account?
          <span onClick={switchForm}> Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;