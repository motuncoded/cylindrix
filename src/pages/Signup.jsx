import React from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Layout from "../components/Layout";
import { Link } from "@tanstack/react-router";

const Signup = () => {
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
        <form className="flex flex-col gap-4 max-w-[500px] w-full  mx-auto">
          <div className="flex flex-col ">
            {" "}
            <label htmlFor="fullName" className="mb-2 text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full border-2 border-red-200 p-2 rounded-md focus-within:border-red-400"
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
              name=""
              id=""
              className="border-2 border-red-200 p-2 rounded-md focus-within:border-red-400"
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
              name=""
              id=""
              className="border-2 border-red-200 p-2 rounded-md focus-within:border-red-400 w-full"
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
              <input type="password" name="" id="" className="" />
              <IoEyeOutline className="text-red-400" />
              {/* <IoEyeOffOutline /> */}
            </div>
          </div>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="confirmPassword" className="mb-2 text-gray-800">
              {" "}
              Confirm Password
            </label>
            <div className="flex justify-between items-center border-2 border-red-200 p-2 rounded-md focus-within:border-red-400">
              {" "}
              <input type="password" name="" id="" className="" />
              <IoEyeOutline className="text-red-400" />
            </div>
          </div>
          <p className="text-right -mt-2 text-gray-600">
            Already have an account?{" "}
            <Link
              to="signin"
              className="font-medium text-red-500 hover:text-red-600"
            >
              Sign in
            </Link>
          </p>
          <div className="flex justify-center mt-2">
            {" "}
            <button className="bg-red-400 text-white p-3  w-[200px]  font-medium rounded-md hover:bg-red-400/50 transition-colors">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
