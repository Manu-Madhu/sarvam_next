"use client";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className=" flex  justify-center pb-28  px-4 mt-16 font-sans">
      <div className="bg-[#F8F9FA] rounded-xl shadow-sm p-8 w-full max-w-[636px] ">
        {/* Title */}
        <h2 className="md:text-[28px] text-[23px] font-semibold text-[#848484] mb-1">
          Registration
        </h2>
        <p className="text-[16px] font-semibold text-[#848484] mb-16">
          Enter your details to register
        </p>

        {/* Mobile Field */}
        <label className="block text-base font-medium text-[#848484] mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 mb-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
        />
        <label className="block text-base font-medium text-[#848484] mb-1">
          E-Mail <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="name@exaple.com"
          className="w-full px-4 py-2 mb-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
        />
        <label className="block text-base font-medium text-[#848484] mb-1">
          Mobile <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="10 Digit Mobile Number"
          className="w-full px-4 py-2 mb-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
        />
        {/* Password Field */}
        <label className="block text-base font-medium text-[#848484] mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 pr-12 text-base border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center p-3 rounded-r-md bg-[#6C757D] text-white"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
          </button>
        </div>

        {/* Confirm Password Field */}
        <label className="block text-base font-medium text-[#848484] mb-1">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 pr-12 text-base border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center p-3 rounded-r-md bg-[#6C757D] text-white"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
          </button>
        </div>

        {/* Buttons */}
        {/* Sign Up  */}
        <button className="relative w-full text-white text-base font-bold py-2 mb-6 rounded-md overflow-hidden group bg-[#8CC63F]">
          <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">Sign-Up</span>
        </button>

        <p className="text-[#6C757D]">
          I agree to the{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            terms and conditions
          </span>
        </p>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Bottom Links */}
        <div className="text-center text-[15px] font-medium text-[#6C757D] space-y-2">
          <p>
            Already have an account?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
