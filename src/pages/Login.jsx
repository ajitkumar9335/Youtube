import { useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", input);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);

      alert("Login Successful");
      nav("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input
          className="border w-full p-2 rounded mb-3"
          placeholder="Email"
          type="email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />

        <input
          className="border w-full p-2 rounded mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />

        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>

        <p
          className="text-blue-600 mt-3 cursor-pointer"
          onClick={() => nav("/register")}
        >
          Create an Account
        </p>
      </div>
    </div>
  );
};

export default Login;
