import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Layout from "../components/Layout";
import { Link } from "@tanstack/react-router";
import useSignup from "../hooks/useSignup";
const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { mutate: register, isPending } = useSignup();

  const handlePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.fullName ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email");
      return;
    }

    if (formData.fullName.length < 3) {
      setError("Full name must be at least 3 characters long");
      return;
    }

    register(
      {
        fullName: formData.fullName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      },
      {
        onError: (error) => {
          setError(error.message || "Signup failed. Please try again.");
        },
      },
    );
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col  gap-4 min-h-screen">
      <Layout />
      <section className="flex justify-center items-center flex-col  p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-800 mb-4">
          Register to get started with CylindriX
        </p>{" "}
        {error && (
          <p className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </p>
        )}
        <form
          className="flex flex-col gap-4 max-w-[500px] w-full  mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col ">
            {" "}
            <label htmlFor="fullName" className="mb-2 text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              value={formData.fullName}
              className="w-full border-2 border-red-200 p-2 rounded-md focus-within:border-red-400 outline-none"
              placeholder="Jane Joy"
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="username" className="mb-2 text-gray-800">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={formData.username}
              className="w-full border-2 border-red-200 p-2 rounded-md focus-within:border-red-400 outline-none"
              placeholder="jane_joy"
            />
          </div>

          <div className="flex flex-col">
            {" "}
            <label htmlFor="email" className="mb-2 text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-red-200 p-2 rounded-md focus-within:border-red-400 outline-none"
              placeholder="jacy_joy@gmail.com"
            />
          </div>
          <div className="flex flex-col w-full">
            {" "}
            <label htmlFor="password" className="mb-2 text-gray-800">
              Password
            </label>
            <div className="flex justify-between items-center border-2 border-red-200 p-2 rounded-md focus-within:border-red-400">
              {" "}
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="outline-none w-full"
              />
              <button type="button" onClick={handlePassword}>
                {showPassword ? (
                  <IoEyeOutline onClick={handlePassword} />
                ) : (
                  <IoEyeOffOutline />
                )}
              </button>
            </div>
          </div>

          <p className="text-right -mt-2 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-medium text-red-500 hover:text-red-600"
            >
              Sign in
            </Link>
          </p>
          <div className="flex justify-center mt-2">
            {" "}
            <button
              type="submit"
              className="bg-red-400 text-white p-3  w-[200px]  font-medium rounded-md hover:bg-red-400/50 transition-colors"
            >
              {isPending ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
