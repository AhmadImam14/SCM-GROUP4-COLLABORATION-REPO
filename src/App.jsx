import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <Login switchForm={() => setIsLogin(false)} />
      ) : (
        <Signup switchForm={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;