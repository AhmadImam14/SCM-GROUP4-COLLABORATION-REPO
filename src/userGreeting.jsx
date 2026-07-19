function UserGreeting({ isLoggedIn, name }) {
  return (
    <h1>
      {isLoggedIn ? `Welcome back, ${name}!` : "Join us today and get started."}
    </h1>
  );
}

export default UserGreeting;