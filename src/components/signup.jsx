import "./Auth.css";

function Signup({ switchForm }) {
  return (
    <div className="container">
      <form className="card">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Create Account</button>

        <p>
          Already have an account?
          <span onClick={switchForm}> Login</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;