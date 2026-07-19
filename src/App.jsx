import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : isLogin ? (
              <Login
                switchForm={() => setIsLogin(false)}
                onLogin={() => setIsLoggedIn(true)}
              />
            ) : (
              <Signup switchForm={() => setIsLogin(true)} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              name="User"
              onLogout={() => {
                setIsLoggedIn(false);
                setIsLogin(true);
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;