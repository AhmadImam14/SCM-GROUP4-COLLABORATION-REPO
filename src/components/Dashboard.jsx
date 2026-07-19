import { useNavigate } from "react-router-dom";
import "./Auth.css";
import UserGreeting from "../userGreeting";

function Dashboard({ onLogout, name = "User" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card dashboard-card">
        <UserGreeting isLoggedIn={true} name={name} />

        <p className="dashboard-text">
          You have successfully signed in to your account.
        </p>

        <div className="dashboard-box">
          <h3>Profile Summary</h3>
          <p>Email: user@example.com</p>
          <p>Status: Active</p>
        </div>

        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
