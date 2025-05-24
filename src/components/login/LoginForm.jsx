"use client";
import React from "react";

const LoginForm = () => {
  return (
    <div className=" flex  justify-center pb-28  px-4 mt-16 font-sans">
      <div className="bg-[#F8F9FA] rounded-xl shadow-sm p-8 w-full max-w-[636px] h-[488px]">
        {/* Title */}
        <h2 className="md:text-[28px] text-[23px] font-semibold text-[#848484] mb-16">
          Login
        </h2>

        {/* Mobile Field */}
        <label className="block text-base font-medium text-gray-700 mb-1">
          Mobile <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="10 Digit Mobile Number"
          className="w-full px-4 py-2 mb-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
        />

        {/* Buttons */}
        {/* Sign In With Password */}
        <button className="relative w-full text-white text-base font-bold py-2 mb-6 rounded-md overflow-hidden group bg-[#8CC63F]">
          <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">Sign In With Password</span>
        </button>

        {/* Sign In With OTP */}
        <button className="relative w-full text-white text-base font-bold py-2 rounded-md overflow-hidden group bg-[#8CC63F]">
          {/* Animated black background filling from center */}
          <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out"></span>

          {/* Button text stays above animation */}
          <span className="relative z-10">Sign In With OTP</span>
        </button>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Bottom Links */}
        <div className="text-center text-[15px] font-medium text-[#6C757D] space-y-2">
          <p>
            Don’t Have an account?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
          <p>
            Forgot Password? Enter Your Mobile Number And Click{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
