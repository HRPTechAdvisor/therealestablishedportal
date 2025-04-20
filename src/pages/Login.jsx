function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userRole", "athlete");
    alert("Logged in as Athlete (mock)");
  };

  return (
    <form onSubmit={handleLogin} className="p-6 bg-gray-800 rounded-lg max-w-md mx-auto">
      <input className="block bg-gray-700 p-2 w-full mb-4" placeholder="Email" />
      <input className="block bg-gray-700 p-2 w-full mb-4" placeholder="Password" type="password" />
      <select className="block bg-gray-700 p-2 w-full mb-4">
        <option>Athlete</option>
        <option>Coach</option>
      </select>
      <button className="bg-neon-green text-black font-bold py-2 px-4 rounded w-full">Login</button>
    </form>
  );
}

export default Login;
