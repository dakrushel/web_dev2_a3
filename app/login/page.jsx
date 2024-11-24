"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (data.success) {
                login({ email: data.email });
                router.push("/posts");
            } else {
                setError(data.message || "An error occurred; login failed");
            } 
        } catch (error) {
            setError("An error occurred; please try again.");
            console.error(error);
        }
    };


    return (
        <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800">
          {/* Title */}
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-8 text-center drop-shadow-md">
            Internet Movies Rental Company
          </h1>
          <p className="text-lg font-semibold text-white mb-8 text-center drop-shadow-md">
            Login to access our intventory database!
          </p>
    
          {/* Login Form */}
          <form
            className="bg-yellow-400 p-8 rounded-lg shadow-lg w-full max-w-md text-blue-900"
            onSubmit={handleLogin}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            {error && <p className="text-red-700 mb-4 text-center font-semibold">{error}</p>}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-blue-900 p-3 border border-blue-900 rounded focus:outline-none focus:ring-4 focus:ring-yellow-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full text-blue-900 p-3 border border-blue-900 rounded focus:outline-none focus:ring-4 focus:ring-yellow-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
            type="submit"
            className="w-full py-3 font-bold text-black bg-yellow-400 border-2 border-black rounded-lg shadow-md hover:bg-[repeating-linear-gradient(45deg,_black_0%,_black_20%,_white_20%,_white_40%)] hover:text-white transition-all duration-300"
            >
            Login
            </button>
          </form>
        </main>
      );
    };
    
    export default Login;