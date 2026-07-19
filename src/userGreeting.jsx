function UserGreeting({ isLoggedIn, name }) {
  return (
    <h1>
      {isLoggedIn ? `Welcome back, ${name}!` : "Please sign up."}
    </h1>
  );
}

export default UserGreeting;