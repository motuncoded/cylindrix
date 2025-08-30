import React from "react";
import Layout from "../components/Layout";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "@tanstack/react-router";

const Signin = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col  gap-4 min-h-screen">
      <Layout />
      <section className="flex justify-center items-center flex-col  p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Access Your Account
        </h2>
        <p className="text-gray-800 mb-4">Login your account with CylindriX</p>{" "}
        <form className="flex flex-col gap-4 max-w-[500px] w-full  mx-auto">
          <div className="flex flex-col">
            {" "}
            <label htmlFor="username" className="mb-2 text-gray-800">
              Username
            </label>
            <input
              type="text"
              name=""
              id="username"
              className="border-2 border-red-200 p-2 rounded-md focus-within:border-red-400"
              placeholder="jane_joy"
            />
          </div>
          <div className="flex flex-col w-full">
            {" "}
            <label htmlFor="password" className="mb-2 text-gray-800">
              Password
            </label>
            <div className="flex justify-between items-center border-2 border-red-200 p-2 rounded-md focus-within:border-red-400">
              {" "}
              <input type="password" name="" id="password" className="" />
              <IoEyeOutline className="text-red-400" />
              {/* <IoEyeOffOutline /> */}
            </div>
          </div>

          <p className="text-right -mt-2 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-red-500 hover:text-red-600"
            >
              Sign up
            </Link>
          </p>
          <div className="flex justify-center mt-2">
            {" "}
            <button className="bg-red-400 text-white p-3  w-[200px]  font-medium rounded-md hover:bg-red-400/50 transition-colors">
              Signin
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signin;
