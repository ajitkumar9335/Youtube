import { useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const nav = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post("/auth/register", input);
      alert("Registration Successful");
      nav("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-xl font-bold mb-4">Register</h1>

        <input
          className="border w-full p-2 rounded mb-3"
          placeholder="Username"
          onChange={(e) => setInput({ ...input, username: e.target.value })}
        />

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
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
